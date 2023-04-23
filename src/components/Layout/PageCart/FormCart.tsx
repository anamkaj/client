import * as React from 'react';


export const FormCart = () => {
    return (
        <div className={"w-full flex flex-col rounded-lg border bg-white p-6 md:mt-0"}>
            <div>
                <h2 className={"uppercase text-black font-bold mb-5"}>Контакты для связи</h2>
                <p>Укажите Ваши контактные данные</p>
            </div>
            <div>
                <form className="relative w-full mt-6 space-y-8">
                    <div className="relative">
                        <label className="absolute px-2 ml-2 -mt-3 font-light text-gray-600 bg-white">Имя <span
                            className={"text-sm"}>*</span>
                        </label>
                        <input type="text"
                               className="block w-full px-4 py-3 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                               placeholder="Иван"/>
                    </div>
                    <div className="relative">
                        <label className="absolute px-2 ml-2 -mt-3 font-light text-gray-600 bg-white">Фамилия</label>
                        <input type="text"
                               className="block w-full px-4 py-3 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                               placeholder="Иванович"/>
                    </div>
                    <div className="relative">
                        <label className="absolute px-2 ml-2 -mt-3 font-light text-gray-600 bg-white">Телефон <span
                            className={"text-sm"}>*</span></label>
                        <input type="text"
                               className="block w-full px-4 py-3 mt-2 text-base placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
                               placeholder="8 (999) 999-99-99"/>
                    </div>

                    <div className="flex">
                        <div>
                            <div className="form-check">
                                <input
                                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-red-500 checked:border-red-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                    type="checkbox" value="" id="flexCheckDefault"/>
                                    <label className="form-check-label inline-block text-gray-800 text-sm uppercase"
                                           htmlFor="flexCheckDefault">
                                        Требуется Монтаж
                                    </label>
                            </div>
                        </div>
                    </div>

                </form>
            </div>

        </div>
);
};