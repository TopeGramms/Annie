// Array of products for the gallery
const products = [
    { name: 'Braided Wig', price: 50, image: 'Wig 1.jpg' },
    { name: 'Curly Extensions', price: 30, image: 'Wig 2.jfif' },
    { name: 'Straight Hair Bundle', price: 70, image: 'Wig 3.jfif' }
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
  