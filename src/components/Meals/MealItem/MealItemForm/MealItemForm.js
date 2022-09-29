import { useRef, useState } from 'react';
import Input from '../../../UI/Input/Input';
import classes from './MealItemForm.module.css';
const MealItemForm = (props) => {
	const [amountIsValid, setAmountIsValid] = useState(true);
	const amountInputRef = useRef();

	const submitHandler = (event) => {
		// prevent default Ajax form submission
		event.preventDefault();

		const enteredAmount = +amountInputRef.current.value?.trim();
		if (!enteredAmount) {
			setAmountIsValid(false);
			return;
		}

		props.onAddToCart(enteredAmount);
	};
	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<Input
				ref={amountInputRef}
				label='amount'
				input={{
					id: 'amount_' + props.id,
					type: 'number',
					min: '1',
					max: '10',
					step: '1',
					defaultValue: '1',
				}}
			/>
			<button type='submit'>+ Add</button>
			{!amountIsValid && <p>Please enter valid amount</p>}
		</form>
	);
};

export default MealItemForm;
