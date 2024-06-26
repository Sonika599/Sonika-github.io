document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menu-btn");
    const closeMenuBtn = document.getElementById("close-menu-btn");
    const menuLinks = document.getElementById("menu-links");

    menuBtn.addEventListener("click", () => {
        menuLinks.classList.add("show");
    });

    closeMenuBtn.addEventListener("click", () => {
        menuLinks.classList.remove("show");
    });

    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    addToCartButtons.forEach(button => {
        button.addEventListener("click", () => {
            alert("Item added to cart!");
        });
    });

    function updateCartDisplay() {
        cartItems.innerHTML = "";
        let total = 0;
        cart.forEach((item, index) => {
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${item.name} - $${item.price.toFixed(2)}</span>
                <button class="remove-item" onclick="removeFromCart(${index})">-</button>
                <span>${item.quantity}</span>
                <button class="add-item" onclick="addToCart('${item.name}', ${item.price})">+</button>
            `;
            cartItems.appendChild(li);
            total += item.price * item.quantity;
        });
        cartTotal.textContent = total.toFixed(2);
        cartCount.textContent = cart.reduce((acc, item) => acc + item.quantity, 0);
    }
    
    function addToCart(name, price) {
        let item = cart.find(item => item.name === name);
        if (item) {
            item.quantity++;
        } else {
            cart.push({ name, price, quantity: 1 });
        }
        updateCartDisplay();
    }
    
    window.removeFromCart = function (index) {
        let item = cart[index];
        if (item.quantity > 1) {
            item.quantity--;
        } else {
            cart.splice(index, 1);
        }
        updateCartDisplay();
    };
    
});
