import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './ProductList.module.css';
import Link from 'next/link';

function ProductList() {
	const [products, setProducts] = useState();

	useEffect(() => {
		axios.get('http://localhost:9999/products').then(resp => {
			setProducts(resp.data);
		});
	}, []);
	return (
		<ul>
			{products &&
				products.map(product => {
					return (
						<li key={product.id} className={styles.item}>
							<Link href={`/products/${product.id}`}>
								<div>
									<Image
										src={product.imageUrl}
										width={300}
										height={250}
										alt={product.name}
									></Image>
								</div>
								<p>{product.name}</p>
							</Link>
						</li>
					);
				})}
		</ul>
	);
}

export default ProductList;
