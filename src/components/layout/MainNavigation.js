import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>MeetUps</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetups">Add New Meetups</Link>
          </li>
          <li>
            <Link to="/favourites">Favourite Meetups</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
