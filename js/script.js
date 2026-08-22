const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

if (menu && nav) {
  menu.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    nav.style.display = isOpen ? 'flex' : '';
  });
}

const orderBtn = document.getElementById('orderBtn');
if (orderBtn) {
  orderBtn.addEventListener('click', () => {
    alert('Ini adalah simulasi prototype. Fitur transaksi belum diaktifkan.');
  });
}
