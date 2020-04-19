import React from "react";
import style from "./";

const Recipes = ({ title, calories, image, ingredients }) => {
  console.log(title);
  return (
    <div>
      <h1 clasName={style.recipe}>{title}</h1>
      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>{calories}</p>
      <img src={image} alt={title} />
    </div>
  );
};

export default Recipes;
