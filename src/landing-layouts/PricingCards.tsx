import React from "react";
import PricingCard from "../components/PricingCard";
import { useRecoilValue } from "recoil";
import { standarPlanState } from "@/atoms/standardPlan";
import BussinessCard from "./BussinessCard";

const PricingCards = () => {
  const standardPlan = useRecoilValue(standarPlanState);
  return (
    <section className="flex sm:flex-row flex-col py-12 gap-8 xl:gap-20 items-center">
      {standardPlan ? (
        <>
          <PricingCard title="Standard" price={199} />
          <PricingCard title="MostPopular" price={499} />
          <PricingCard title="Custom" price={"Single or Monthly Services"} />
        </>
      ) : (
        <>
          <BussinessCard title="Gold" price={1899} />
        </>
      )}
    </section>
  );
};

export default PricingCards;
