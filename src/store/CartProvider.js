import { useReducer } from 'react';
import CartContext from './cart-context';
const defaultCartState = {
	items: [],
	totalAmount: 0,
};

const getTotalAmount = (items) => {
	return items.reduce((total, item) => {
		return total + item.amount * item.price;
	}, 0);
};

const deleteItemWithNoAmount = (items) => {
	return items.filter((item) => item.amount > 0);
};
const cartReducer = (state, action) => {
	let updatedItems;
	let existingCartItemIndex;
	switch (action.type) {
		case 'ADD':
			existingCartItemIndex = state.items.findIndex(
				(item) => item.id === action.item.id
			);

			if (existingCartItemIndex > -1) {
				const existingItem = state.items[existingCartItemIndex];

				const updatedItem = {
					...action.item,
					amount: existingItem.amount + action.item.amount,
				};
				updatedItems = [...state.items];

				updatedItems[existingCartItemIndex] = { ...updatedItem };
			} else {
				updatedItems = state.items.concat(action.item);
			}

			return {
				items: updatedItems,
				totalAmount: getTotalAmount(updatedItems),
			};
		case 'REMOVE':
			existingCartItemIndex = state.items.findIndex(
				(item) => item.id === action.id
			);

			const existingItem = state.items[existingCartItemIndex];

			if (existingItem) {
				const updatedItem = {
					...existingItem,
					amount: existingItem.amount - 1,
				};
				
				updatedItems = [...state.items];

				updatedItems[existingCartItemIndex] = { ...updatedItem };

				updatedItems = deleteItemWithNoAmount(updatedItems);
			}

			return {
				items: updatedItems,
				totalAmount: getTotalAmount(updatedItems),
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
