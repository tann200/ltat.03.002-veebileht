// js/notifyparent.js
function notifyParentOfPage(pageName) {
    if (window.parent && typeof window.parent.hideNavForIframePage === 'function') {
        window.parent.hideNavForIframePage(pageName);
    }
}

// Example usage:
// notifyParentOfPage('common-problems.html');