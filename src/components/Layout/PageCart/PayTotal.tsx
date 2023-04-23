import React from 'react';
import {FormCart} from "./FormCart";
import {useAppSelector} from "../../../store/storeHook";


export const PayTotal = () => {
    const totalCart = useAppSelector((state) => state.cartReducer.total)
    const totalCartLength = useAppSelector((state) => state.cartReducer.cart)
    let totalStore = localStorage.getItem("totalCart" || "")
    if (totalStore == null) {
        totalStore = "0"
    }

    return (
        <div className="w-full h-1/2 flex flex-col rounded-lg border bg-white p-6 shadow-md w-screen md:w-4/5">
            <FormCart/>
            <div>
                <h2 className={"uppercase text-black font-bold mb-5 mt-5"}>Ваша корзина</h2>
            </div>
            <div className="mb-2 flex justify-between">
                <p className="text-gray-700">Товары ({totalCartLength.length})</p>
                <p className="text-gray-700">Итого: {totalStore ? Math.trunc(parseInt(totalStore)) : totalCart.toFixed(2)} ₽</p>
            </div>
            <div className="flex justify-between">
                <p className="text-gray-700">Скидка</p>
                <p className="text-gray-700">{totalStore ? Math.trunc(parseInt(totalStore) * 0.10) : Math.trunc(totalCart * 0.10)} ₽</p>

            </div>

            <hr className="my-4"/>
            <div className="flex justify-between">
                <p className="text-lg font-bold">Общая стоимость</p>
                <div className="">
                    <p className="mb-1 text-lg font-bold">{totalStore ? Math.trunc(parseInt(totalStore) * 0.90) : Math.trunc(totalCart * 0.90)}.00
                        ₽</p>
                    <p className="text-sm text-gray-700">НДС</p>
                </div>
            </div>
            <button
                className="mt-8 rounded-md bg-blue-500 py-2 px-4 font-medium text-blue-50 hover:bg-blue-600 uppercase">Перейти
                к оформлению
            </button>
        </div>

    );
};


