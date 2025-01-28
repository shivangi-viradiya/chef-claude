import { useState } from "react";
import React from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";

const Main = () => {
  const [ingredients, setingredients] = useState([
    "all the main spices",
    "pasta",
    "ground beef",
    "tomato paste",
  ]);

  const [receipeShown, setReceipeShown] = useState(false);

  const addIngredient = (formdata) => {
    // event.preventDefault();
    // const formdata = new FormData(event.currentTarget);
    const newingredient = formdata.get("ingredient");
    setingredients((preingredient) => [...preingredient, newingredient]);
  };

  const showData = () => {
    setReceipeShown((preShown) => !preShown);
  };
  return (
    <main>
      <form action={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="please add the ingredient's e.g.chili flex"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      {ingredients.length > 0 ? (
        <IngredientsList ingredients={ingredients} showData={showData} />
      ) : null}
      {receipeShown && <ClaudeRecipe />}
    </main>
  );
};

export default Main;
