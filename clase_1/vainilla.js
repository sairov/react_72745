function Title(text) {
  const title = document.createElement('h1');

  title.textContent = text;
  const root = document.getElementById('root');
  root.appendChild(title);
}