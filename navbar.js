document.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(localStorage.getItem('user')) || {};
    const authLink = document.getElementById('auth-link');
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartTotal = document.getElementById('cart-total');
    const toggleBtn = document.getElementById('mode-toggle');

    if (cartTotal) {
        cartTotal.textContent = cartItems.length;
    }

    if (authLink) {
        if (user.email) {
            authLink.innerHTML = '<a href="#" id="logout">Logout</a>';
            document.getElementById('logout').addEventListener('click', (e) => {
                e.preventDefault();
                localStorage.removeItem('user');
            
                const currentTheme = localStorage.getItem('theme') || 'dark';
                localStorage.setItem('theme', currentTheme); 
                window.location.href = 'login.html';
            });
        } else {
            authLink.innerHTML = '<a href="login.html">Login</a>';
        }
    }

    const isHomePage = window.location.pathname === '/index.html' || window.location.pathname === 'index.html' || window.location.pathname === '/' || window.location.pathname.includes('index');
    console.log('Current Path:', window.location.pathname, 'Is Home Page:', isHomePage); 

    if (toggleBtn && isHomePage) {
        const currentMode = localStorage.getItem('theme') || 'dark';
        document.body.classList.toggle('light-mode', currentMode === 'light');
        toggleBtn.textContent = currentMode === 'light' ? '🌙' : '☀️';
        toggleBtn.style.display = 'block'; 
        toggleBtn.style.opacity = '1'; 
        toggleBtn.style.pointerEvents = 'auto'; 

        const toggleClickHandler = () => {
            document.body.classList.toggle('light-mode');
            const newMode = document.body.classList.contains('light-mode') ? 'light' : 'dark';
            localStorage.setItem('theme', newMode);
            toggleBtn.textContent = newMode === 'light' ? '🌙' : '☀️';
            document.dispatchEvent(new Event('themeChange'));
        };

        toggleBtn.addEventListener('click', toggleClickHandler);

        if (currentMode === 'light') {
            toggleBtn.textContent = '🌙';
        } else {
            toggleBtn.textContent = '☀️';
        }
    } else if (toggleBtn) {
        setTimeout(() => {
            console.log('Removing toggle button from non-home page');
            toggleBtn.remove();
        }, 2000); 
    }

    const currentMode = localStorage.getItem('theme') || 'dark';
    document.body.classList.toggle('light-mode', currentMode === 'light');

    document.addEventListener('themeChange', () => {
        const newMode = localStorage.getItem('theme') || 'dark';
        document.body.classList.toggle('light-mode', newMode === 'light');
        console.log('Mode Updated:', newMode, 'Body Class:', document.body.className);
    });
});