import styles from './Ingredients.module.css';

export default function RecipeIngredients(){
    const ingredients = ['1 (14- to 16-ounce) ball pizza dough','1½ to 2 tablespoons extra-virgin olive oil','2 teaspoons minced or pressed garlic','6 to 8 ounces low-moisture mozzarella cheese','1½ to 2 teaspoons dried Italian herb blend'];
    return(
        <div>
            <h3>Recipe Ingredients</h3>
            <ul className={styles.ingredientList}>
                <li>{ingredients[0]}</li>
                <li>{ingredients[1]}</li>
                <li>{ingredients[2]}</li>
                <li>{ingredients[3]}</li>
                <li>{ingredients[4]}</li>
            </ul>
        </div>
    );
}