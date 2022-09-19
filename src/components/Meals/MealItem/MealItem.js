import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm/MealItemForm';

const MealItem = (props) => {
	console.log(props);
	const price = `$ ${props.meal.price.toFixed(2)}`;
	return (
		<li className={classes.meal}>
			<div>
				<h3>{props.meal.name}</h3>
				<div className={classes.description}>{props.meal.description}</div>
				<div className={classes.price}>{price}</div>
			</div>
			<div>
				<MealItemForm />
			</div>
		</li>
	);
};

export default MealItem;
