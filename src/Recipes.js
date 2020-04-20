import React from "react";
import style from "./recipe.module.css";

const Recipes = ({ title, calories, image, ingredients }) => {
  console.log(title);
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>{Math.round(calories)}</p>
      <img className={style.image} src={image} alt={title} />
    </div>
  );
};

export default Recipes;
