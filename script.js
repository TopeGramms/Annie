// Array of products for the gallery
const products = [
    { name: 'Braided Wig', price: 50, image: 'wig1.jpg' },
    { name: 'Curly Extensions', price: 30, image: 'extensions1.jpg' },
    { name: 'Straight Hair Bundle', price: 70, image: 'bundle1.jpg' }
  ];
  
  // Display products in the gallery
  const productGallery = document.querySelector('.product-gallery');
  
  products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    productDiv.innerHTML = `
      <img src="${product.image}" alt="${product.name}" style="width:100%">
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
      <button>Add to Cart</button>
    `;
    productGallery.appendChild(productDiv);
  });
  