import React from "react";
import { useNavigate } from "react-router-dom";

const Meal = ({ meal }) => {
  const { idCategory, strCategory, strCategoryDescription, strCategoryThumb } =
    meal;
  const navigate = useNavigate();
  const handleMealDetails = () => {
    navigate(`/meal/${idCategory}`);
  };
  return (
    <div className="card w-full bg-base-800 shadow-2xl hover:bg-slate-900">
      <figure>
        <img src={strCategoryThumb} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title"> Menu Id: {idCategory}</h2>
        <h2 className="card-title"> Menu type: {strCategory}</h2>
        {/* <p> {strCategoryDescription} </p> */}
        <div className="card-actions justify-end">
          <button onClick={handleMealDetails} className="btn btn-error">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Meal;
