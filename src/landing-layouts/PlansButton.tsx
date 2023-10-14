import { standarPlanState } from "@/atoms/standardPlan";
import React, { useState } from "react";
import { useRecoilState } from "recoil";

const PlansButton = () => {
  const [buttonStatus, setButtonStatus] = useState(false);
  const [, setPlan] = useRecoilState(standarPlanState);
  
return (
    <div className="relative flex py-6 right-16">
      {/* individual */}
      <button
        className={`${
          buttonStatus
            ? "z-10 bg-highlight shadow-2xl shadow-gray-200 border-black border"
            : "bg-white"
        }
          text-black font-semibold border rounded-3xl px-10 py-1 text-center`}
        onClick={() => {
          setButtonStatus(true);
          setPlan(true);
        }}
      >
        Individual
      </button>
      <button
        className={`absolute left-32
            ${
              !buttonStatus
                ? "z-10 bg-highlight shadow-2xl shadow-gray-200 border-black border"
                : "bg-gray-100"
            }
          text-black font-semibold rounded-3xl border px-10 py-1 text-center`}
        onClick={() => {
          setButtonStatus(false);
          setPlan(false);
        }}
      >
        Bussiness
      </button>
    </div>
  );
};

export default PlansButton;
