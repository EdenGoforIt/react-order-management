import CartContext from '../../../store/cart-context';
import CartIcon from '../../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import React, { useContext, useState, useEffect } from 'react';

const HeaderCartButton = (props) => {
	const cartCtx = useContext(CartContext);
	const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
	const { items } = cartCtx;

	const totalAmount = items.reduce((totalAmount, item) => {
		return totalAmount + item.price * item.amount;
	}, 0).toFixed(2);

	const btnClasses = `${classes.button} ${
		btnIsHighlighted ? classes.bump : ''
	}`;

	useEffect(() => {
		if (items.length > 0) {
			setBtnIsHighlighted(true);
		}
		const timer = setTimeout(() => {
			setBtnIsHighlighted(false);
		}, 100);

		return () => {
			clearTimeout(timer);
		};
	}, [items]);

	return (
		<button type='button' className={btnClasses} onClick={props.onClick}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={classes.badge}>{totalAmount}</span>
		</button>
	);
};

export default React.memo(HeaderCartButton);
