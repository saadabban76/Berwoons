import Reveal from "@/utils/Reveal";
import Link from "next/link";
import React from "react";

interface CardProps {
  title: "Standard" | "MostPopular" | "Custom";
  price: number | string;
}

const PricingCard = (props: CardProps) => {
  const services = new Map<string, number>();

  if (props.title === "Standard") {
    services.set("long", 1);
    services.set("short", 1);
    services.set("thumbnail", 1);
  } else {
    services.set("long", 3);
    services.set("short", 5);
    services.set("thumbnail", 3);
    services.set("posts", 2);
  }

  return (
    <div
      className={`relative w-full ${
        props.title === "MostPopular" && "h-[580px] w-[120%]"
      } min-h-[490px] max-w-sm p-4 border border-gray-200 rounded-lg 
    shadow sm:px-8 sm:py-8 bg-white dark:border-gray-700
    hover:scale-105 transition-all ease-in-out`}
    >
      <h5 className="mb-4 text-xl font-semibold text-black">
        {props.title} plan
      </h5>
      <div className="flex items-baseline text-gray-900">
        <span className="text-3xl font-semibold">
          {" "}
          {typeof props.price === "number" && "$"}
        </span>
        <span className="text-5xl font-extrabold tracking-tight">
          {typeof props.price === "number" && props.price}
        </span>
        <span className="ml-1 text-xl font-normal text-gray-600">
          {" "}
          {typeof props.price === "number" ? "/montly" : props.price}
        </span>
      </div>
      <Reveal width="fit-content" showHighlight="white">
        <ul role="list" className="space-y-5 my-7">
          <li className="flex space-x-3 items-center">
            <svg
              className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              {props.title === "Custom"
                ? "Website Creation"
                : `Editing ${services.get("long")} Long Video`}
            </span>
          </li>
          <li className="flex space-x-3">
            <svg
              className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              {props.title === "Custom"
                ? "Merchandise Design"
                : `Creating ${services.get("short")} Short Video`}
            </span>
          </li>
          <li className="flex space-x-3">
            <svg
              className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              {props.title === "Custom"
                ? "3D Design"
                : `Creating ${services.get("thumbnail")} Thumbnail`}
            </span>
          </li>
          <li
            className={`${
              props.title === "MostPopular" || props.title === "Custom"
                ? "flex space-x-3"
                : "hidden"
            }`}
          >
            <svg
              className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              {(props.title === "MostPopular" || props.title === "Custom") &&
                `24 x 7 phone & email support`}
            </span>
          </li>
          <li className="flex space-x-3">
            <svg
              className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              {props.title === "Custom"
                ? "and more..."
                : `Creating ${services.get("posts")} Graphics Posts`}
            </span>
          </li>
          <li
            className={`${props.title === "Standard" ? "flex" : "hidden"}
         space-x-3 line-through decoration-gray-500`}
          >
            <svg
              className="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500">
              {props.title === "Standard" && "Creating Graphical Posts"}
            </span>
          </li>

          <li
            className={`${
              props.title === "Standard" || props.title === "MostPopular"
                ? "flex"
                : "hidden"
            }
         space-x-3 line-through decoration-gray-500`}
          >
            <svg
              className="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500">
              {(props.title === "Standard" || props.title === "MostPopular") &&
                "Web Developing"}
            </span>
          </li>
          {/* <li className="flex space-x-3 line-through decoration-gray-500">
          <svg
            className="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
          <span className="text-base font-normal leading-tight text-gray-500">
            Complete documentation
          </span>
        </li> */}
          <li
            className={`${props.title === "Standard" ? "flex" : "invisible"}
         space-x-3 line-through decoration-gray-500`}
          >
            <svg
              className="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500">
              {props.title == "Standard" && "24×7 phone & email support"}
            </span>
          </li>
        </ul>
      </Reveal>
      <Link
        // href="/plans/[slug]"
        href={`/plans/${props.title}`}
        className="absolute left-10 -bottom-5 text-black bg-highlight 
        shadow-2xl hover:shadow-xl  hover:translate-y-1 transition-all ease-in-out
         focus:ring-4 shadow-black focus:outline-none focus:ring-blue-900 font-semibold rounded-lg 
         text-sm px-2 py-2.5 inline-flex justify-center w-3/4 text-center"
      >
        Choose plan
      </Link>
    </div>
  );
};

export default PricingCard;
