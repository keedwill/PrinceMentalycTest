import Caret from "../assets/Caret.svg";

const Dropdown = ({
  selectedItemHandler,
  setShowLists,
  showLists,
  selectedItem,
}) => {
  const Notes = [
    "Progress note - 80 left",
    "Soap note - 80 left",
    "EMDR note- 80 left",
    "Couples therapy note - 80 left",
    "Family therapy note - 80 left",
  ];

  return (
    <div className=" relative  bg-[#F2F2F2] w-full  py-1">
      <button
        onClick={() => {
          setShowLists(() => !showLists);
        }}
        className="flex items-center justify-between  w-full px-4  gap-6 py-1  leading-6 "
      >
        <div
          className={`${
            selectedItem != "" ? "text-black" : "text-[#B2B2B2]"
          } capitalize`}
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {selectedItem != "" ? selectedItem : "Select note type"}
        </div>
        <span>
          <img
            className={`${showLists ? "rotate-180" : ""} transition-all`}
            src={Caret}
            width={15}
            height={10}
          />
        </span>
      </button>
      {showLists && (
        <div className="absolute  top-10 shadow-md    bg-white w-full  flex flex-col z-20  rounded-md">
          {Notes?.map((list, index) => {
            return (
              <div
                key={index}
                className="hover:bg-[#F2F2F2] cursor-pointer px-3 py-2"
                onClick={selectedItemHandler.bind(null, list)}
              >
                {list}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
