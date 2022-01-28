import classes from "./Card.module.css";

function Card(props) {
  return <main className={classes.card}>{props.children}</main>;
}

export default Card;
