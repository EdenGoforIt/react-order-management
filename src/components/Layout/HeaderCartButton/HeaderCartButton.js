import CartContext from '../../../store/cart-context';
import CartIcon from '../../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import React, { useContext } from 'react';

const HeaderCartButton = (props) => {
	const cartCtx = useContext(CartContext);
	const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
		return currentNumber + item.amount;
	}, 0);

	const btnClasses = `${classes.button} ${classes.bump}`;

	return (
		<button type='button' className={btnClasses} onClick={props.onClick}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={classes.badge}>{numberOfCartItems}</span>
		</button>
	);
};

export default React.memo(HeaderCartButton);
