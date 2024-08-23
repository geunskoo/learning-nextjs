import ProductHeader from '@/components/ProductHeader';
import axios from 'axios';
import Image from 'next/image';

function ProductDetailPage({ message, productDetail }) {
	const headerTitle = '상품 상세 정보 페이지';
	return (
		<div>
			<ProductHeader title={headerTitle}></ProductHeader>
			<div>ProductDetailPage : {message}</div>
			<Image
				src={productDetail.imageUrl}
				width={300}
				height={300}
				alt={productDetail.name}
			></Image>
			<p>{productDetail.name}</p>
		</div>
	);
}

export default ProductDetailPage;

export async function getServerSideProps(context) {
	console.log('## productId :', context.params.productId);
	const id = context.params.productId;
	const resp = await axios.get(`http://localhost:9999/products/${id}`);

	return {
		props: { message: '서버에서 보내준 메세지', productDetail: resp.data },
	};
}
