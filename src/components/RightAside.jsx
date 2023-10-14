import React from "react";

const RightAside = () => {
  return (
    <div className="flex flex-col justify-center py-6 px-10 w-[18rem] mb-4 md:mb-0 md:w-1/2 bg-[#50bcbc] text-white rounded-b-lg md:rounded-bl-none md:rounded-br-lg">
      <h1 className="font-[700] text-xl mb-5">Why Us</h1>
      <ul className="font-[400] text-sm text-[#cffdff]">
        <li className="hover:text-base duration-300">
          Tutorials by industry experts
        </li>
        <li className="hover:text-base duration-300 cursor-pointer">
          Peer & expert code review
        </li>
        <li className="hover:text-base duration-300 cursor-pointer">
          Coding exercises
        </li>
        <li className="hover:text-base duration-300 cursor-pointer">
          Access to our GitHub repos
        </li>
        <li className="hover:text-base duration-300 cursor-pointer">
          Community forum
        </li>
        <li className="hover:text-base duration-300 cursor-pointer">
          Flashcard decks
        </li>
        <li className="hover:text-base duration-300 cursor-pointer">
          New videos every week
        </li>
      </ul>
    </div>
  );
};

export default RightAside;
