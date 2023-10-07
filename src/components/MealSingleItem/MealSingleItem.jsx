import React, { useState } from "react";

const MealSingleItem = ({ singleMeal }) => {
  console.log(singleMeal);
  const {
    strMeal,
    strInstructions,
    strMealThumb,
    strSource,
    strYoutube,
    strCategory,
    strArea,
  } = singleMeal;

  const [fold, setFold] = useState(true);

  return (
    <>
      <div className="mx-16 flex">
        <div>
          <img className="w-full" src={strMealThumb} alt="" />
        </div>
        <div className="ml-8">
          {fold ? (
            <p className="text-justify mt-8">
              {strInstructions.substring(0, 100)}....{" "}
              <span
                className="text-green-500 cursor-pointer"
                onClick={() => setFold(!fold)}
              >
                Read More
              </span>
            </p>
          ) : (
            <p className="text-justify mt-8">
              {strInstructions}{" "}
              <span
                className="text-green-500 cursor-pointer"
                onClick={() => setFold(!fold)}
              >
                Read Less
              </span>
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default MealSingleItem;
