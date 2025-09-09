import './RecipeCard.css';


const Card = (props) => {
    // Children is a prop we get for free. Children can be text
    // or any other tags that need to become the innerhtml of this component tag
    // Two ways to destructure props
    //const children = props.children;
    const { children } = props;
    return <div className = "card">{children}</div>;
}
export default Card;