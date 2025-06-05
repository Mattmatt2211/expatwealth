fetch('/header.html')
  .then(res => res.text())
  .then(html => {
    const container = document.getElementById('global-header');
    if (container) {
      container.innerHTML = html;
    }
  });
