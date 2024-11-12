// Store details outside of DOMContentLoaded for immediate logging
const storeName = "Pet Paradise";
const storeHours = "Monday - Friday: 9am - 9pm, Saturday: 10am - 6pm, Sunday: Closed";

console.log(`Welcome to ${storeName}! We are the best Pet Store in town.`);
console.log("Here are the products we currently offer:");

document.addEventListener('DOMContentLoaded', () => {
    // Initialize the cart and select DOM elements
    const cart = [];
    const cartItems = document.querySelector('.cart-items');
    const totalDisplay = document.querySelector('.total');

    // Ensure these elements exist before using them
    if (!cartItems || !totalDisplay) {
        console.error("Cart items or total display element not found.");
        return;
    }

    // Arrays of product names and prices
    let productNames = [
        "Squeaky Toy",
        "Yummy Treats",
        "Cyber Dog",
        "Dog Wedding Outfit",
        "Scratch Toy for Cats",
        "Pet Toys Kit",
        "Comfortable Dog Beds",
        "Wall Walkway for Cat"
    ];

    let productPrices = [
        5.99,
        8.99,
        554.99,
        9.99,
        19.99,
        175.99,
        55.99,
        199.99
    ];

    console.log("Products:", JSON.stringify(productNames));
    console.log("Prices:", JSON.stringify(productPrices));

    // Adding new products using the push method
    productNames.push("Luxury Cat Bed", "Bear Hat with Ears");
    productPrices.push(89.99, 14.99);

    console.log("We've added a new product!");
    console.log("Products:", JSON.stringify(productNames));
    console.log("Updated Prices:", JSON.stringify(productPrices));

    // Remove the last product ("Bear Hat with Ears") if it's out of stock
    const removedProductName = productNames.pop();
    const removedProductPrice = productPrices.pop();

    if (removedProductName && removedProductPrice) {
        console.log(`Unfortunately, ${removedProductName} is out of stock.`);
        console.log("Products:", JSON.stringify(productNames));
        console.log("Updated Prices:", JSON.stringify(productPrices));
    }

    // Add new products using concat
    let newProducts = ["Cat Toy", "Dog Leash"];
    let newPrices = [9.99, 14.99];
    productNames = productNames.concat(newProducts);  // Adds new products
    productPrices = productPrices.concat(newPrices);  // Adds new prices

    console.log("We have new arrivals!");
    console.log("Products:", JSON.stringify(productNames));
    console.log("Updated Prices:", JSON.stringify(productPrices));

    // Selecting featured products using slice
    const featuredProducts = productNames.slice(0, 3);
    console.log("This week, our featured products are:", JSON.stringify(featuredProducts));

    // Function to add an item to the cart
    function addItemToCart(name, price) {
        const item = cart.find(product => product.name === name);
        if (item) {
            item.quantity++;
        } else {
            cart.push({ name, price, quantity: 1 });
        }
        updateCartDisplay();
    }

    // Function to update the cart display
    function updateCartDisplay() {
        cartItems.innerHTML = '';
        let total = 0;
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `${item.name} - $${item.price.toFixed(2)} x ${item.quantity} = $${itemTotal.toFixed(2)}`;
            cartItems.appendChild(cartItem);
        });
        totalDisplay.textContent = `Total: $${total.toFixed(2)}`;
    }

    // Function to attach event listeners to all "Add to Cart" buttons
    function attachAddToCartListeners() {
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', () => {
                const productName = button.parentElement.querySelector('h3').textContent;
                const productPriceText = button.parentElement.querySelector('p').textContent;
                const productPrice = parseFloat(productPriceText.replace('$', '').trim()); // Ensure proper parsing
                addItemToCart(productName, productPrice);
            });
        });
    }

    // Function to add a product card to the page
    function addProductCard(name, price, imgSrc) {
        const productGrid = document.querySelector('.product-grid');
        if (!productGrid) {
            console.error("Product grid element not found.");
            return;
        }

        // Log the image source to see if it's correct
        console.log(`Adding product: ${name} with image: ${imgSrc}`);

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${imgSrc}" alt="${name}" onerror="this.onerror=null; this.src='assets/images/placeholder.jpg';">
            <h3>${name}</h3>
            <p>$${price.toFixed(2)}</p>
            <button class="add-to-cart">Add to Cart</button>
        `;
        productGrid.appendChild(productCard);
    }

    // Add all products to the page and re-attach event listeners
    productNames.forEach((product, index) => {
        const productImagePath = "assets/images/" + product.toLowerCase().replace(" ", "-") + ".jpg";
        addProductCard(product, productPrices[index], productImagePath);
    });

    // Ensure listeners are attached after adding all products
    attachAddToCartListeners();

    // Event listener for the checkout button
    const checkoutButton = document.querySelector('.checkout-btn');
    if (checkoutButton) {
        checkoutButton.addEventListener('click', () => {
            window.location.href = 'checkout.html';
        });
    } else {
        console.error("Checkout button not found.");
    }

    // Log store details
    console.log(`Thanks for visiting ${storeName}!`);
    console.log(`Here are our store hours for reference: ${storeHours}`);
});
