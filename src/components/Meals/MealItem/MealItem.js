import CartContext from '../../../store/cart-context';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm/MealItemForm';
import React, { useContext } from 'react';

const MealItem = (props) => {
	const cartCtx = useContext(CartContext);
	const price = `$ ${props.meal.price.toFixed(2)}`;
	const addToCartHandler = (amount) => {
		cartCtx.addItem({
			id: props.meal.id,
			name: props.meal.name,
			amount: amount,
			price: props.meal.price,
		});
	};
	return (
		<li className={classes.meal}>
			<div>
				<h3>{props.meal.name}</h3>
				<div className={classes.description}>{props.meal.description}</div>
				<div className={classes.price}>{price}</div>
			</div>
			<div>
				<MealItemForm id={props.meal.id} onAddToCart={addToCartHandler} />
			</div>
		</li>
	);
};

export default MealItem;
