import { useRef, useState, useEffect } from "react";
import IngredientsList from "../IngredientsList/IngredientsList.component";
import ClaudeRecipe from "../ClaudeRecipe/ClaudeRecipe.component";
import { getRecipeFromMistral } from "../../api/ai";

export default function Main() {
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState("");
  const [gettingRecipe, setGettingRecipe] = useState(false);
  const recipeSection = useRef(null);

  useEffect(() => {
    if (recipe !== "" && recipeSection.current !== null) {
      const yCoord =
        recipeSection.current.getBoundingClientRect().top + window.scrollY;
      window.scroll({
        top: yCoord,
        behavior: "smooth",
      });
    }
  }, [recipe]);

  async function getRecipe() {
    setGettingRecipe(true);
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    setRecipe(recipeMarkdown);
    setGettingRecipe(false);
  }

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  return (
    <main>
      <form action={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>

      <div className="add-ingredient-header">
        <h3>Add at least 4 ingredients, for a recipe!</h3>
      </div>

      {ingredients.length > 0 && (
        <IngredientsList
          ref={recipeSection}
          ingredients={ingredients}
          getRecipe={getRecipe}
          gettingRecipe={gettingRecipe}
        />
      )}

      {gettingRecipe && <h1 className="loading-h">Loading...</h1>}
      {recipe && <ClaudeRecipe recipe={recipe} />}
    </main>
  );
}
