import React from 'react'
import styles from './Description.module.css'

function RecipeAuthor()
{
    const authorLink = "https://www.thursdaynightpizza.com/";
    const authorPhoto = "https://www.thursdaynightpizza.com/wp-content/uploads/2020/08/Peggy_AuthorPhoto_2020_15-scaled-e1632340052666-720x767.jpg";
    const authorName = "Peggy Paul Casella";

    return(
        <div className={styles.recipeAuthorBlock}>
            <img src = {authorPhoto} alt = "Peggy Paul Casella"className={styles.imageUpdates}/>
             <div>
                <h3>{authorName}</h3>
                <a href={authorLink}>Blog: Thursday Night Pizza</a>
             </div>
        </div>
    );
}

class RecipeDescription extends React.Component{
    render(){
        return (
            <div>
            <div>
            <h1>Let's make some Pizzaaa!!!</h1>
            <p>White Cheese Pizza with Garlic and Mozzarella. I think of this pizza as a spring or fall treat, but thanks to the regular availability of the other ingredients, you can enjoy it anytime you happen upon garlic in the market.</p>
            </div>
            <RecipeAuthor />
        </div>
        );
        
    }
}

export default RecipeDescription;