export function ThemeScript() {
  const code = `
    (function () {
      try {
        var stored = localStorage.getItem('c3s-theme');
        var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        var theme = stored || (systemDark ? 'dark' : 'light');
        if (theme === 'dark') document.documentElement.classList.add('dark');
        else document.documentElement.classList.remove('dark');
      } catch (e) {}
    })();
  `;
  return <script dangerouslySetInnerHTML={{__html: code}} />;
}
