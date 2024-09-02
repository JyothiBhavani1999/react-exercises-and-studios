import styles from './Description.module.css'

export default function RecipePhoto(){
    const recipePhoto = "https://www.thursdaynightpizza.com/wp-content/uploads/2023/04/white-pizza-with-parsley.png";
    return(
        <div>
            <img src ={recipePhoto} alt = "pizza photo"  className={styles.imageUpdates}/>
        </div>
    );
} 

