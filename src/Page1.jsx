import React from "react";

function Page1() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-center text-4xl font-bold mt-12">
        What do you want to learn?
      </h1>
      <div className="flex flex-wrap justify-center justify-content-evenly  mt-8 ">
        <div className="flex items-center justify-center bg-yellow-200 h-40 w-40 hover:bg-yellow-300 transition duration-300  rounded-sm shadow-lg m-6 cursor-pointer">
          Hindi
        </div>
        <div className="flex items-center justify-center bg-yellow-200 h-40 w-40 hover:bg-yellow-300 transition duration-300  rounded-sm shadow-lg m-6 cursor-pointer">
          English
        </div>
        <div className="flex items-center justify-center bg-yellow-200 h-40 w-40 hover:bg-yellow-300 transition duration-300  rounded-sm shadow-lg m-6 cursor-pointer">
          Japanese
        </div>
        <div className="flex items-center justify-center bg-yellow-200 h-40 w-40 hover:bg-yellow-300 transition duration-300  rounded-sm shadow-lg m-6 cursor-pointer">
          Korean
        </div>
        <div className="flex items-center justify-center bg-yellow-200 h-40 w-40 hover:bg-yellow-300 transition duration-300  rounded-sm shadow-lg m-6 cursor-pointer">
          French
        </div>
        <div className="flex items-center justify-center bg-yellow-200 h-40 w-40 hover:bg-yellow-300 transition duration-300  rounded-sm shadow-lg m-6 cursor-pointer">
          Spanish
        </div>
        <div className="flex items-center justify-center bg-yellow-200 h-40 w-40 hover:bg-yellow-300 transition duration-300  rounded-sm shadow-lg m-6 cursor-pointer">
          German
        </div>
        <div className="flex items-center justify-center bg-yellow-200 h-40 w-40 hover:bg-yellow-300 transition duration-300  rounded-sm shadow-lg m-6 cursor-pointer">
          Chinese
        </div>
        <div className="flex items-center justify-center bg-yellow-200 h-40 w-40 hover:bg-yellow-300 transition duration-300  rounded-sm shadow-lg m-6 cursor-pointer">
          Italian
        </div>
        <div className="flex items-center justify-center bg-yellow-200 h-40 w-40 hover:bg-yellow-300 transition duration-300  rounded-sm shadow-lg m-6 cursor-pointer">
          Russian
        </div>
        <div className="flex items-center justify-center bg-yellow-200 h-40 w-40 hover:bg-yellow-300 transition duration-300  rounded-sm shadow-lg m-6 cursor-pointer">
          Portuguese
        </div>
      </div>
    </div>
  );
}

export default Page1;
