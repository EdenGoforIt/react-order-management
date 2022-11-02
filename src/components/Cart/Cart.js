import Modal from '../UI/Modal/Modal';
import classes from './Cart.module.css';
import React, { useContext, useState } from 'react';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem/CartItem';
import Checkout from './Checkout/Checkout';

const Cart = (props) => {
	const [isCheckout, setIsCheckout] = useState(false);
	const cartCtx = useContext(CartContext);
	const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
	const hasItems = cartCtx.items.length > 0;
	const cartItemRemoveHandler = (id) => {
		cartCtx.removeItem(id);
	};
	const cartItemAddHandler = (item) => {
		cartCtx.addItem(item);
	};
	const orderHandler = () => {
		setIsCheckout(true);
	};
	const onCancelHandler = () => {
		setIsCheckout(false);
	};
	const submitOrderHandler = (data) => {
		// TODO: add loader
		return;
		fetch('https://recipe-book-ffafc-default-rtdb.firebaseio.com/orders.json', {
			method: 'POST',
			body: JSON.stringify({
				user: data,
				orderItems: cartCtx.items,
			}),
		}).then();
	};

	const CartItems = (
		<ul className={classes['cart-items']}>
			{cartCtx.items.map((item) => (
				<CartItem
					key={item.id}
					name={item.name}
					amount={item.amount}
					price={item.price}
					onRemove={cartItemRemoveHandler.bind(null, item.id)}
					onAdd={cartItemAddHandler.bind(null, item)}
				/>
			))}
		</ul>
	);

	const modalActions = (
		<div className={classes.actions}>
			<button className={classes['button--alt']} onClick={props.onClose}>
				Close
			</button>
			{!!cartCtx.items.length && (
				<button className={classes.button} onClick={orderHandler}>
					Order
				</button>
			)}
		</div>
	);
	return (
		<Modal onClose={props.onClose}>
			{CartItems}
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>{totalAmount}</span>
			</div>
			{isCheckout && (
				<Checkout
					onCancel={onCancelHandler}
					onSubmitCheckout={submitOrderHandler}
				/>
			)}
			{hasItems && !isCheckout && modalActions}
		</Modal>
	);
};

export default React.memo(Cart);
