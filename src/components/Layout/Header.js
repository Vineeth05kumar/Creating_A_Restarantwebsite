import { Fragment } from "react";
import headerImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import MealSummary from "./MealSummary";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={headerImage} alt="header__image!" />
      </div>
      <MealSummary />
    </Fragment>
  );
};

export default Header;
