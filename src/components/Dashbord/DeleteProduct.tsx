import React, {useState} from "react";
import axios from "axios";
import {delAllProduct, delProduct} from "./post.del.req";

export const DeleteProduct = () => {
    const [status, setStatus] = useState()
    const [id, setId] = useState<string>()

    const handleDel = (id: number) => {
        delProduct(id)
            .then((result: any) => {
                const {data} = result
                setStatus(data.status)
            })
    }

    const handleDelAll = () => {
        delAllProduct()
            .then((result: any) => {
                const {data} = result
                setStatus(data.status)
            })
    }


    return (
        <div className={"mt-10"}>
            <div>
                <input maxLength={4}
                       type="number"
                       placeholder={"ID"}
                       className={"p-4 border-2 "}
                       onChange={e => setId(e.target.value)}/>
                <button
                    className={"px-2 py-2  bg-blue-300 ml-5 rounded"}
                    onClick={() => handleDel(Number(id))}>
                    Удалить товар
                </button>
                <button onClick={handleDelAll}
                        className={"px-2 py-2  bg-red-600 ml-5 rounded"}>
                    Удалить все товары
                </button>
            </div>
            <div className={"flex mb-5"}>
                <p>{status}</p>

            </div>
        </div>
    )

}

