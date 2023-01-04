import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { PRODUCTS } from '../../products';
import { ShopContext } from '../../context/ShopContext';
import CartItem from './CartItem';

import './Cart.css';

function Cart() {
	const { cartItems, getTotalCartAmount } = useContext(ShopContext);
	const totalAmout = getTotalCartAmount();

	const navigate = useNavigate();
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
			{totalAmout > 0 ? (
				<div className="checkout">
					<p>Subtotal: ${totalAmout}</p>
					<button onClick={() => navigate('/')}>Continue Sopping</button>
					<button>Checkout</button>
				</div>
			) : (
				<p>No items in your cart</p>
			)}
		</div>
	);
}

export default Cart;
