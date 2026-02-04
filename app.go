package main

import (
	"bufio"
	"context"
	"fmt"
	"io"
	"os"
	"os/exec"
	"path/filepath"
	"runtime"
	"strings"
	"sync"

	wailsRuntime "github.com/wailsapp/wails/v2/pkg/runtime"
)

type App struct {
	ctx        context.Context
	cancelMu   sync.Mutex
	cancelFunc context.CancelFunc
}

type VideoMeta struct {
	Title    string `json:"title"`
	Url      string `json:"url"`
	Duration string `json:"duration"`
}

type PlaylistResult struct {
	Name   string      `json:"name"`
	Videos []VideoMeta `json:"videos"`
}

func NewApp() *App {
	return &App{}
}

func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

func (a *App) CancelDownload() {
	a.cancelMu.Lock()
	defer a.cancelMu.Unlock()
	if a.cancelFunc != nil {
		a.cancelFunc()
	}
}

func (a *App) AnalyzePlaylist(url string) PlaylistResult {
	cwd, _ := os.Getwd()
	exeName := "yt-dlp.exe"
	if runtime.GOOS != "windows" {
		exeName = "yt-dlp"
	}
	ytDlpPath := filepath.Join(cwd, exeName)

	cmd := exec.Command(ytDlpPath, "--flat-playlist", "--print", "%(playlist_title)s", "--print", "%(webpage_url)s ||| %(title)s ||| %(duration_string)s", url)
	
	output, err := cmd.Output()
	if err != nil {
		return PlaylistResult{Name: "Error", Videos: []VideoMeta{}}
	}

	lines := strings.Split(string(output), "\n")
	var result PlaylistResult
	result.Videos = []VideoMeta{}
	playlistName := "Single_Downloads"

	for _, line := range lines {
		line = strings.TrimSpace(line)
		if line == "" { continue }

		if strings.Contains(line, " ||| ") {
			parts := strings.Split(line, " ||| ")
			if len(parts) >= 2 {
				dur := "N/A"
				if len(parts) >= 3 { dur = parts[2] }
				result.Videos = append(result.Videos, VideoMeta{Url: parts[0], Title: parts[1], Duration: dur})
			}
		} else {
			if playlistName == "Single_Downloads" && line != "NA" { playlistName = line }
		}
	}
	
	result.Name = sanitizeFilename(playlistName)
	return result
}

func sanitizeFilename(name string) string {
	invalid := []string{"<", ">", ":", "\"", "/", "\\", "|", "?", "*"}
	for _, char := range invalid {
		name = strings.ReplaceAll(name, char, "")
	}
	return strings.TrimSpace(name)
}

func (a *App) DownloadVideo(url string, mode string, subfolder string, filePrefix string) string {
	cwd, err := os.Getwd()
	if err != nil { return "Error: Working directory not found" }

	exeName := "yt-dlp.exe"
	if runtime.GOOS != "windows" { exeName = "yt-dlp" }
	ytDlpPath := filepath.Join(cwd, exeName)

	if subfolder == "" { subfolder = "Mixed" }
	baseFolder := "downloads"
	categoryFolder := "Video"
	if mode == "mp3" { categoryFolder = "Music" }
	
	finalPath := filepath.Join(cwd, baseFolder, categoryFolder, subfolder)
	os.MkdirAll(finalPath, 0755)

	var args []string
	videoTemplate := filepath.Join(finalPath, filePrefix + "%(title)s [%(height)sp].%(ext)s")
	audioTemplate := filepath.Join(finalPath, filePrefix + "%(title)s.%(ext)s")

	switch mode {
	case "mp3":
		args = []string{"-x", "--audio-format", "mp3", "-o", audioTemplate, url}
	case "1080":
		args = []string{"-f", "bestvideo[height<=1080]+bestaudio/best[height<=1080]/best", "-o", videoTemplate, url}
	case "720":
		args = []string{"-f", "bestvideo[height<=720]+bestaudio/best[height<=720]/best", "-o", videoTemplate, url}
	case "480":
		args = []string{"-f", "bestvideo[height<=480]+bestaudio/best[height<=480]/best", "-o", videoTemplate, url}
	case "360":
		args = []string{"-f", "bestvideo[height<=360]+bestaudio/best[height<=360]/best", "-o", videoTemplate, url}
	default:
		args = []string{"-o", videoTemplate, url}
	}

	ctx, cancel := context.WithCancel(context.Background())
	a.cancelMu.Lock()
	a.cancelFunc = cancel
	a.cancelMu.Unlock()
	defer func() {
		a.cancelMu.Lock()
		a.cancelFunc = nil
		a.cancelMu.Unlock()
	}()

	cmd := exec.CommandContext(ctx, ytDlpPath, args...)

	stdout, _ := cmd.StdoutPipe()
	stderr, _ := cmd.StderrPipe()

	if err := cmd.Start(); err != nil {
		return "Error: Startup failed: " + err.Error()
	}

	go func() {
		reader := io.MultiReader(stdout, stderr)
		scanner := bufio.NewScanner(reader)
		for scanner.Scan() {
			wailsRuntime.EventsEmit(a.ctx, "download_log", scanner.Text())
		}
	}()

	err = cmd.Wait()

	if ctx.Err() == context.Canceled {
		return "CANCELLED_BY_USER"
	}

	if err != nil {
		return fmt.Sprintf("Error: Execution failed: %s (see logs)", err.Error())
	}

	return "Success"
}