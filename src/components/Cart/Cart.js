import Modal from '../UI/Modal/Modal';
import classes from './Cart.module.css';

const Cart = (props) => {
	const CartItems = (
		<ul className={classes['cart-items']}>
			{[
				{
					id: 'c1',
					name: 'sushi',
					amount: 2,
					price: 12.99,
				},
			].map((item) => (
				<li>{item.name}</li>
			))}
		</ul>
	);

	return (
		<Modal onClose={props.onClose}>
			{CartItems}
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>35</span>
			</div>
			<div className={classes.actions}>
				<button className={classes['button--alt']} onClick={props.onClose}>
					Close
				</button>
				<button className={classes.button}>Close</button>
			</div>
		</Modal>
	);
};

export default Cart;
