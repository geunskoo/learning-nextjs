import Image from 'next/image';
import styles from './ProductDetail.module.css';

function ProductDetail({ productDetail }) {
	return (
		<div className={styles.container}>
			<div>
				<Image
					src={productDetail.imageUrl}
					width={300}
					height={300}
					alt={productDetail.name}
				></Image>
			</div>
			<div className={styles.description}>
				<p>{productDetail.name}</p>
				<p>{productDetail.price}</p>
				<button>장바구니에 담기</button>
			</div>
		</div>
	);
}

export default ProductDetail;
