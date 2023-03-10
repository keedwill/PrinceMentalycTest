import React, { useEffect, useState } from "react";
import Logo from "../assets/Logo.svg";
import Help from "../assets/Help.svg";
import UploadComponent from "./UploadComponent";
import ProgressComponent from "./Progress/ProgressComponent";

const MainContainer = () => {
  var notesFromLocalStorage = JSON.parse(localStorage.getItem("notes") || "[]");

  const [showUploadModal, setShowUploadModal] = useState(false);
  const [Notes, setNotes] = useState(notesFromLocalStorage);
  const showUploadModalHandler = () => {
    setShowUploadModal(!showUploadModal);
  };

  const removeNoteHandler = (noteId) => {
    setNotes(Notes.filter((note) => note.id !== noteId));
  };

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(Notes));
  }, [Notes]);
  return (
    <>
      {showUploadModal && (
        <UploadComponent
          showUploadModalHandler={showUploadModalHandler}
          setNotes={setNotes}
          Notes={Notes}
        />
      )}

      <div className="h-screen">
        <div className="border-b  w-full flex items-center justify-center md:justify-between  h-[12%] md:px-[10%] border-purple ">
          <img src={Logo} alt="" />
        </div>
        <div className=" md:px-[10%] px-[5%] w-full h-[87%]  flex flex-col justify-between ">
          <div className="space-y-6 mt-4">
            <div className="flex justify-between">
              <h6 className="text-[20px]">Hi, Maria</h6>
              <img src={Help} alt="" />
            </div>
            <div className="text-[24px] font-bold">Upload your session’s recordings</div>
            <button
              onClick={showUploadModalHandler}
              className="w-full rounded-md text-white p-1 bg-gradient-to-r from-[#731054] to-[#DE0D6F]"
            >
              Upload
            </button>
          </div>
          {Notes.length > 0 && (
            <ProgressComponent
              Notes={Notes}
              removeNoteHandler={removeNoteHandler}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default MainContainer;
