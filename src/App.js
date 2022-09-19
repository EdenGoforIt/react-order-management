import './App.css';
import Header from './components/Layout/Header/Header';
import Meals from './components/Meals/Meals/Meals';

function App() {
	return (
		<>
			<Header />
			<main>
				<Meals />
			</main>
		</>
	);
}

export default App;
