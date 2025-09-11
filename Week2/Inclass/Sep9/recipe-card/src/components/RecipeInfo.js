// import './RecipeCard.css';
// Using a module: To use css modules rename the css sheet to {name}.module.css

import styles from './RecipeCard.module.css';

//props = {
//    title: 'Buttermilk',
//    description: 'A very good buttermilk recipe'
//}

const RecipeInfo = (props) => {
    const { title, description } = props;
    return (
        <div className = {styles.recipe_info}>
            <h2 className = {styles.recipe_title}>{title}</h2>
            <p>{description}</p>
        </div>
    );
}
export default RecipeInfo;