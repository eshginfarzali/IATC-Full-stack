// const product = {
// 	id: 1,
// 	title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
// 	price: 109.95,
// 	description:
// 		'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
// 	category: "men's clothing",
// 	image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
// 	rating: {
// 		rate: 3.9,
// 		count: 120,
// 	},
// };

const list = root.querySelector('ul');

price.textContent = 0;

// if you add 3 times from one product, 3-rd 50% discount will be applied to 3-rd product

let productCounts = {};
console.log(productCounts);

const clickHandler = (event) => {
  const productId = event.currentTarget.dataset.id;
  const productPrice = event.currentTarget.dataset.price;
  
  // Increment the product count or set it to 1 if it doesn't exist
  productCounts[productId] = (productCounts[productId] || 0) + 1;
  
  // Apply discount if the product has been added three times
  let discountedPrice = productPrice;
  if ( productCounts[productId]%3===0) {
    discountedPrice *= 0.5; // Apply 50% discount
  }
  
  price.textContent = (parseFloat(price.textContent) + Number(discountedPrice)).toFixed(2) + ' $';
};


fetch('https://fakestoreapi.com/products')
	.then((res) => res.json())
	.then((json) => {
		// console.log(json);

		json.forEach((item) => {
			const productCard = document.createElement('li');

			const img = document.createElement('img');
			const title = document.createElement('h3');
			const price = document.createElement('p');

			img.setAttribute('src', item.image);
			title.textContent = item.title;
			price.textContent = item.price;

			productCard.append(img, title, price);
			productCard.dataset.id = item.id;
			productCard.dataset.price = item.price;

			productCard.addEventListener('click', clickHandler);

			list.append(productCard);
		});
	});
