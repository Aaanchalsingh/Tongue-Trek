import React from "react";
import { Link } from "react-router-dom";

function Page1() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-center text-4xl font-bold mt-12">
        What do you want to learn?
      </h1>
      <div className="flex flex-wrap justify-center justify-content-evenly  mt-8 ">
        <Link to="/page2">
          <div className="flex items-center justify-center bg-yellow-200 h-40 w-40 hover:bg-yellow-300 transition duration-300  rounded-sm shadow-lg m-6 cursor-pointer">
            Hindi
          </div>
        </Link>
        <Link to="/page2">
          <div className="flex items-center justify-center bg-yellow-200 h-40 w-40 hover:bg-yellow-300 transition duration-300  rounded-sm shadow-lg m-6 cursor-pointer">
            English
          </div>
        </Link>
        <Link to="/page2">
          <div className="flex items-center justify-center bg-yellow-200 h-40 w-40 hover:bg-yellow-300 transition duration-300  rounded-sm shadow-lg m-6 cursor-pointer">
            Japanese
          </div>
        </Link>
        <Link to="/page2">
          <div className="flex items-center justify-center bg-yellow-200 h-40 w-40 hover:bg-yellow-300 transition duration-300  rounded-sm shadow-lg m-6 cursor-pointer">
            Korean
          </div>
        </Link>
        <Link to="/page2">
          <div className="flex items-center justify-center bg-yellow-200 h-40 w-40 hover:bg-yellow-300 transition duration-300  rounded-sm shadow-lg m-6 cursor-pointer">
            French
          </div>
        </Link>
        <Link to="/page2">
          <div className="flex items-center justify-center bg-yellow-200 h-40 w-40 hover:bg-yellow-300 transition duration-300  rounded-sm shadow-lg m-6 cursor-pointer">
            Spanish
          </div>
        </Link>
        <Link to="/page2">
          <div className="flex items-center justify-center bg-yellow-200 h-40 w-40 hover:bg-yellow-300 transition duration-300  rounded-sm shadow-lg m-6 cursor-pointer">
            German
          </div>
        </Link>
        <Link to="/page2">
          <div className="flex items-center justify-center bg-yellow-200 h-40 w-40 hover:bg-yellow-300 transition duration-300  rounded-sm shadow-lg m-6 cursor-pointer">
            Chinese
          </div>
        </Link>
        <Link to="/page2">
          <div className="flex items-center justify-center bg-yellow-200 h-40 w-40 hover:bg-yellow-300 transition duration-300  rounded-sm shadow-lg m-6 cursor-pointer">
            Italian
          </div>
        </Link>
        <Link to="/page2">
          <div className="flex items-center justify-center bg-yellow-200 h-40 w-40 hover:bg-yellow-300 transition duration-300  rounded-sm shadow-lg m-6 cursor-pointer">
            Russian
          </div>
        </Link>
        <Link to="/page2">
          <div className="flex items-center justify-center bg-yellow-200 h-40 w-40 hover:bg-yellow-300 transition duration-300  rounded-sm shadow-lg m-6 cursor-pointer">
            Portuguese
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Page1;
