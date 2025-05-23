import React, { useState } from "react";

const Counter = ({ step }) => {
  const [counter, setCounter] = useState(0);
  const incHandle = () => {
    setCounter(counter + (step === 0 ? 1 : step));
  };

  const decHandle = () => {
    const effectiveStep = step === 0 ? 1 : step;
    setCounter(counter >= effectiveStep ? counter - effectiveStep : counter);
  };

  const baseDate = new Date();
  const futureDate = new Date(baseDate); // clone original date
  futureDate.setDate(baseDate.getDate() + counter); // add counter days

  const formattedDate = futureDate.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <div className="px-7 py-10 flex justify-center items-center flex-col gap-8  rounded-2xl shadow-xl/30 bg-gray-200">
        <h1 className="font-bold text-4xl">Counter : {counter}</h1>

        <div className="">
          <button
            className="border-2 border-black px-4 py-2 cursor-pointer rounded-2xl  mr-3"
            onClick={decHandle}
          >
            Decrement
          </button>

          <button
            className="border-2 border-black px-4 py-2 cursor-pointer rounded-2xl"
            onClick={incHandle}
          >
            Increment
          </button>
        </div>
      </div>
      <div className="text-2xl"><b>Date: {formattedDate}</b></div>
    </>
  );
};

export default Counter;
