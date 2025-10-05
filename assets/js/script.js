const precioBase = 500000;
const cantidadEl = document.querySelector("#cantidad");
const totalEl = document.querySelector("#total");
const btnSumar = document.querySelector("#sumar");
const btnRestar = document.querySelector("#restar");

let cantidad = 0;

function actualizarTotal() {
  totalEl.innerHTML = precioBase * cantidad;
  cantidadEl.innerHTML = cantidad;
}

btnSumar.onclick = () => {
  cantidad++;
  actualizarTotal();
};

btnRestar.onclick = () => {
  if (cantidad > 1) {
    cantidad--;
    actualizarTotal();
  }
};
