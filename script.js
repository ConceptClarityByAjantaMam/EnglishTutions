(() => {
  const root = document.documentElement;
  const button = document.querySelector('[data-theme-toggle]');
  const media = window.matchMedia('(prefers-color-scheme: dark)');

  const applyTheme = (theme) => {
    root.setAttribute('data-theme', theme);
    if (button) {
      button.innerHTML = `<span class="theme-icon">${theme === 'dark' ? '☀' : '◐'}</span>`;
      button.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    }
  };

  let currentTheme = media.matches ? 'dark' : 'light';
  applyTheme(currentTheme);

  if (button) {
    button.addEventListener('click', () => {
      currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(currentTheme);
    });
  }
})();
