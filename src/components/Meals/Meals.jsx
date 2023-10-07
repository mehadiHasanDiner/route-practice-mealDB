import React from "react";
import { useLoaderData } from "react-router-dom";
import Meal from "../Meal/Meal";

const Meals = () => {
  const mealItems = useLoaderData();
  // console.log(mealItems.categories);
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 mx-16 gap-6 mt-8">
      {mealItems.categories.map((meal) => (
        <Meal meal={meal} key={meal.idCategory}></Meal>
      ))}
    </div>
  );
};

export default Meals;
