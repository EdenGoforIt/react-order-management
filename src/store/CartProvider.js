import { useReducer } from 'react';
import CartContext from './cart-context';
const defaultCartState = {
	items: [],
	totalAmount: 0,
};
const cartReducer = (state, action) => {
	console.log('state :', action);
	switch (action.type) {
		case 'ADD':
			const updatedItems = state.items.concat(action.item);
			const updatedTotalAmounts =
				state.totalAmount + action.item.price * action.item.amount;
			return {
				items: updatedItems,
				totalAmount: updatedTotalAmounts,
			};
		default:
			return defaultCartState;
	}
};

const CartProvider = (props) => {
	const [cartState, dispatchCartAction] = useReducer(
		cartReducer,
		defaultCartState
	);

	const addItemToCartHandler = (item) => {
		dispatchCartAction({ type: 'ADD', item });
	};
	const removeItemToCartHandler = (id) => {
		dispatchCartAction({ type: 'REMOVE', id: id });
	};
	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemToCartHandler,
		removeItem: removeItemToCartHandler,
	};
	return (
		<CartContext.Provider value={cartContext}>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartProvider;
