import React, { useState } from "react";
import "./input.css";
const Dropdown = ({ options, already = "INR", CurrencyChange }) => {
  let [Class, setClass] = useState("hidden");
  function displayoptions() {
    setClass((prevClass) => (prevClass == "hidden" ? "inline" : "hidden"));
  }
  return (
    <>
      <div className="bg flex flex-col">
        <div className="selected rounded">
          <button
            className="w-12 bg-slate-400 transition duration-100 ease-in hover:bg-slate-400 cursor-pointer rounded"
            onClick={() => displayoptions()}
          >
            {already}
          </button>
        </div>
        <div className={`${Class} cursor-pointer bg-slate-400 absolute h-40 overflow-y-scroll sc rounded border-gray-950 border-1`}>
          {options.map((option) => {
            // console.log(option);
            return (
              <div>
                <button
                  onClick={(e) => {
                    CurrencyChange(e.target.innerHTML);
                    displayoptions();
                    console.log(e.target.innerHTML);
                  }}
                  key={option}
                  className="hover:bg-slate-800 w-12 hover:text-white cursor-pointer"
                >
                  {option}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Dropdown;
