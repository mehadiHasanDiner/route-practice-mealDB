import React from "react";
import { useLoaderData } from "react-router-dom";
import MealSingleItem from "../MealSingleItem/MealSingleItem";

const MealDetails = () => {
  const { meals } = useLoaderData();
  console.log(meals);
  return (
    <div>
      {/* <h2 className="text-2xl text-center font-bold mt-8">
        Details of the menu type. I will finish it later.
      </h2> */}
      {meals.map((singleMeal) => (
        <MealSingleItem singleMeal={singleMeal} key={singleMeal.idMeal} />
      ))}
    </div>
  );
};

export default MealDetails;
