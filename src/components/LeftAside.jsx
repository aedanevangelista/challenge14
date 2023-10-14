import React from "react";

const LeftAside = () => {
  return (
    <div className="flex flex-col justify-center py-6 px-8 w-[18rem] md:w-1/2 bg-[#30b4b4] text-white md:rounded-bl-lg">
      <h1 className="my-2">Monthly Subscription</h1>
      <div className="flex flex-row items-center">
        <span className="mr-2 text-3xl ">$29</span>
        <span className="text-[#82cece] mt-3 mb-6">per month</span>
      </div>
      <p className="mb-6">Full access for less than $1 a day</p>
      <button className="w-full bg-[#c0dc34] rounded-lg py-3 self-center shadow-xl mb-2 hover:scale-110 hover:font-[700] duration-300">
        Sign Up
      </button>
    </div>
  );
};

export default LeftAside;
