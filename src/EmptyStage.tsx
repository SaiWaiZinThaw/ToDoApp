import React from "react";
import empty from "./empty.svg";

const EmptyStage: React.FC = () => {
  return (
    <div className="hidden last:flex flex-col items-center py-10">
      <img className="mb-5 w-[150px]" src={empty} alt="" />
      <p className="text-lg font-Nunito">There is currently no task.</p>
    </div>
  );
};

export default EmptyStage;
