import Image from 'next/image';
import styles from './ProductDetail.module.css';
import { useRouter } from 'next/router';
import { createCartItem } from '@/api';

function ProductDetail({ productDetail }) {
	const router = useRouter();
	const { id, name, imageUrl, price } = productDetail;

	const addCart = async () => {
		//1. 장바구니에 아이템을 담는 API
		//2. 장바구니 페이지 이동
		const resp = await createCartItem({ id, name, imageUrl, price });
		console.log(resp);
		alert('장바구니에 추가됨.');
		router.push('/cart');
	};
	return (
		<div className={styles.container}>
			<div>
				<Image src={imageUrl} width={300} height={300} alt={name}></Image>
			</div>
			<div className={styles.description}>
				<p>{name}</p>
				<p>{price}</p>
				<button on onClick={addCart}>
					장바구니에 담기
				</button>
			</div>
		</div>
	);
}

export default ProductDetail;
