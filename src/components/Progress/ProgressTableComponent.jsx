import React from "react";
import Trash from "../../assets/Trash.svg";
import ProgressBar from "./ProgressBar";

const ProgressTableComponent = ({ Notes, removeNoteHandler }) => {
  return (
    <div className="mt-[1%]">
      <table className="w-full text-sm text-left table-fixed   ">
        <thead className=" capitalize     ">
          <tr className="  ">
            <th className="py-3">Client</th>
            <th className="py-3">Type</th>
            <th className="py-3">ETA</th>
            <th className="py-3"></th>
          </tr>
        </thead>
        <tbody>
          {Notes.length > 0 &&
            Notes.map((note) => (
              <tr
                key={note.id}
                className="border-2 shadow-md   border-[#E5E5E5] rounded-md "
              >
                <td className="px-4 py-4">{note.clientName}</td>
                <td className=" py-4">{note.noteType}</td>
                <td className=" py-4">
                  <ProgressBar
                    note={note}
                    removeNoteHandler={removeNoteHandler}
                  />
                </td>
                <td
                  className=" py-4 px-4 cursor-pointer float-right"
                  onClick={removeNoteHandler.bind(null, note.id)}
                >
                  <img src={Trash} alt="" />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProgressTableComponent;
