import './App.css';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header/Header';
import Meals from './components/Meals/Meals/Meals';
import { useState } from 'react';

function App() {
	const [cartIsShown, setCartIsShown] = useState(false);
	const showCartHandler = () => setCartIsShown(true);
	const hideCartHandler = () => setCartIsShown(false);

	return (
		<>
			{cartIsShown && <Cart onClose={hideCartHandler} />}
			<Header onShowCart={showCartHandler} />
			<main>
				<Meals />
			</main>
		</>
	);
}

export default App;
