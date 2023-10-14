import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col bg-white px-8 py-4 w-[18rem] md:w-[40rem] mt-4 md:mt-0 rounded-tl-lg rounded-tr-lg">
      <span className=" cursor-pointer hover:text-[1.5rem] duration-300 text-[1.35rem] font-[700] text-[#62b4b4] my-4">
        Join our community
      </span>
      <span className="text-[#c2d952] font-[700]">
        30-day, hassle-free money back guarantee
      </span>
      <p className="text-[#b0b0b0] font-[400] mt-2 mb-6 mr-4">
        Gain access to our full library of tutorials along with expert code
        reviews. Perfect for any developers who are serious about honing their
        skills.
      </p>
    </div>
  );
};

export default Header;
