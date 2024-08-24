import { fetchProductById } from '@/api';
import ProductDetail from '@/components/ProductDetail';
import ProductHeader from '@/components/ProductHeader';

function ProductDetailPage({ productDetail }) {
	const headerTitle = '상품 상세 정보 페이지';
	return (
		<div>
			<ProductHeader title={headerTitle}></ProductHeader>
			<ProductDetail productDetail={productDetail}></ProductDetail>
		</div>
	);
}

export default ProductDetailPage;

export async function getServerSideProps(context) {
	console.log('## productId :', context.params.productId);
	const id = context.params.productId;
	const { data } = await fetchProductById(id);

	return {
		props: { message: '서버에서 보내준 메세지', productDetail: data },
	};
}
