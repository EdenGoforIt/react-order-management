import { useState } from 'react';
import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header/Header';
import Meals from './components/Meals/Meals/Meals';
import CartProvider from './store/CartProvider';
import React from 'react';

function App() {
	const [cartIsShown, setCartIsShown] = useState(false);
	const showCartHandler = () => setCartIsShown(true);
	const hideCartHandler = () => setCartIsShown(false);

	return (
		<CartProvider>
			{cartIsShown && <Cart onClose={hideCartHandler} />}
			<Header onShowCart={showCartHandler} />
			<main>
				<Meals />
			</main>
		</CartProvider>
	);
}

export default App;
