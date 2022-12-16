import Modal from '../UI/Modal/Modal';
import classes from './Cart.module.css';
import React, { useContext, useState } from 'react';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem/CartItem';
import Checkout from './Checkout/Checkout';

const Cart = (props) => {
	const [isCheckout, setIsCheckout] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [didSubmit, setDidSubmit] = useState(false);

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
	const submitOrderHandler = async (data) => {
		setIsSubmitting(true);

		await ('https://recipe-book-ffafc-default-rtdb.firebaseio.com/orders.json',
		{
			method: 'POST',
			body: JSON.stringify({
				user: data,
				orderItems: cartCtx.items,
			}),
		});

		setIsSubmitting(false);
		setDidSubmit(true);
		cartCtx.clearCart();
		setTimeout(() => {
			props.onClose();
		}, 2000);
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

	const cartContent = (
		<>
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
		</>
	);

	const didSubmitContent = <p>Successfully submitted</p>;

	return (
		<Modal onClose={props.onClose}>
			{isSubmitting && didSubmitContent}
			{!isSubmitting && !didSubmit && cartContent}
			{!isSubmitting && didSubmit && didSubmitContent}
		</Modal>
	);
};

export default React.memo(Cart);
