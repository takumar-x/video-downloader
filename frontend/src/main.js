import {DownloadVideo, AnalyzePlaylist, CancelDownload} from '../wailsjs/go/main/App';
import {EventsOn} from '../wailsjs/runtime/runtime';

const translations = {
    en: {
        app_title: "Video Downloader",
        placeholder_input: "Paste links here...",
        btn_next: "Next (Analyze)",
        btn_analyzing: "Analyzing...",
        btn_all: "All",
        btn_none: "None",
        lbl_numbering: "Numbering",
        btn_back: "Back",
        btn_download: "Download",
        btn_stop_download: "STOP DOWNLOAD",
        btn_stopping: "STOPPING...",
        btn_stop: "STOP",
        btn_show_logs: "[+] Show logs (console)",
        btn_hide_logs: "[-] Hide logs",
        status_input_empty: "Paste links!",
        status_analyzing: "Analyzing {n} links...",
        status_reading_playlist: "Reading playlist [{i}/{n}]...",
        status_nothing_found: "Nothing found.",
        status_error: "Error: {msg}",
        status_files_count: "Files: {n}",
        group_single: "Single Files",
        error_prefix: "Error",
        alert_select_files: "Select files!",
        status_interface_unlocked: "Interface unlocked.",
        log_stopped: "⛔ STOPPED",
        log_interrupted: "⛔ Interrupted: {title}",
        status_progress: "[{i}/{n}] {pct}%\n📂 {folder}\n🎬 {title}",
        status_done: "Done! OK: {ok}, Fail: {fail}"
    },
    uk: {
        app_title: "Відео Завантажувач",
        placeholder_input: "Вставте посилання сюди...",
        btn_next: "Далі (Аналіз)",
        btn_analyzing: "Аналіз...",
        btn_all: "Всі",
        btn_none: "Жодного",
        lbl_numbering: "Нумерація",
        btn_back: "Назад",
        btn_download: "Завантажити",
        btn_stop_download: "ЗУПИНИТИ ЗАВАНТАЖЕННЯ",
        btn_stopping: "ПРИПИНЕННЯ...",
        btn_stop: "ЗУПИНИТИ",
        btn_show_logs: "[+] Показати логи (консоль)",
        btn_hide_logs: "[-] Сховати логи",
        status_input_empty: "Вставте посилання!",
        status_analyzing: "Аналіз {n} посилань...",
        status_reading_playlist: "Читання плейлиста [{i}/{n}]...",
        status_nothing_found: "Нічого не знайдено.",
        status_error: "Помилка: {msg}",
        status_files_count: "Файлів: {n}",
        group_single: "Одиночні файли",
        error_prefix: "Помилка",
        alert_select_files: "Оберіть файли!",
        status_interface_unlocked: "Інтерфейс розблоковано.",
        log_stopped: "⛔ ЗУПИНЕНО",
        log_interrupted: "⛔ Перервано: {title}",
        status_progress: "[{i}/{n}] {pct}%\n📂 {folder}\n🎬 {title}",
        status_done: "Готово! OK: {ok}, Fail: {fail}"
    },
    ru: {
        app_title: "Видео Загрузчик",
        placeholder_input: "Вставьте ссылки сюда...",
        btn_next: "Далее (Анализ)",
        btn_analyzing: "Анализ...",
        btn_all: "Все",
        btn_none: "Ничего",
        lbl_numbering: "Нумерация",
        btn_back: "Назад",
        btn_download: "Скачать",
        btn_stop_download: "ОСТАНОВИТЬ ЗАГРУЗКУ",
        btn_stopping: "ПРЕРЫВАНИЕ...",
        btn_stop: "ОСТАНОВИТЬ",
        btn_show_logs: "[+] Показать логи (консоль)",
        btn_hide_logs: "[-] Скрыть логи",
        status_input_empty: "Вставьте ссылки!",
        status_analyzing: "Анализ {n} ссылок...",
        status_reading_playlist: "Чтение плейлиста [{i}/{n}]...",
        status_nothing_found: "Ничего не найдено.",
        status_error: "Ошибка: {msg}",
        status_files_count: "Файлов: {n}",
        group_single: "Одиночные файлы",
        error_prefix: "Ошибка",
        alert_select_files: "Выберите файлы!",
        status_interface_unlocked: "Интерфейс разблокирован.",
        log_stopped: "⛔ ОСТАНОВЛЕНО",
        log_interrupted: "⛔ Прервано: {title}",
        status_progress: "[{i}/{n}] {pct}%\n📂 {folder}\n🎬 {title}",
        status_done: "Готово! OK: {ok}, Fail: {fail}"
    },
    es: {
        app_title: "Descargador de Video",
        placeholder_input: "Pegue los enlaces aquí...",
        btn_next: "Siguiente (Análisis)",
        btn_analyzing: "Analizando...",
        btn_all: "Todos",
        btn_none: "Ninguno",
        lbl_numbering: "Numeración",
        btn_back: "Atrás",
        btn_download: "Descargar",
        btn_stop_download: "DETENER DESCARGA",
        btn_stopping: "DETENIENDO...",
        btn_stop: "DETENER",
        btn_show_logs: "[+] Mostrar registros",
        btn_hide_logs: "[-] Ocultar registros",
        status_input_empty: "¡Pegue los enlaces!",
        status_analyzing: "Analizando {n} enlaces...",
        status_reading_playlist: "Leyendo lista [{i}/{n}]...",
        status_nothing_found: "Nada encontrado.",
        status_error: "Error: {msg}",
        status_files_count: "Archivos: {n}",
        group_single: "Archivos individuales",
        error_prefix: "Error",
        alert_select_files: "¡Seleccione archivos!",
        status_interface_unlocked: "Interfaz desbloqueada.",
        log_stopped: "⛔ DETENIDO",
        log_interrupted: "⛔ Interrumpido: {title}",
        status_progress: "[{i}/{n}] {pct}%\n📂 {folder}\n🎬 {title}",
        status_done: "¡Hecho! OK: {ok}, Fallo: {fail}"
    },
    it: {
        app_title: "Scaricatore Video",
        placeholder_input: "Incolla i link qui...",
        btn_next: "Avanti (Analisi)",
        btn_analyzing: "Analisi...",
        btn_all: "Tutti",
        btn_none: "Nessuno",
        lbl_numbering: "Numerazione",
        btn_back: "Indietro",
        btn_download: "Scarica",
        btn_stop_download: "FERMA SCARICAMENTO",
        btn_stopping: "ARRESTO...",
        btn_stop: "FERMA",
        btn_show_logs: "[+] Mostra registri",
        btn_hide_logs: "[-] Nascondi registri",
        status_input_empty: "Incolla i link!",
        status_analyzing: "Analisi di {n} link...",
        status_reading_playlist: "Lettura playlist [{i}/{n}]...",
        status_nothing_found: "Nessun risultato.",
        status_error: "Errore: {msg}",
        status_files_count: "File: {n}",
        group_single: "File singoli",
        error_prefix: "Errore",
        alert_select_files: "Seleziona i file!",
        status_interface_unlocked: "Interfaccia sbloccata.",
        log_stopped: "⛔ FERMATO",
        log_interrupted: "⛔ Interrotto: {title}",
        status_progress: "[{i}/{n}] {pct}%\n📂 {folder}\n🎬 {title}",
        status_done: "Fatto! OK: {ok}, Falliti: {fail}"
    },
    de: {
        app_title: "Video-Downloader",
        placeholder_input: "Links hier einfügen...",
        btn_next: "Weiter (Analyse)",
        btn_analyzing: "Analysieren...",
        btn_all: "Alle",
        btn_none: "Keine",
        lbl_numbering: "Nummerierung",
        btn_back: "Zurück",
        btn_download: "Herunterladen",
        btn_stop_download: "DOWNLOAD STOPPEN",
        btn_stopping: "STOPPEN...",
        btn_stop: "STOPPEN",
        btn_show_logs: "[+] Logs anzeigen",
        btn_hide_logs: "[-] Logs ausblenden",
        status_input_empty: "Links einfügen!",
        status_analyzing: "Analysiere {n} Links...",
        status_reading_playlist: "Lese Playlist [{i}/{n}]...",
        status_nothing_found: "Nichts gefunden.",
        status_error: "Fehler: {msg}",
        status_files_count: "Dateien: {n}",
        group_single: "Einzeldateien",
        error_prefix: "Fehler",
        alert_select_files: "Dateien auswählen!",
        status_interface_unlocked: "Schnittstelle entsperrt.",
        log_stopped: "⛔ GESTOPPT",
        log_interrupted: "⛔ Unterbrochen: {title}",
        status_progress: "[{i}/{n}] {pct}%\n📂 {folder}\n🎬 {title}",
        status_done: "Fertig! OK: {ok}, Fehler: {fail}"
    },
    fr: {
        app_title: "Téléchargeur Vidéo",
        placeholder_input: "Collez les liens ici...",
        btn_next: "Suivant (Analyse)",
        btn_analyzing: "Analyse...",
        btn_all: "Tous",
        btn_none: "Aucun",
        lbl_numbering: "Numérotation",
        btn_back: "Retour",
        btn_download: "Télécharger",
        btn_stop_download: "ARRÊTER TÉLÉCHARGEMENT",
        btn_stopping: "ARRÊT...",
        btn_stop: "ARRÊTER",
        btn_show_logs: "[+] Afficher logs",
        btn_hide_logs: "[-] Masquer logs",
        status_input_empty: "Collez des liens!",
        status_analyzing: "Analyse de {n} liens...",
        status_reading_playlist: "Lecture playlist [{i}/{n}]...",
        status_nothing_found: "Rien trouvé.",
        status_error: "Erreur: {msg}",
        status_files_count: "Fichiers: {n}",
        group_single: "Fichiers uniques",
        error_prefix: "Erreur",
        alert_select_files: "Sélectionnez des fichiers!",
        status_interface_unlocked: "Interface déverrouillée.",
        log_stopped: "⛔ ARRÊTÉ",
        log_interrupted: "⛔ Interrompu: {title}",
        status_progress: "[{i}/{n}] {pct}%\n📂 {folder}\n🎬 {title}",
        status_done: "Terminé! OK: {ok}, Échecs: {fail}"
    },
    pl: {
        app_title: "Pobieracz Wideo",
        placeholder_input: "Wklej linki tutaj...",
        btn_next: "Dalej (Analiza)",
        btn_analyzing: "Analiza...",
        btn_all: "Wszystkie",
        btn_none: "Żadne",
        lbl_numbering: "Numeracja",
        btn_back: "Wstecz",
        btn_download: "Pobierz",
        btn_stop_download: "ZATRZYMAJ POBIERANIE",
        btn_stopping: "ZATRZYMYWANIE...",
        btn_stop: "ZATRZYMAJ",
        btn_show_logs: "[+] Pokaż logi",
        btn_hide_logs: "[-] Ukryj logi",
        status_input_empty: "Wklej linki!",
        status_analyzing: "Analiza {n} linków...",
        status_reading_playlist: "Odczyt playlisty [{i}/{n}]...",
        status_nothing_found: "Nic nie znaleziono.",
        status_error: "Błąd: {msg}",
        status_files_count: "Plików: {n}",
        group_single: "Pojedyncze pliki",
        error_prefix: "Błąd",
        alert_select_files: "Wybierz pliki!",
        status_interface_unlocked: "Interfejs odblokowany.",
        log_stopped: "⛔ ZATRZYMANO",
        log_interrupted: "⛔ Przerwano: {title}",
        status_progress: "[{i}/{n}] {pct}%\n📂 {folder}\n🎬 {title}",
        status_done: "Gotowe! OK: {ok}, Błędy: {fail}"
    }
};

let inputScreen = document.getElementById("input-screen");
let selectionScreen = document.getElementById("playlist-selection");
let itemsContainer = document.getElementById("playlist-items-container");
let playlistStats = document.getElementById("playlist-stats");
let urlsInput = document.getElementById("video-urls");
let resultElement = document.getElementById("result");
let btnStop = document.querySelector(".btn-stop");
let mainBtn = document.querySelector("#input-screen .btn");
let terminal = document.getElementById("terminal-container");
let logToggleBtn = document.getElementById("log-toggle-btn");
let langMenu = document.getElementById("lang-menu");

let isCancelled = false;
let currentQuality = "720";
let currentLang = localStorage.getItem('app_lang') || 'en';

function t(key, params = {}) {
    let text = translations[currentLang][key] || key;
    for (const [k, v] of Object.entries(params)) {
        text = text.replace(`{${k}}`, v);
    }
    return text;
}

function updateTexts() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        el.innerText = t(el.getAttribute('data-i18n'));
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
    });
    
    document.querySelectorAll('.lang-option').forEach(opt => {
        if (opt.innerText.includes(currentLang === 'en' ? 'English' : '')) opt.classList.remove('active');
        // Simple active state logic relying on click handler re-render usually, but here we just update styles
    });
}

window.toggleLangMenu = function() {
    langMenu.classList.toggle('show');
}

window.setLanguage = function(lang) {
    currentLang = lang;
    localStorage.setItem('app_lang', lang);
    langMenu.classList.remove('show');
    updateTexts();
    
    if (logToggleBtn.innerText.includes("[+]")) {
        logToggleBtn.innerText = t('btn_show_logs');
    } else {
        logToggleBtn.innerText = t('btn_hide_logs');
    }
}

document.addEventListener('click', function(e) {
    if (!e.target.matches('#lang-icon')) {
        langMenu.classList.remove('show');
    }
});

// Init Language
updateTexts();

EventsOn("download_log", (message) => {
    let p = document.createElement("div");
    p.innerText = message;
    terminal.appendChild(p);
    terminal.scrollTop = terminal.scrollHeight;
    if (terminal.childElementCount > 500) {
        terminal.removeChild(terminal.firstChild);
    }
});

window.toggleLogs = function() {
    if (terminal.style.display === "none" || terminal.style.display === "") {
        terminal.style.display = "block";
        logToggleBtn.innerText = t('btn_hide_logs');
    } else {
        terminal.style.display = "none";
        logToggleBtn.innerText = t('btn_show_logs');
    }
}

window.selectQuality = function(mode, element) {
    currentQuality = mode;
    document.querySelectorAll('.q-btn').forEach(btn => btn.classList.remove('active'));
    element.classList.add('active');
};

window.preCheckInput = async function() {
    let rawText = urlsInput.value.trim();
    if (!rawText) return showStatus(t('status_input_empty'), "#f7768e");

    let links = rawText.split('\n').map(s => s.trim()).filter(s => s.length > 0);
    if (!links.length) return;

    mainBtn.disabled = true;
    mainBtn.innerText = t('btn_analyzing');
    showStatus(t('status_analyzing', {n: links.length}), "#e0af68");

    let collectedGroups = [];
    let singleItems = [];

    try {
        for (let i = 0; i < links.length; i++) {
            let link = links[i];
            if (link.includes("list=")) {
                showStatus(t('status_reading_playlist', {i: i+1, n: links.length}), "#7aa2f7");
                try {
                    let result = await AnalyzePlaylist(link);
                    if (result.videos && result.videos.length > 0) {
                        collectedGroups.push({ groupName: result.name, folder: result.name, items: result.videos });
                    } else {
                        singleItems.push({ url: link, title: link, duration: "" });
                    }
                } catch (e) {
                    singleItems.push({ url: link, title: t('error_prefix') + ": " + link, duration: "" });
                }
            } else {
                try {
                    let result = await AnalyzePlaylist(link);
                     if (result.videos && result.videos.length > 0) {
                         let v = result.videos[0];
                         singleItems.push({ url: v.url, title: v.title, duration: v.duration });
                     } else {
                         singleItems.push({ url: link, title: link, duration: "" });
                     }
                } catch {
                     singleItems.push({ url: link, title: link, duration: "" });
                }
            }
        }

        if (singleItems.length > 0) {
            collectedGroups.push({ groupName: t('group_single'), folder: "Single_Files", items: singleItems });
        }

        if (collectedGroups.length === 0) {
            showStatus(t('status_nothing_found'), "#f7768e");
            return;
        }

        showSelectionScreenMulti(collectedGroups);
    } catch (err) {
        showStatus(t('status_error', {msg: err}), "#f7768e");
    } finally {
        mainBtn.disabled = false;
        mainBtn.innerText = t('btn_next');
    }
};

function showSelectionScreenMulti(groups) {
    let total = groups.reduce((acc, g) => acc + g.items.length, 0);
    playlistStats.innerText = t('status_files_count', {n: total});
    itemsContainer.innerHTML = "";

    groups.forEach((group, gIndex) => {
        let header = document.createElement("div");
        header.className = "group-header";
        header.innerText = `📂 ${group.groupName}`;
        itemsContainer.appendChild(header);

        group.items.forEach((video, vIndex) => {
            let div = document.createElement("div");
            div.className = "playlist-item";
            let uid = `g${gIndex}_v${vIndex}`;
            let durHtml = (video.duration && video.duration !== "N/A") 
                ? `<span class="duration-badge">${video.duration}</span>` 
                : "";

            div.innerHTML = `
                <input type="checkbox" id="${uid}" value="${video.url}" data-title="${video.title}" data-folder="${group.folder}" checked>
                <label for="${uid}" title="${video.title}">${vIndex+1}. ${video.title}</label>
                ${durHtml}
            `;
            itemsContainer.appendChild(div);
        });
    });

    inputScreen.style.display = "none";
    selectionScreen.style.display = "flex";
    showStatus("", "white");
}

window.toggleAll = function(state) {
    itemsContainer.querySelectorAll("input[type='checkbox']").forEach(cb => cb.checked = state);
}
window.cancelSelection = function() {
    selectionScreen.style.display = "none";
    inputScreen.style.display = "flex";
}

window.confirmDownload = function() {
    let checked = itemsContainer.querySelectorAll("input[type='checkbox']:checked");
    if (!checked.length) return alert(t('alert_select_files'));
    let useNumbering = document.getElementById("add-numbering").checked;
    
    terminal.innerHTML = "";
    
    let queue = [];
    checked.forEach(cb => queue.push({ 
        url: cb.value, 
        title: cb.getAttribute("data-title"), 
        folder: cb.getAttribute("data-folder") 
    }));
    
    selectionScreen.style.display = "none";
    inputScreen.style.display = "flex";
    startBatchDownload(queue, useNumbering);
}

window.stopDownload = function() {
    isCancelled = true;
    btnStop.innerText = t('btn_stopping');
    btnStop.disabled = true;
    CancelDownload();
    setTimeout(() => { if(btnStop.style.display !== "none") showStatus(t('status_interface_unlocked'), "#f7768e"); }, 2000); 
}

async function startBatchDownload(queue, numberingEnabled) {
    let mode = currentQuality;
    isCancelled = false;
    
    inputScreen.style.display = "none";
    btnStop.style.display = "block";
    btnStop.disabled = false;
    btnStop.innerText = t('btn_stop');
    
    let success = 0, fail = 0, logs = [];
    let paddingDigits = queue.length >= 100 ? 3 : 2;

    for (let i = 0; i < queue.length; i++) {
        if (isCancelled) { logs.push(t('log_stopped')); break; }
        let item = queue[i];
        let prefix = "";
        if (numberingEnabled) {
            prefix = String(i + 1).padStart(paddingDigits, '0') + ". ";
        }

        let pct = Math.round(((i+1)/queue.length)*100);
        showStatus(t('status_progress', {
            i: i+1, 
            n: queue.length, 
            pct: pct, 
            folder: item.folder, 
            title: prefix + item.title
        }), "#7aa2f7");

        try {
            let resp = await DownloadVideo(item.url, mode, item.folder, prefix);
            if (resp === "CANCELLED_BY_USER" || isCancelled) { 
                isCancelled = true; 
                logs.push(t('log_interrupted', {title: item.title})); 
                break; 
            }
            if (resp.includes("Ошибка") || resp.includes("Error")) { 
                fail++; logs.push(`❌ ${item.title.substring(0,20)}...`); 
            } else { 
                success++; logs.push(`✅ ${prefix}${item.title.substring(0,20)}...`); 
            }
        } catch (e) { fail++; logs.push(`❌ ` + t('status_error', {msg: item.title})); }
    }

    inputScreen.style.display = "flex";
    btnStop.style.display = "none";
    
    let color = (!fail && !isCancelled) ? "#9ece6a" : "#e0af68";
    showStatus(t('status_done', {ok: success, fail: fail}) + "\n" + logs.join("\n"), color);
}

function showStatus(text, color) {
    resultElement.innerText = text;
    resultElement.style.color = color || "#c0caf5";
    resultElement.scrollTop = resultElement.scrollHeight;
}