import React, { useState, useEffect } from "react";

const ProgressBar = ({ removeNoteHandler, note }) => {
  const [isProgressBarRunning, setIsProgressBarRunning] = useState(true);
  const [filled, setFilled] = useState(10);
  useEffect(() => {
    if (filled < 100 && isProgressBarRunning) {
      setTimeout(() => setFilled((prev) => (prev += 2)), 200);
    }
    if (filled == 100) {
      removeNoteHandler(note.id);
    }
  }, [filled, isProgressBarRunning]);
  return (
    <div className="  ">
      <div className="   rounded-md  w-[100%] bg-[#B2B2B2]">
        <div
          className={`bg-[#3BC171] rounded-md p-3`}
          style={{
            height: "100%",
            width: `${filled}%`,
            transition: "width 0.5s",
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
