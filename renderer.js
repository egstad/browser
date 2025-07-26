const webview = document.getElementById('webview');
const urlBar = document.getElementById('url-bar');
const spotlightOverlay = document.getElementById('spotlight-overlay');

let isSpotlightVisible = false;

window.electronAPI.onToggleSpotlight(() => {
  toggleSpotlight();
});

window.electronAPI.onNavigateBack(() => {
  if (webview.canGoBack()) {
    webview.goBack();
  }
});

window.electronAPI.onNavigateForward(() => {
  if (webview.canGoForward()) {
    webview.goForward();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && isSpotlightVisible) {
    hideSpotlight();
  }
});

spotlightOverlay.addEventListener('click', (e) => {
  if (e.target === spotlightOverlay) {
    hideSpotlight();
  }
});

urlBar.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    let url = urlBar.value.trim();
    
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      if (url.includes('.') && !url.includes(' ')) {
        url = 'https://' + url;
      } else {
        url = 'https://www.google.com/search?q=' + encodeURIComponent(url);
      }
    }
    
    webview.src = url;
    hideSpotlight();
  }
});

webview.addEventListener('did-navigate', (e) => {
  urlBar.value = e.url;
});

webview.addEventListener('did-navigate-in-page', (e) => {
  urlBar.value = e.url;
});

function toggleSpotlight() {
  if (isSpotlightVisible) {
    hideSpotlight();
  } else {
    showSpotlight();
  }
}

function showSpotlight() {
  isSpotlightVisible = true;
  spotlightOverlay.classList.add('visible');
  urlBar.focus();
  urlBar.select();
}

function hideSpotlight() {
  isSpotlightVisible = false;
  spotlightOverlay.classList.remove('visible');
  urlBar.blur();
}