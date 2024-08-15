import RecipesList from "@/components/recipes-list";
import getRecipeMetadata from "@/lib/getRecipeMetadata";

export default function Home() {
  const recipes = getRecipeMetadata("recipes");

  return (
    <>
      <RecipesList recipes={recipes} />
    </>
  );
}
