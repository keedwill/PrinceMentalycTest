import React from "react";
import ProgressTableComponent from "./ProgressTableComponent";

const ProgressComponent = ({ Notes, removeNoteHandler }) => {
  return (
    <div className=" w-full h-[60%] flex flex-col">
      <div className="border flex items-center gap-2 border-[#E5E5E5] rounded-md py-2 px-4">
        <span className=" w-10 h-10 bg-[#DE0D6F] rounded-full flex justify-center items-center text-center text-white p-5">
          {" "}
          {Notes.length}
        </span>{" "}
        Notes in Progress
      </div>
      <ProgressTableComponent
        Notes={Notes}
        removeNoteHandler={removeNoteHandler}
      />
    </div>
  );
};

export default ProgressComponent;
