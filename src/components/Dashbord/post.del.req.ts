import React from "react";
import axios from "axios";


export type IProps = {
    title: string | undefined,
    img: string | undefined,
    desc: string | undefined,
    price: number | undefined,
    specific:string[]
}

// Добавление товара
export const sendProduct = async (data: IProps) => {
    try {
        const res = await axios.post("http://localhost:3001/post", data)
        return res
    } catch (e) {
        console.log(e)
    }

}

// Удаление товара
export const delProduct = async (id: number) => {
    try {
        if (id) {
            const res = await axios.delete("http://localhost:3001/post", {data: id})
            return res
        }
    } catch (e) {
        console.log(e)
    }

}

// Все товары
export const getAllProduct = async () => {
    try {
        const res = await axios.get("https://46.19.67.106:8080/api")
        console.log(res)
        return res
    } catch (e) {
        console.log(e)
    }
}

//Удалить все товары

export const delAllProduct = async () => {
    try {
        const res = await axios.delete("http://localhost:3001/cleardb")
        return res
    } catch (e) {
        console.log(e)
    }

}