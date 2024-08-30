// function Title(text) {
//   const title = document.createElement('h1');

//   title.textContent = text;
//   const root = document.getElementById('root');
//   root.appendChild(title);
// }


fetch('https://api.mercadolibre.com/sites/MLA/search?category=Celulares')
.then(res => res.json())
.then(data => console.log(data));