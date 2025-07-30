const pizza = [
    {id: 1, names: 'Піца Мега', price: 216},
    {id: 2, names: 'Піца Папероні', price: 205},
    {id: 3, names: 'Піца Міланська', price: 166},
    {id: 4, names: 'Піца Домашня', price: 198},
    {id: 5, names: 'Піца Гавайська', price: 181},
    {id: 6, names: 'Піца Козацька', price: 163},
    {id: 7, names: 'Піца Сімейна', price: 290}
];
const productList = document.querySelector('.product_list');
const cartItems = document.getElementById('cart_items');
const totalPrice = document.getElementById('total_price');
const checkoutButton = document.getElementById('checkout_button');

let cart = [];
function renderProducts() {
    pizza.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product_item');
        productItem.innerHTML = `
            <h3 class="welcome_title">${product.names}</h3>
            <p class="prices">Ціна: ${product.price} грн.</p>
            <button class="prices_btns" onclick="addToCart(${product.id})">Добавити в корзину</button>
        `;
        productList.appendChild(productItem);
    });
}

function addToCart(productId) {
    const product = pizza.find(p=> p.id === productId);
    cart.push(product);
    renderCart();
}

function renderCart() {
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.textContent = `
        ${item.names} - ${item.price} грн.`;
        cartItems.appendChild(cartItem);
        total += item.price;
    });
    totalPrice.textContent = total;
}

function checkout() {
    if (cart.length === 0) {
        alert('Ваша корзина пуста');
        return;
    }
    alert(`Ваше замовлення оформлене, до оплати: ${totalPrice.textContent} грн.`);
    cart = [];
    renderCart();
}

renderProducts();

checkoutButton.addEventListener('click', checkout);
console.log(typeof('pizza'))




