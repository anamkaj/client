import React, {useState} from 'react'
import {IProps, sendProduct} from "./post.del.req";


export const FormAddProductDb = () => {
    const [status, setStatus] = useState()
    const [data, setData] = useState<IProps>({
        title: "",
        img: "",
        desc: "",
        price: 0,
        specific: []
    })
    const specificEdit = (e: string) => {
        const edit = e.split(",")
        setData(data => {
            return {...data, specific: edit}
        })
        console.log(edit)
        console.log(data)
    }


    const handleSubmit = (e: any) => {
        e.preventDefault();
        sendProduct(data)
            .then((result: any) => {
                const {data} = result
                setStatus(data.status)
            })
    };


    // Отправка на сервер нового товара

    return (
        <div className={""}>
            <form onSubmit={handleSubmit} className={"flex flex-col w-1/2" +
                " gap-6 mt-5 "}>
                <input minLength={8}
                       required={true}
                       type="text"
                       name={"title"}
                       onChange={e =>
                           setData(data => {
                               return {...data, title: e.target.value}
                           })
                       }
                       placeholder={"title"}
                       className={"px-4" +
                           " py-2" +
                           " bg-gray-300"}/>
                <input type="text"
                       required={true}
                       name={"img"}
                       placeholder={"img"}
                       className={"px-4 py-2 bg-gray-300"}
                       onChange={e => setData(data => {
                           return {...data, img: e.target.value}
                       })}
                />

                <input type="text"
                       required={true}
                       name={"description"}
                       placeholder={"description"}
                       className={"px-4 py-2 bg-gray-300"}
                       onChange={e => setData(data => {
                           return {...data, desc: e.target.value}
                       })}

                />

                <input type="number"
                       required={true}
                       name={"price"}
                       placeholder={"2"}
                       className={"px-4 py-2 bg-gray-300"}
                       onChange={e => setData(data => {
                           return {...data, price: Number(e.target.value)}
                       })}

                /><input type="text"
                         required={true}
                         name={"specific"}
                         placeholder={"Характеристики товара"}
                         className={"px-4 py-2 bg-gray-300"}
                         onChange={(e) => specificEdit(e.target.value.trim().replaceAll("\t", ""))}

            />


                <button className={"px-4 py-2 bg-blue-500 my-5"}> Get JSON</button>
            </form>
            <div>
                <p>{status}</p>
            </div>
        </div>

    )
}
