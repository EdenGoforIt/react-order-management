import mealsImage from '../../../assets/meals.jpg';
import HeaderCartButton from '../HeaderCartButton/HeaderCartButton';
import classes from './Header.module.css';

const Header = (props) => {
	return (
		<>
			<header className={classes.header}>
				<h1>Meals</h1>
				<HeaderCartButton onClick={props.onShowCart} />
			</header>
			<div className={classes['main-image']}>
				<img src={mealsImage} alt='meals' />
			</div>
		</>
	);
};

export default Header;
