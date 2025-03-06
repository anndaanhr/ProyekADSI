document.addEventListener('DOMContentLoaded', () => {
    const gameData = [
        { id: 1, title: 'Elden Ring', price: 29.99, discount: 30, image: 'assets/game1.jpg', category: 'action', rating: 5 },
        { id: 2, title: 'Tides of Annihilation', price: 49.99, discount: 0, image: 'assets/game2.jpg', category: 'action', rating: 4 },
        { id: 3, title: 'World War Z: Aftermath', price: 10.99, discount: 35, image: 'assets/game3.jpg', category: 'adventure', rating: 3 },
        { id: 4, title: 'Assassins Creed Mirage', price: 15.00, discount: 20, image: 'assets/game4.jpg', category: 'adventure', rating: 4 },
        { id: 5, title: 'Assassins Creed Shadows', price: 40.00, discount: 0, image: 'assets/game5.jpg', category: 'adventure', rating: 4 },
        { id: 6, title: 'Assassins Creed Valhalla', price: 44.99, discount: 40, image: 'assets/game6.jpg', category: 'adventure', rating: 3 },
        { id: 7, title: 'Ghost Of Yotei', price: 59.99, discount: 0, image: 'assets/game7.jpg', category: 'adventure', rating: 5 },
        { id: 8, title: 'Baldurs Gate 3', price: 39.99, discount: 15, image: 'assets/game8.jpg', category: 'rpg', rating: 5 },
        { id: 9, title: 'Black Myth: Wukong', price: 59.99, discount: 15, image: 'assets/game9.jpg', category: 'rpg', rating: 4 },
        { id: 10, title: 'Call Of Duty: Black Ops 6', price: 49.99, discount: 15, image: 'assets/game10.jpg', category: 'action', rating: 4 },
        { id: 11, title: 'Call Of Duty: Modern Warfare 2', price: 30.99, discount: 30, image: 'assets/game11.jpg', category: 'action', rating: 4 },
        { id: 12, title: 'Cities Skylines 2', price: 29.99, discount: 40, image: 'assets/game12.jpg', category: 'simulation', rating: 3 },
        { id: 13, title: 'Cyberpunk 2077', price: 29.00, discount: 25, image: 'assets/game13.jpg', category: 'rpg', rating: 4 },
        { id: 14, title: 'Days Gone', price: 22.99, discount: 60, image: 'assets/game14.jpg', category: 'action', rating: 2 },
        { id: 15, title: 'Diablo IV: Vessel Of Hatred', price: 29.99, discount: 15, image: 'assets/game15.jpg', category: 'adventure', rating: 4 },
        { id: 16, title: 'FC 24', price: 25.99, discount: 80, image: 'assets/game16.jpg', category: 'sports', rating: 3 },
        { id: 17, title: 'Far Cry 6', price: 37.99, discount: 30, image: 'assets/game17.jpg', category: 'adventure', rating: 4 },
        { id: 18, title: 'Final Fantasy XVI', price: 64.99, discount: 25, image: 'assets/game18.jpg', category: 'rpg', rating: 4 },
        { id: 19, title: 'Ghost Of Tsushima', price: 29.99, discount: 15, image: 'assets/game19.jpg', category: 'action', rating: 5 },
        { id: 20, title: 'GhostRunner', price: 12.99, discount: 90, image: 'assets/game20.jpg', category: 'action', rating: 2 },
        { id: 21, title: 'God Of War: Ragnarok', price: 31.99, discount: 15, image: 'assets/game21.jpg', category: 'adventure', rating: 5 },
        { id: 22, title: 'Grand Theft Auto V', price: 28.99, discount: 10, image: 'assets/game22.jpg', category: 'rpg', rating: 4 },
        { id: 23, title: 'Grand Theft Auto VI', price: 49.99, discount: 10, image: 'assets/game23.jpg', category: 'rpg', rating: 5 },
        { id: 24, title: 'Hogwarts Legacy', price: 29.99, discount: 40, image: 'assets/game24.jpg', category: 'adventure', rating: 5 },
        { id: 25, title: 'Kong: Survivor Instinct', price: 20.99, discount: 10, image: 'assets/game25.jpg', category: 'action', rating: 1 },
        { id: 26, title: 'Marvels Spider-man 2', price: 29.99, discount: 35, image: 'assets/game26.jpg', category: 'adventure', rating: 5 },
        { id: 27, title: 'Flight Simulator', price: 59.99, discount: 25, image: 'assets/game27.jpg', category: 'simulation', rating: 4 },
        { id: 28, title: 'Need For Speed Heat', price: 9.99, discount: 99, image: 'assets/game28.jpg', category: 'sports', rating: 3 },
        { id: 29, title: 'No Mans Sky', price: 21.99, discount: 40, image: 'assets/game29.jpg', category: 'adventure', rating: 3 },
        { id: 30, title: 'Red Dead Redemption 2', price: 29.99, discount: 80, image: 'assets/game30.jpg', category: 'adventure', rating: 5 },
        { id: 31, title: 'Wuthering Waves', price: 1.00, discount: 90, image: 'assets/game31.jpg', category: 'rpg', rating: 1 },
        { id: 32, title: 'Sid Meiers Civilization VII', price: 39.99, discount: 15, image: 'assets/game32.jpg', category: 'strategy', rating: 4 },
        { id: 33, title: 'Sifu', price: 10.99, discount: 55, image: 'assets/game33.jpg', category: 'action', rating: 3 },
        { id: 34, title: 'Silent Hill 2', price: 30.99, discount: 30, image: 'assets/game34.jpg', category: 'adventure', rating: 4 },
        { id: 35, title: 'Street Fighter 6', price: 40.00, discount: 35, image: 'assets/game35.jpg', category: 'action', rating: 5 },
        { id: 36, title: 'Suicide Squad: Kill The Justice League', price: 9.99, discount: 5, image: 'assets/game36.jpg', category: 'action', rating: 2 },
        { id: 37, title: 'Tekken 8', price: 29.99, discount: 0, image: 'assets/game37.jpg', category: 'action', rating: 4 },
        { id: 38, title: 'The Elder Scrolls V: Skyrim', price: 19.99, discount: 45, image: 'assets/game38.jpg', category: 'adventure', rating: 4 },
        { id: 39, title: 'Watch Dogs: Legion', price: 29.99, discount: 40, image: 'assets/game39.jpg', category: 'adventure', rating: 3 },
        { id: 40, title: 'WWE 2K25', price: 20.00, discount: 60, image: 'assets/game40.jpg', category: 'action', rating: 4 }
    ];

    const gamesList = document.getElementById('games-list');
    const cartTotal = document.getElementById('cart-total');
    const searchInput = document.getElementById('search-input');
    const categoryFilter = document.getElementById('category-filter');
    const sortFilter = document.getElementById('sort-filter');
    const seeAllBtn = document.getElementById('see-all-btn');
    const fullGames = document.getElementById('full-games');
    const carousel = document.getElementById('carousel');
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    function refreshCart() {
        if (cartTotal) cartTotal.textContent = cartItems.length;
    }

    function sortGames(games, sortType) {
        switch (sortType) {
            case 'name-asc':
                return games.sort((a, b) => a.title.localeCompare(b.title));
            case 'name-desc':
                return games.sort((a, b) => b.title.localeCompare(a.title));
            case 'rating-desc':
                return games.sort((a, b) => b.rating - a.rating);
            case 'price-asc':
                return games.sort((a, b) => {
                    const priceA = a.discount > 0 ? a.price * (1 - a.discount / 100) : a.price;
                    const priceB = b.discount > 0 ? b.price * (1 - b.discount / 100) : b.price;
                    return priceA - priceB;
                });
            case 'price-desc':
                return games.sort((a, b) => {
                    const priceA = a.discount > 0 ? a.price * (1 - a.discount / 100) : a.price;
                    const priceB = b.discount > 0 ? b.price * (1 - b.discount / 100) : b.price;
                    return priceB - priceA;
                });
            default:
                return games;
        }
    }

    function renderGames(filter = '', category = 'all', sortType = 'name-asc', limit = 10) {
        gamesList.innerHTML = '';
        let filteredGames = gameData.filter(game => 
            game.title.toLowerCase().includes(filter.toLowerCase()) &&
            (category === 'all' || game.category === category)
        );
        filteredGames = sortGames(filteredGames, sortType).slice(0, limit);

        filteredGames.forEach(game => {
            const finalPrice = game.discount > 0 ? (game.price * (1 - game.discount / 100)).toFixed(2) : game.price;
            const discountText = game.discount > 0 ? `<span class="discount">-${game.discount}%</span>` : '';
            const ratingStars = Array(5).fill().map((_, i) => `
                <span class="${i < game.rating ? 'filled' : 'empty'}">★</span>
            `).join('');

            const card = document.createElement('div');
            card.className = 'game-card';
            card.innerHTML = `
                <img src="${game.image}" alt="${game.title}" loading="lazy" onerror="this.src='https://via.placeholder.com/300x200?text=${game.title}'">
                <h3>${game.title}</h3>
                <p>$${finalPrice}${discountText}</p>
                <div class="star-rating">${ratingStars}</div>
                <div class="button-container">
                    <button class="add-to-cart-btn" data-id="${game.id}">Add to Cart</button>
                    <a href="product-detail.html?id=${game.id}" class="btn details-btn">Details</a>
                </div>
            `;
            gamesList.appendChild(card);
        });

        document.querySelectorAll('.add-to-cart-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const id = parseInt(e.target.dataset.id);
                const game = gameData.find(g => g.id === id);
                cartItems.push(game);
                localStorage.setItem('cart', JSON.stringify(cartItems));
                refreshCart();
                e.target.textContent = 'Added!';
                e.target.disabled = true;
                setTimeout(() => {
                    e.target.textContent = 'Add to Cart';
                    e.target.disabled = false;
                }, 2000);
            });
        });

        const prevBtn = carousel.querySelector('.prev-btn');
        const nextBtn = carousel.querySelector('.next-btn');
        const container = carousel.querySelector('.games-container');
        let scrollPosition = 0;
        const cardWidth = 335;

        function updateButtons() {
            prevBtn.style.display = scrollPosition <= 0 ? 'none' : 'block';
            nextBtn.style.display = scrollPosition >= (filteredGames.length - 3) * cardWidth ? 'none' : 'block';
        }

        nextBtn.addEventListener('click', () => {
            if (scrollPosition < (filteredGames.length - 3) * cardWidth) {
                scrollPosition += cardWidth;
                container.style.transform = `translateX(-${scrollPosition}px)`;
                updateButtons();
            }
        });

        prevBtn.addEventListener('click', () => {
            if (scrollPosition > 0) {
                scrollPosition -= cardWidth;
                container.style.transform = `translateX(-${scrollPosition}px)`;
                updateButtons();
            }
        });

        updateButtons();
    }

    function renderFullGames(filter = '', category = 'all', sortType = 'name-asc') {
        fullGames.innerHTML = '';
        let filteredGames = gameData.filter(game => 
            game.title.toLowerCase().includes(filter.toLowerCase()) &&
            (category === 'all' || game.category === category)
        );
        filteredGames = sortGames(filteredGames, sortType);

        filteredGames.forEach(game => {
            const finalPrice = game.discount > 0 ? (game.price * (1 - game.discount / 100)).toFixed(2) : game.price;
            const discountText = game.discount > 0 ? `<span class="discount">-${game.discount}%</span>` : '';
            const ratingStars = Array(5).fill().map((_, i) => `
                <span class="${i < game.rating ? 'filled' : 'empty'}">★</span>
            `).join('');

            const card = document.createElement('div');
            card.className = 'game-card';
            card.innerHTML = `
                <img src="${game.image}" alt="${game.title}" loading="lazy" onerror="this.src='https://via.placeholder.com/300x200?text=${game.title}'">
                <h3>${game.title}</h3>
                <p>$${finalPrice}${discountText}</p>
                <div class="star-rating">${ratingStars}</div>
                <div class="button-container">
                    <button class="add-to-cart-btn" data-id="${game.id}">Add to Cart</button>
                    <a href="product-detail.html?id=${game.id}" class="btn details-btn">Details</a>
                </div>
            `;
            fullGames.appendChild(card);
        });

        document.querySelectorAll('.add-to-cart-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const id = parseInt(e.target.dataset.id);
                const game = gameData.find(g => g.id === id);
                cartItems.push(game);
                localStorage.setItem('cart', JSON.stringify(cartItems));
                refreshCart();
                e.target.textContent = 'Added!';
                e.target.disabled = true;
                setTimeout(() => {
                    e.target.textContent = 'Add to Cart';
                    e.target.disabled = false;
                }, 2000);
            });
        });
    }

    seeAllBtn.addEventListener('click', () => {
        carousel.style.display = 'none';
        seeAllBtn.style.display = 'none';
        fullGames.style.display = 'grid';
        renderFullGames(searchInput.value, categoryFilter.value, sortFilter.value);
    });

    searchInput.addEventListener('input', () => {
        if (fullGames.style.display === 'grid') {
            renderFullGames(searchInput.value, categoryFilter.value, sortFilter.value);
        } else {
            renderGames(searchInput.value, categoryFilter.value, sortFilter.value);
        }
    });

    categoryFilter.addEventListener('change', () => {
        if (fullGames.style.display === 'grid') {
            renderFullGames(searchInput.value, categoryFilter.value, sortFilter.value);
        } else {
            renderGames(searchInput.value, categoryFilter.value, sortFilter.value);
        }
    });

    sortFilter.addEventListener('change', () => {
        if (fullGames.style.display === 'grid') {
            renderFullGames(searchInput.value, categoryFilter.value, sortFilter.value);
        } else {
            renderGames(searchInput.value, categoryFilter.value, sortFilter.value);
        }
    });

    renderGames();
    refreshCart();
});