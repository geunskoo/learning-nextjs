import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://localhost:9999',
});

function fetchProducts() {
	return instance.get('/products');
}

// function fetchProducts(productId) {
// 	return instance.get('/products', {
// 		params: {
// 			id: productId,
// 		},
// 	});
// }

function fetchProductById(productId) {
	return instance.get(`/products/${productId}`);
}

function createCartItem({ id, name, imageUrl, price }) {
	return instance.post(`/carts`, {
		id: id,
		name,
		imageUrl,
		price,
	});
}
function fetchCarts() {
	return instance.get(`/carts`);
}

function removeCartItem(productId) {
	return instance.delete(`/carts/${productId}`);
}

export {
	fetchProducts,
	fetchProductById,
	createCartItem,
	fetchCarts,
	removeCartItem,
};

// create - 생성
// delete - 삭제
// update - 수정
// get - 조회

// instance.get()
// instance.delete()
