import React, { useEffect, useState } from 'react'
import { IArrProduct } from '../../helpers/Model/GetServer/model.products'
import { getAllProduct } from './post.del.req'
import { BiChevronsDown, BiChevronsUp } from 'react-icons/bi'

export const AllProduct = () => {
  const [data, setData] = useState<IArrProduct[]>()
  const [hiddenBtn, setHiddenBtn] = useState({ id: 0, visible: false })

  useEffect(() => {
    getAllProduct().then((result: any) => {
      const { data, status } = result
      setData(data)
    })
  }, [])

  console.log(data)

  if (!data) {
    return <h1>Error</h1>
  }

  return (
    <div className={'mt-10'}>
      <table>
        <thead className="border-b bg-gray-800">
          <tr>
            <th scope="col" className="text-sm font-medium text-white px-6 py-4">
              id
            </th>
            <th scope="col" className="text-sm font-medium text-white px-6 py-4">
              Название товара
            </th>
            <th scope="col" className="text-sm font-medium text-white px-6 py-4">
              Ссылка на изображение
            </th>

            <th scope="col" className="text-sm font-medium text-white px-6 py-4">
              Описание
            </th>
            <th scope="col" className="text-sm font-medium text-white px-6 py-4">
              Стоимость
            </th>
            <th scope="col" className="text-sm font-medium text-white px-6 py-4">
              Параметры
            </th>
          </tr>
        </thead>
        {data.map((data) => {
          return (
            <tbody>
              <tr key={data.id} className="bg-white border-b">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {data.id}
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {data.title}
                </td>
                <td className="text-sm flex  text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {data.imgLink.map((e) => {
                    return (
                      <img alt={data.altImg} className=' w-1/4' src={`http://46.19.67.106:3005/static/${e}`} />
                    )
                  })}
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 ">
                  {data.descriptionOne.length > 40
                    ? data.descriptionOne.slice(0, 40)
                    : data.descriptionOne}
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 ">{data.price} .руб</td>
                <td className="text-sm  text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  <ul key={data.id}>
                    <button
                      onClick={() => setHiddenBtn({ id: data.id, visible: true })}
                      className="px-4 py-2 bg-red-600"
                    >
                      <BiChevronsDown />
                    </button>
                    <button
                      onClick={() => setHiddenBtn({ id: 0, visible: false })}
                      className="px-4 py-2 bg-slate-300"
                    >
                      <BiChevronsUp />
                    </button>
                    {data.paramsProduct.map((list) => {
                      return (
                        <li className={hiddenBtn.id === data.id ? 'block' : 'hidden'}>
                          {`${Object.keys(list)} : ${Object.values(list)}`}
                        </li>
                      )
                    })}
                  </ul>
                </td>
              </tr>
            </tbody>
          )
        })}
      </table>
    </div>
  )
}
