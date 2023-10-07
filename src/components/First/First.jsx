import React from "react";
import Lottie from "lottie-react";
import meal from "../../assets/meal.json";
import { Link } from "react-router-dom";

const First = () => {
  return (
    <>
      <div className="mx-16 flex flex-col-reverse md:flex-row md:justify-between">
        <div className="w-full flex flex-col">
          <h1 className="text-5xl font-bold mt-8 text-center md:text-left">
            The{" "}
            <span className="italic">
              <span className="text-orange-600">Meal</span>DB
            </span>
          </h1>
          <h2 className="text-2xl font-bold mb-6 mt-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            do.....
          </h2>
          <p className="text-justify mt-auto text-lg">
            ducimus non quaerat magnam, at officiis quas, tempora odit mollitia?
            Eum alias animi quia quod voluptate, ea fuga modi neque provident
            veniam assumenda recusandae est exercitationem, iste labore porro
            eos culpa cumque odit? Tenetur saepe, officiis sapiente iusto quos
            praesentium eaque eligendi recusandae consequatur? Iusto sequi sunt,
            nihil facilis?praesentium eaque eligendi recusandae consequatur?
            Iusto sequi sunt, nihil facilis?
          </p>
          <div className="mt-auto">
            <Link to="/meals">
              <button className="btn btn-error">Buy Meal</button>
            </Link>
          </div>
        </div>
        <div className="w-full">
          <Lottie animationData={meal} loop={true} />
        </div>
      </div>
    </>
  );
};

export default First;
