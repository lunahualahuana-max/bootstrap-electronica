let cartCount = 0;
const countBadge = document.querySelector('#cart-count');
const cartToast = new bootstrap.Toast(document.querySelector('#cartToast'), { delay: 2400 });

document.querySelectorAll('.add-cart').forEach((button) => {
  button.addEventListener('click', () => {
    cartCount += 1;
    countBadge.textContent = cartCount;
    document.querySelector('#toast-message').textContent = `${button.dataset.product} se agregó a tu bolsa.`;
    cartToast.show();
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();
