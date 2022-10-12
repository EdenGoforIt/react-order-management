import Card from '../../UI/Card/Card';
import MealItem from '../MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import { useEffect, useState } from 'react';

const AvailableMeals = () => {
	const [meals, setMeals] = useState([]);

	useEffect(() => {
		const fetchedMeals = async () => {
			const response = await fetch(
				'https://recipe-book-ffafc-default-rtdb.firebaseio.com/recipes.json'
			);

			const responseData = await response.json();
			const loadedMeals = [];
			responseData.forEach((item) => {
				loadedMeals.push({
					id: item.id,
					name: item.name,
					price: item.price,
					description: item.description,
				});
			});

			setMeals(loadedMeals);
		};

		fetchedMeals();
	}, []);

	const mealsList = meals.map((meal) => <MealItem key={meal.id} meal={meal} />);

	return (
		<section className={classes.meals}>
			<Card>
				<ul>{mealsList}</ul>
			</Card>
		</section>
	);
};

export default AvailableMeals;
