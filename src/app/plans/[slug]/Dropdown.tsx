"use client";

import { useParams } from 'next/navigation';
import { useState } from 'react'



const Dropdown = () => {
    const param = useParams();
    const planslug = String(param.slug);
    const [drop, setDrop] = useState<Boolean>(false);
    const [plan, setPlan] = useState(planslug);

    return (
        <>
            <button id="dropdownDelayButton"
                onClick={() => setDrop(!drop)}
                data-dropdown-toggle="dropdownDelay" data-dropdown-delay="500" data-dropdown-trigger="hover"
                className="text-black hover:text-gray-900 border border-gray-500 
                 rounded-lg w-full text-sm flex justify-between px-5 py-2.5 text-center items-center"
                type="button">{plan} <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" d="m1 1 4 4 4-4" />
                </svg>
            </button>

            <div id="dropdownDelay" className={`z-10 ${drop ? "block" : "hidden"} bg-white divide-y
             divide-gray-100 rounded-lg w-full shadow dark:bg-gray-100`}>
                <ul className="py-2 text-sm text-gray-900 dark:text-gray-900" aria-labelledby="dropdownDelayButton">
                    <li>
                        <a href="#"
                            onClick={() => {
                                setDrop(false)
                                setPlan("Standard Plan")
                            }}
                            className="block px-4 py-2 hover:bg-gray-100
                             dark:hover:bg-gray-600 dark:hover:text-white">Standard Plan</a>
                    </li>
                    <li>
                        <a href="#"
                            onClick={() => {
                                setDrop(false)
                                setPlan("Popular Plan")
                            }}
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600
                             dark:hover:text-white">Popular Plan</a>
                    </li>
                    <li>
                        <a href="#"
                            onClick={() => {
                                setDrop(false)
                                setPlan("Custom Plan")
                            }}
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Custom Plan</a>
                    </li>
                    {/* <li>
                        <a href="#"
                            onClick={() => setDrop(false)}
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                    </li> */}
                </ul>
            </div>
        </>
    )
}

export default Dropdown