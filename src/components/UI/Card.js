import './Card.css';

const Card = (props) => {
    /* This custom component works as a JSX tag such as <div>. */

    //Makes the custom component to accept the card and other classes
    const classes = 'card ' + props.className;

    return <div className={classes}>{props.children}</div>;
}

export default Card;