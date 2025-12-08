# Improvements Task List

## Accessibility Fixes
- Add ARIA roles and landmarks to HTML (e.g., `<nav role="navigation">`, `<main>`).
- Implement focus management for gallery overlay (trap focus and return to triggering element on close).
- Ensure sufficient color contrast in CSS (4.5:1 ratio) and verify with tools.
- Add visible focus indicators and keyboard support (arrow keys) for hamburger menu.
- Remove duplicate hamburger click event listener in `navigationScript.js`.
- Set appropriate `lang` attribute in HTML for screen readers.

## Responsiveness Improvements
- Ensure mobile menu buttons meet min-touch-target size (44px) in CSS.
- Add responsive scaling for gallery overlay using relative units and media queries.
- Implement lazy loading for gallery images using Intersection Observer.
- Test layouts across devices and fix any shifts or issues.

## General
- Test in browser with Lighthouse, WAVE, and NVDA for full validation.
- Update HTML to use `data-href` attributes on nav buttons instead of inline `onclick`.
