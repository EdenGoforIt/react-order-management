import classes from './Checkout.module.css';
import React from 'react';

const Checkout = (props) => {
	const submitHandler = (event) => {
		event.preventDefault();
		console.log(event);
	};
	return (
		<form onSubmit={submitHandler} autoComplete='off' role='presentation'>
			<div className={classes.control}>
				<label htmlFor='name'>Name</label>
				<input type='text' id='name' autoComplete='new-password' />
			</div>
			<div className={classes.control}>
				<label htmlFor='street'>Street</label>
				<input type='text' id='street' autoComplete='new-password' />
			</div>
			<div className={classes.control}>
				<label htmlFor='postal'>Postal Code</label>
				<input type='text' id='postal' autoComplete='new-password' />
			</div>
			<div className={classes.control}>
				<label htmlFor='city'>City</label>
				<input type='text' id='city' autoComplete='new-password' />
			</div>
			<button type='button' onClick={props.onCancel}>
				Cancel
			</button>
			<button>Submit</button>
		</form>
	);
};

export default Checkout;
