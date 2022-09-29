import Modal from '../UI/Modal/Modal';
import classes from './Cart.module.css';
import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';

const Cart = (props) => {
	const cartCtx = useContext(CartContext);
	const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

	const CartItems = (
		<ul className={classes['cart-items']}>
			{cartCtx.items.map((item) => (
				<li>{item.name}</li>
			))}
		</ul>
	);

	return (
		<Modal onClose={props.onClose}>
			{CartItems}
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>{totalAmount}</span>
			</div>
			<div className={classes.actions}>
				<button className={classes['button--alt']} onClick={props.onClose}>
					Close
				</button>
				{!!cartCtx.items.length && (
					<button className={classes.button}>Order</button>
				)}
			</div>
		</Modal>
	);
};

export default React.memo(Cart);
