import classes from './Checkout.module.css';
import { useRef, useState } from 'react';

const isEmpty = (value) => !value;
const Checkout = (props) => {
	const [formInputValidity, setFormInputValidity] = useState({
		name: true,
		street: true,
		city: true,
		postalCode: true,
	});

	const nameInputRef = useRef();
	const streetInputRef = useRef();
	const postalCodeInputRef = useRef();
	const cityInputRef = useRef();

	const confirmHandler = (event) => {
		event.preventDefault();
		const nameValid = !isEmpty(nameInputRef.current.value);
		const streetValid = !isEmpty(streetInputRef.current.value);
		const postalCodeValid = !isEmpty(postalCodeInputRef.current.value);
		const cityValid = !isEmpty(cityInputRef.current.value);

		setFormInputValidity({
			name: nameValid,
			street: streetValid,
			postalCode: postalCodeValid,
			city: cityValid,
		});
		const formIsValid =
			nameValid && streetValid && postalCodeValid && cityValid;

		if (!formIsValid) {
			return;
		}
	};

	return (
		<form className={classes.form} onSubmit={confirmHandler}>
			<div
				className={`${classes.control} ${
					formInputValidity.name ? '' : classes.invalid
				}`}
			>
				<label htmlFor='name'>Your Name</label>
				<input
					type='text'
					id='name'
					autoComplete='new-password'
					ref={nameInputRef}
				/>
			</div>
			<div
				className={`${classes.control} ${
					formInputValidity.street ? '' : classes.invalid
				}`}
			>
				<label htmlFor='street'>Street</label>
				<input
					type='text'
					id='street'
					autoComplete='new-password'
					ref={streetInputRef}
				/>
			</div>
			<div
				className={`${classes.control} ${
					formInputValidity.postalCode ? '' : classes.invalid
				}`}
			>
				<label htmlFor='postal'>Postal Code</label>
				<input
					type='text'
					id='postal'
					autoComplete='new-password'
					ref={postalCodeInputRef}
				/>
			</div>
			<div
				className={`${classes.control} ${
					formInputValidity.city ? '' : classes.invalid
				}`}
			>
				<label htmlFor='city'>City</label>
				<input
					type='text'
					id='city'
					autoComplete='new-password'
					ref={cityInputRef}
				/>
			</div>
			<div className={classes.actions}>
				<button type='button' onClick={props.onCancel}>
					Cancel
				</button>
				<button className={classes.submit}>Confirm</button>
			</div>
		</form>
	);
};

export default Checkout;
