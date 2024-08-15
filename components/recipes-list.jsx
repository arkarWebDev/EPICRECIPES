"use client";
import { useState } from "react";
import RecipeCard from "./recipe-card";
import RecipeSearch from "./recipe-search";

const RecipesList = ({ recipes }) => {
  const [searchVal, setSearchVal] = useState("");
  const filteredRecipes = recipes.filter((recipe) => {
    return recipe.modified_title.includes(searchVal);
  });

  return (
    <section>
      <RecipeSearch searchVal={searchVal} setSearchVal={setSearchVal} />
      <h2 className="text-2xl font-bold">Popular Recipes</h2>
      <div className=" space-y-4 mb-10 mt-5">
        {filteredRecipes.length === 0 && (
          <p className=" text-sm font-medium ">No recipes found.</p>
        )}
        {filteredRecipes.map((recipe, index) => (
          <RecipeCard recipe={recipe} key={index} />
        ))}
      </div>
    </section>
  );
};

export default RecipesList;
