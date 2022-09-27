import CartContext from '../../../store/cart-context';
import CartIcon from '../../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import { useContext } from 'react';

const HeaderCartButton = (props) => {
	const cartCtx = useContext(CartContext);
	console.log(cartCtx);
	const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
		return currentNumber + item.amount;
	}, 0);


	return (
		<button type='button' className={classes.button} onClick={props.onClick}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={classes.badge}>3</span>
		</button>
	);
};

export default HeaderCartButton;
