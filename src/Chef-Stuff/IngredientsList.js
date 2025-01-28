const IngredientsList = ({ ingredients, showData }) => {
  const ingredientsList = ingredients.map((item, index) => {
    return <li key={index.toString()}>{item}</li>;
  });

  return (
    <section>
      <h2>Ingredients on hand:</h2>
      <ul className="ingredients-list" aria-live="polite">
        {ingredientsList}
      </ul>
      {ingredients.length > 3 ? (
        <div className="get-recipe-container">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={showData}>Get a recipe</button>
        </div>
      ) : null}
    </section>
  );
};

export default IngredientsList;
