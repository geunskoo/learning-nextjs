import ProductList from '@/components/product-list/ProductList';
import ProductHeader from '@/components/ProductHeader';

function ProductPage() {
	const headerTitle = '상품 목록 페이지';
	return (
		<div>
			<ProductHeader title={headerTitle}></ProductHeader>
			<ProductList></ProductList>
		</div>
	);
}
/**
 * 1. 상품 목록 페이지 = '/'
 * 2. 상품 상세 페이지 = '/products/productId'
 * 3. 장바구니 페이지 = '/carts'
 */

export default ProductPage;
