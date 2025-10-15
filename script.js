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

let order = [];

function addToOrder(name, price) {
  const existingItem = order.find(item => item.name === name);
  if (existingItem) {
    existingItem.quantity += 1;
    existingItem.total = existingItem.quantity * price;
  } else {
    order.push({ name, price, quantity: 1, total: price });
  }
  updateOrder();
}

function updateOrder() {
  const list = document.getElementById('order-list');
  const totalDisplay = document.getElementById('total');
  list.innerHTML = '';
  let total = 0;

  order.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${item.quantity} x ${item.name} - $. ${item.total}</span>
      <div class="controls">
        <button onclick="changeQuantity(${index}, 1)">+</button>
        <button onclick="changeQuantity(${index}, -1)">−</button>
        <button onclick="removeItem(${index})">🗑️</button>
      </div>
    `;
    list.appendChild(li);
    total += item.total;
  });

  totalDisplay.textContent = `Total: $. ${total}`;
}

function changeQuantity(index, delta) {
  order[index].quantity += delta;
  if (order[index].quantity <= 0) {
    order.splice(index, 1);
  } else {
    order[index].total = order[index].quantity * order[index].price;
  }
  updateOrder();
}

function removeItem(index) {
  order.splice(index, 1);
  updateOrder();
}

function confirmOrder() {
  if (order.length === 0) {
    alert('Tu pedido está vacío.');
    return;
  }

  let summary = order.map(item => `${item.quantity} x ${item.name} - $. ${item.total}`).join('\n');
  let total = order.reduce((sum, item) => sum + item.total, 0);

  alert(`Pedido confirmado:\n\n${summary}\n\nTotal: $. ${total}`);
  order = [];
  updateOrder();
}


function enviarReserva(event) {
  event.preventDefault();
  document.getElementById('reservaMensaje').textContent =
    '¡Reserva enviada! Te contactaremos pronto.';
}