// State
const state = {
  code: "",
  theme: "breeze",
  language: "javascript",
  showBackground: true,
  darkMode: true,
  showLineNumbers: true,
  padding: "32",
  fileName: "index.js",
};

// DOM Elements
let codeEditor,
  highlightedCode,
  lineNumbers,
  codeFrame,
  themeSelect,
  languageSelect,
  backgroundToggle,
  darkModeToggle,
  lineNumbersToggle,
  paddingSelect,
  fileNameInput,
  fileNameDisplay,
  exportBtn,
  copyBtn,
  notification,
  navTrigger,
  navMenu;

// Initialize
function init() {
  codeEditor = document.getElementById("codeEditor");
  highlightedCode = document.getElementById("highlightedCode");
  lineNumbers = document.getElementById("lineNumbers");
  codeFrame = document.getElementById("codeFrame");
  themeSelect = document.getElementById("themeSelect");
  languageSelect = document.getElementById("languageSelect");
  backgroundToggle = document.getElementById("backgroundToggle");
  darkModeToggle = document.getElementById("darkModeToggle");
  lineNumbersToggle = document.getElementById("lineNumbersToggle");
  paddingSelect = document.getElementById("paddingSelect");
  fileNameInput = document.getElementById("fileNameInput");
  fileNameDisplay = document.getElementById("fileName");
  exportBtn = document.getElementById("exportBtn");
  copyBtn = document.getElementById("copyBtn");
  notification = document.getElementById("notification");
  navTrigger = document.getElementById("navTrigger");
  navMenu = document.getElementById("navMenu");

  state.code = codeEditor.value;
  updateHighlight();
  updateLineNumbers();

  // Event Listeners
  codeEditor.addEventListener("input", handleCodeInput);
  codeEditor.addEventListener("scroll", syncScroll);
  themeSelect.addEventListener("change", handleThemeChange);
  languageSelect.addEventListener("change", handleLanguageChange);
  backgroundToggle.addEventListener("change", handleBackgroundToggle);
  darkModeToggle.addEventListener("change", handleDarkModeToggle);
  lineNumbersToggle.addEventListener("change", handleLineNumbersToggle);
  paddingSelect.addEventListener("change", handlePaddingChange);
  fileNameInput.addEventListener("input", handleFileNameChange);
  exportBtn.addEventListener("click", handleExport);
  copyBtn.addEventListener("click", handleCopy);
  codeEditor.addEventListener("keydown", handleTabKey);
  navTrigger.addEventListener("click", toggleNav);
  document.addEventListener("click", closeNavOnClickOutside);
}

function handleCodeInput(e) {
  state.code = e.target.value;
  updateHighlight();
  updateLineNumbers();
}
function syncScroll() {
  highlightedCode.scrollTop = codeEditor.scrollTop;
  highlightedCode.scrollLeft = codeEditor.scrollLeft;
}

function updateHighlight() {
  const codeBlock = highlightedCode.querySelector("code");
  codeBlock.textContent = state.code;
  codeBlock.className = `language-${state.language}`;
  if (window.hljs) {
    hljs.highlightElement(codeBlock);
  }
}

function updateLineNumbers() {
  const lines = state.code.split("\n");
  lineNumbers.textContent = lines.map((_, i) => i + 1).join("\n");
}

function handleThemeChange(e) {
  state.theme = e.target.value;
  const themes = {
    candy: "linear-gradient(140deg,#ff6b9d 0%,#c06c84 100%)",
    breeze: "linear-gradient(140deg,#667eea 0%,#764ba2 100%)",
    midnight: "linear-gradient(140deg,#2c3e50 0%,#3498db 100%)",
    sunset: "linear-gradient(140deg,#ff7e5f 0%,#feb47b 100%)",
    raindrop: "linear-gradient(140deg,#36d1dc 0%,#5b86e5 100%)",
  };
  document.documentElement.style.setProperty("--theme-bg", themes[state.theme]);
  Object.keys(themes).forEach((t) => codeFrame.classList.remove(`theme-${t}`));
  codeFrame.classList.add(`theme-${state.theme}`);
}

function handleLanguageChange(e) {
  state.language = e.target.value;
  updateHighlight();
  const ext = {
    javascript: "js",
    typescript: "ts",
    python: "py",
    html: "html",
    css: "css",
    java: "java",
    csharp: "cs",
    cpp: "cpp",
    go: "go",
    rust: "rs",
    php: "php",
    ruby: "rb",
    swift: "swift",
    kotlin: "kt",
    json: "json",
    xml: "xml",
    sql: "sql",
    bash: "sh",
  };
  const parts = fileNameInput.value.split(".");
  if (parts.length > 1) {
    parts[parts.length - 1] = ext[state.language] || "txt";
    fileNameInput.value = parts.join(".");
    fileNameDisplay.textContent = fileNameInput.value;
  }
}

function handleBackgroundToggle(e) {
  state.showBackground = e.target.checked;
  codeFrame.classList.toggle("no-background", !state.showBackground);
  codeFrame.style.padding = state.showBackground ? `${state.padding}px` : "0";
}

function handleDarkModeToggle(e) {
  state.darkMode = e.target.checked;
  const window = codeFrame.querySelector(".window");
  window.classList.toggle("light-mode", !state.darkMode);
  const link = document.querySelector('link[href*="highlight"]');
  if (link) {
    link.href = state.darkMode
      ? "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css"
      : "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github.min.css";
  }
  setTimeout(() => updateHighlight(), 50);
}

function handleLineNumbersToggle(e) {
  state.showLineNumbers = e.target.checked;
  lineNumbers.classList.toggle("hidden", !state.showLineNumbers);
}
function handlePaddingChange(e) {
  state.padding = e.target.value;
  codeFrame.style.padding = state.showBackground ? `${state.padding}px` : "0";
}
function handleFileNameChange(e) {
  state.fileName = e.target.value;
  fileNameDisplay.textContent = state.fileName;
}

function handleTabKey(e) {
  if (e.key === "Tab") {
    e.preventDefault();
    const start = this.selectionStart;
    const end = this.selectionEnd;
    const value = this.value;
    this.value = value.substring(0, start) + "  " + value.substring(end);
    this.selectionStart = this.selectionEnd = start + 2;
    this.dispatchEvent(new Event("input"));
  }
}

function showNotification(msg) {
  notification.textContent = msg;
  notification.classList.add("show");
  setTimeout(() => notification.classList.remove("show"), 3000);
}

async function handleExport() {
  try {
    const tp = codeFrame.querySelector(".transparent-pattern");
    if (tp) tp.style.display = "none";
    const canvas = await html2canvas(codeFrame, {
      backgroundColor: null,
      scale: 2,
      logging: false,
      useCORS: true,
      allowTaint: true,
      ignoreElements: (el) => el.hasAttribute("data-ignore-in-export"),
    });
    if (tp) tp.style.display = "";
    canvas.toBlob((blob) => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${state.fileName}-${Date.now()}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showNotification("✓ Image exported successfully!");
    });
  } catch (error) {
    console.error("Export failed:", error);
    showNotification("✗ Export failed. Please try again.");
  }
}

function handleCopy() {
  navigator.clipboard
    .writeText(state.code)
    .then(() => showNotification("✓ Code copied to clipboard!"))
    .catch((err) => {
      console.error("Copy failed:", err);
      showNotification("✗ Failed to copy code.");
    });
}

function toggleNav(e) {
  e.stopPropagation();
  navTrigger.classList.toggle("active");
  navMenu.classList.toggle("show");
}

function closeNavOnClickOutside(e) {
  if (!navTrigger.contains(e.target) && !navMenu.contains(e.target)) {
    navTrigger.classList.remove("active");
    navMenu.classList.remove("show");
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
