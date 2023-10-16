"use client";

import React from "react";
import { RecoilRoot } from "recoil";
import PlansButton from "./PlansButton";
import PricingCards from "../landing-layouts/PricingCards";

const PricingOptions = () => {
  return (
    <div className="py-20 flex w-full items-center flex-col justify-evenly" id="plans">
      <RecoilRoot>
        {/* pricing */}
        <h2 className="text-[1.2rem] text-center font-semibold">
          PRICING OPTIONS
        </h2>
        {/* buttons */}
        <PlansButton />
        {/* pricing cards */}
        <PricingCards />
        {/* footer */}
        <footer className="mx-auto pt-10">
          <h4 className="text-[1.2rem]">
            Start a{" "}
            <span className="text-highlight text-[1.3rem]">FREE TRAIL</span>{" "}
            without any upfront payment for any plans by contacting with us.
          </h4>
        </footer>
      </RecoilRoot>
    </div>
  );
};

export default PricingOptions;
