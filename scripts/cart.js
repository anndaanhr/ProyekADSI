document.addEventListener('DOMContentLoaded', () => {
    const cartItemsDiv = document.getElementById('cart-items');
    const totalPriceSpan = document.getElementById('total-price');
    const cartTotal = document.getElementById('cart-total');
    const checkoutBtn = document.getElementById('checkout-btn');
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const user = JSON.parse(localStorage.getItem('user')) || {};

    function refreshCart() {
        cartItemsDiv.innerHTML = '';
        let total = 0;

        cartItems.forEach((item, index) => {
            const finalPrice = item.discount > 0 ? (item.price * (1 - item.discount / 100)).toFixed(2) : item.price;
            total += parseFloat(finalPrice);

            const div = document.createElement('div');
            div.className = 'cart-item';
            div.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <h3>${item.title}</h3>
                <p>$${finalPrice}</p>
                <button class="btn" data-index="${index}">Remove</button>
            `;
            cartItemsDiv.appendChild(div);
        });

        totalPriceSpan.textContent = `$${total.toFixed(2)}`;
        cartTotal.textContent = cartItems.length;

        if (cartItems.length === 0) {
            checkoutBtn.textContent = 'Cart is Empty';
            checkoutBtn.disabled = true;
        } else if (!user.email) {
            checkoutBtn.textContent = 'Login to Checkout';
            checkoutBtn.disabled = false; 
        } else {
            checkoutBtn.textContent = 'Proceed to Checkout';
            checkoutBtn.disabled = false;
        }
    }

    cartItemsDiv.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const index = parseInt(e.target.dataset.index);
            cartItems.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cartItems));
            refreshCart();
        }
    });

    checkoutBtn.addEventListener('click', () => {
        if (cartItems.length === 0) {
        } else if (!user.email) {
            window.location.href = 'login.html';
        } else {
            window.location.href = 'checkout.html';
        }
    });

    refreshCart();
});