const getValue = new Promise((resolve, reject) => {
  const value = true;
  setTimeout(() => {
    if (value) {
      resolve([
        { id: '001', name: 'Producto 1', description: 'Descripción del Producto 1', stock: 100 },
        { id: '002', name: 'Producto 2', description: 'Descripción del Producto 2', stock: 50 },
        { id: '003', name: 'Producto 3', description: 'Descripción del Producto 3', stock: 200 }
      ]);
    } else {
      reject('No pudimos conseguir el valor solicitado');
    }
  }, 3000)
});

// console.log("Hola 1");


// const result = getValue
// .then(result => console.log(result))
// .catch(err => console.log(err))
// .finally(() => console.log("No importa el resultado yo me ejecuto igual"));

// console.log(result);


// console.log("Hola 3");

const getData = async () => {
  try {
    const result = await getValue;
    const data = result.map(product => product.stock += 50);
    console.log(data);
  } catch (e) {
    console.log(e);
  } finally {
    console.log("No importa el resultado yo me ejecuto igual")
  }
}

getData();
