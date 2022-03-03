//import React from 'react';
//import React, { useState } from 'react';  // Para cxuando ya vamos a atrabajar con  Hooks
import React, { useContext } from 'react'; // Hooks
import addContext from '@context/AppContext.js';
import addToCartImage from '@icons/bt_add_to_cart.svg';

//import '../styles/ProductItem.scss';  ya no usamos esto ya que creamos alias en la conf de webpack y queda como abajo
import '@styles/ProductItem.scss';

//const shoppingCart = '@icons/icon_shopping_cart.svg'; puedes utilizar constantes si llamas desde algun CDN externo
//import addToCart from '@icons/bt_add_to_cart.svg'; // Si se trabaja con "Alias" vamos a tener que cambiarlo por el import y hacer el from hacia el elemento

const ProductItem = ({ product }) => {
	//const[cart, setCart] = useState([]); // [cart, setCart] = recibe 2 valores, el del elemento y el valor a evetno a realizar es ese elemento
	const { addToCart } = useContext(addContext);
	
	const handleClick = item => {
		addToCart(item);
	}

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product)}>
					<img src={addToCartImage} alt="" />
				</figure>
				
			</div>
		</div>
	);
}

export default ProductItem;