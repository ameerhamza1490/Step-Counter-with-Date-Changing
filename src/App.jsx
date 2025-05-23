import React, { useState } from "react";
import Step from "./Components/Step";
import Counter from "./Components/Counter";
import "./App.css";

const App = () => {
  const [step, setStep] = useState(0);
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="flex justify-center flex-col items-center bg-white rounded-2xl shadow-xl/30  p-10 gap-10">
        <Step step={step} setStep={setStep} />
        <Counter step={step} />
      </div>
    </div>
  );
  F;
};

export default App;
