import React from "react";
import LeftAside from "./LeftAside";
import RightAside from "./RightAside";

const BodyContainer = () => {
  return (
    <div className="flex flex-col w-[18rem] md:flex-row md:w-[40rem] ">
      <LeftAside />
      <RightAside />
    </div>
  );
};

export default BodyContainer;
