import React from "react";

const Step = ({ step, setStep }) => {
  //   const [step, setStep] = useState(0);
  const incHandle = () => {
    setStep(step + 1);
  };

  const decHandle = () => {
    setStep(step > 0 ? step - 1 : step);
  };
  return (
    <>
      <div className="px-7 py-10 flex justify-center items-center flex-col gap-8  rounded-2xl shadow-xl/30 bg-gray-200">
        <h1 className="font-bold text-4xl">Step : {step}</h1>

        <div className="flex justify-center items-center space-x-4">
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
    </>
  );
};

export default Step;
