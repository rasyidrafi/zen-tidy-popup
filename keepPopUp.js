// for development purposes only
// This script prevents popups from automatically closing in a firefox user interface.
// paste this into firefox browser toolbox
// make sure setting preferences true for `devtools.chrome.enabled` and `devtools.debugger.remote-enabled` in about:config
// open browser toolbox with Ctrl+Alt+Shift+I
// or go to Menu → More Tools → Developer Tools → Browser Toolbox


// Keep all popups open
document.querySelectorAll('menupopup, panel').forEach(popup => {
  popup.setAttribute('noautohide', 'true');
});

// Or target specific popup types
document.querySelectorAll('panel[type="arrow"]').forEach(panel => {
  panel.setAttribute('noautohide', 'true');
});

document.getElementById('placesContext').addEventListener('popuphiding', function(event) {
  // Check if the hiding is due to window focus change
  if (event.detail !== 1) { // 1 = user initiated close
    event.preventDefault();
    return false;
  }
});

document.getElementById('contentAreaContextMenu').addEventListener('popuphiding', function(event) {
  // Check if the hiding is due to window focus change
  if (event.detail !== 1) { // 1 = user initiated close
    event.preventDefault();
    return false;
  }
});