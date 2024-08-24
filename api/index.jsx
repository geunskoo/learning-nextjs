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

export { fetchProducts, fetchProductById };

// create - 생성
// delete - 삭제
// update - 수정
// get - 조회

// instance.get()
// instance.delete()
