import React, { useState, useRef, useEffect } from "react";
import Close from "../assets/Close.svg";
import Dropdown from "./Dropdown";
import generateId from "../utilities/generateId";
import isNotEmpty from "../utilities/isNotEmpty";

const UploadComponent = ({ showUploadModalHandler, setNotes, Notes }) => {
  const [showLists, setShowLists] = useState(false);
  const [uploadButtonDisabled, setUploadButtonDisabled] = useState(true);
  const [selectedItem, setSelectedItem] = useState("");
  const [clientName, setClientName] = useState("");
  const dropdownListRef = useRef(null);
  const selectedItemHandler = (item) => {
    setSelectedItem(item);
    setShowLists(false);
  };



  const uploadNotesHandler = () => {
    setNotes([
      ...Notes,
      {
        id: generateId(),
        clientName,
        noteType: selectedItem,
      },
    ]);

    showUploadModalHandler();
  };

  const clientNameHandler = (e) => {
    setClientName(e.target.value);
  };
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu

      if (
        showLists &&
        dropdownListRef.current &&
        !dropdownListRef.current.contains(e.target)
      ) {
        setShowLists(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [showLists]);

  useEffect(() => {
    if (isNotEmpty(clientName) && isNotEmpty(selectedItem)) {
      setUploadButtonDisabled(false);
    } else {
      setUploadButtonDisabled(true);
    }
  }, [clientName, selectedItem]);
  return (
    <div
      className={`fixed   z-50 top-0 right-0 left-0 bottom-0 flex items-center justify-center  `}
      style={{
        backgroundColor: "rgba(0,0,0,0.3)",
      }}
    >
      <div className="bg-white md:w-[50%] w-[80%] h-[60%] flex flex-col rounded-md p-4 ">
        <div
          onClick={showUploadModalHandler}
          className="w-full  flex justify-end cursor-pointer"
        >
          <img className="" src={Close} alt="" />
        </div>
        <div className="flex flex-col  items-center   h-full px-6">
          <h1 className="font-bold text-lg">Complete Your Upload</h1>
          <p className="text-[#666666] md:text-md text-sm mt-2 flex justify-center items-center w-full ">
            Fill in the details below to complete your upload
          </p>
          <div className="w-full flex flex-col justify-between h-full">
            <div ref={dropdownListRef} className="w-full mt-6">
              <Dropdown
                selectedItemHandler={selectedItemHandler}
                setShowLists={setShowLists}
                showLists={showLists}
                selectedItem={selectedItem}
              />
            </div>
            <div className="w-full mt-6">
              <input
                type="text"
                className="bg-[#F2F2F2] p-2 text-black placeholder-[#B2B2B2] px-4 outline-none w-full"
                placeholder="Enter client name"
                onChange={clientNameHandler}
                value={clientName}
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                onClick={uploadNotesHandler}
                disabled={uploadButtonDisabled}
                className={`${
                  uploadButtonDisabled
                    ? "cursor-not-allowed  bg-[#B2B2B2]"
                    : "bg-gradient-to-r from-[#731054] to-[#DE0D6F]"
                } md:w-[35%]  w-[50%] rounded-md text-white p-2 `}
              >
                Finish Upload
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadComponent;
