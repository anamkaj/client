import React from 'react';
import {FcCustomerSupport} from "react-icons/fc";

export const CallSingleCart = () => {
    return (
        <>
            <div className={"w-3/4 shadow shadow-gray-200"}>
                <div className={"flex flex-wrap items-center bg-gray-200 p-4 rounded-sm "}>
                    <>
                        <p className={"font-light"}>Появились вопросы о товаре?</p>
                        <button
                            className={"bg-white text-xs px-2 py-2 rounded-md mt-5 hover:bg-blue-500 hover:text-white"}>Консультация
                            специалиста
                        </button>
                    </>
                    <span><FcCustomerSupport className={"h-12 w-12 ml-10"}/></span>
                </div>

            </div>
        </>
    );
};
