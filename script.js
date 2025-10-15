function showTab(tabId) {
  const tabs = document.querySelectorAll('.tab-content');
  tabs.forEach(tab => tab.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
}

let textoIndex = 0;
const textos = document.querySelectorAll('.texto-slide');

function mostrarTexto(index) {
  textos.forEach(t => t.classList.remove('active'));
  textos[index].classList.add('active');
}

function avanzarTexto() {
  textoIndex = (textoIndex + 1) % textos.length;
  mostrarTexto(textoIndex);
}

setInterval(avanzarTexto, 4000); // cambia cada 4 segundos

function toggleMenu() {
  const nav = document.getElementById('navLinks');
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
}


function showTab(tabId) {
  const tabs = document.querySelectorAll('.tab-content');
  tabs.forEach(tab => tab.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
}

let order = [];
function addToOrder(name, price) {
  order.push({ name, price });
  updateOrder();
}

function updateOrder() {
  const list = document.getElementById('order-list');
  const totalDisplay = document.getElementById('total');
  list.innerHTML = '';
  let total = 0;

  order.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $. ${item.price}`;
    list.appendChild(li);
    total += item.price;
  });

  totalDisplay.textContent = `Total: $. ${total}`;
}

function confirmOrder() {
  if (order.length === 0) {
    alert('Tu pedido está vacío.');
    return;
  }

  let summary = order.map(item => `${item.name} - $. ${item.price}`).join('\n');
  alert(`Pedido confirmado:\n\n${summary}\n\nTotal: $. ${order.reduce((sum, item) => sum + item.price, 0)}`);
  order = [];
  updateOrder();
}


function enviarReserva(event) {
  event.preventDefault();
  document.getElementById('reservaMensaje').textContent =
    '¡Reserva enviada! Te contactaremos pronto.';
}