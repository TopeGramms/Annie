// Array of products for the gallery
const products = [
    { name: 'Braided Wig', price: 50, image: 'Wig 1.jpg' },
    { name: 'Curly Extensions', price: 30, image: 'Wig 2.jfif' },
    { name: 'Straight Hair Bundle', price: 70, image: 'Wig 3.jfif' }
  ];
  
  // Display products in the gallery
  const productGallery = document.querySelector('.product-gallery');
  const cart = [];
  
  products.forEach((product, index) => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    productDiv.innerHTML = `
      <img src="${product.image}" alt="${product.name}" style="width:100%">
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
      <button onclick="addToCart(${index})">Add to Cart</button>
    `;
    productGallery.appendChild(productDiv);
  });
  
  // Add product to cart
  function addToCart(index) {
    const product = products[index];
    cart.push(product);
    alert(`${product.name} has been added to your cart.`);
  }
  
  // Checkout functionality - directs to WhatsApp or Instagram
  function checkout() {
    if (cart.length === 0) {
      alert('Your cart is empty.');
      return;
    }
  
    let message = 'Hello, I would like to order the following products:\n';
    let total = 0;
  
    cart.forEach((product, index) => {
      message += `${index + 1}. ${product.name} - $${product.price}\n`;
      total += product.price;
    });
  
    message += `\nTotal: $${total}`;
  
    // Redirect to WhatsApp with message
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }
  