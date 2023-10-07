import React from "react";
import "./Header.css";
import { Link, useNavigation } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";

const Header = () => {
  const navigation = useNavigation();
  return (
    <>
      <div className="flex justify-between items-center mx-16 p-2 bg-orange-700 rounded-b-lg text-white shadow-2xl sticky top-0 z-10">
        <div>
          <Link to="/">
            <h2 className="text-3xl font-bold px-2">The MealDB</h2>
          </Link>
        </div>
        <div>
          <ActiveLink to="/">
            <span className="mx-2">Home</span>
          </ActiveLink>
          <ActiveLink className="mx-2" to="/about">
            <span className="mx-2">About</span>
          </ActiveLink>
          <ActiveLink className="mx-2" to="/meals">
            <span className="mx-2">Meal Items</span>
          </ActiveLink>
          <ActiveLink className="mx-2" to="/contact">
            <span className="mx-2">Contact</span>
          </ActiveLink>
        </div>
      </div>
      <div className="text-center mt-6">
        {navigation.state === "loading" ? (
          <span className="loading loading-spinner text-error"></span>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Header;
