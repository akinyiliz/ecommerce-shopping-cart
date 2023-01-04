import React, { useContext } from 'react';

import { PRODUCTS } from '../../products';
import { ShopContext } from '../../context/ShopContext';
import CartItem from './CartItem';

import './Cart.css';

function Cart() {
	const { cartItems, getTotalCartAmount } = useContext(ShopContext);
	const totalAmout = getTotalCartAmount();
	return (
		<div className="cart">
			<div>
				<h1>Your Cart Items</h1>
			</div>
			<div className="cartItems">
				{PRODUCTS.map((product) => {
					if (cartItems[product.id] !== 0) {
						return <CartItem data={product} />;
					}
				})}
			</div>
			<div className="checkout">
				<p>Subtotal: ${totalAmout}</p>
				<button>Continue Sopping</button>
				<button>Checkout</button>
			</div>
		</div>
	);
}

export default Cart;
