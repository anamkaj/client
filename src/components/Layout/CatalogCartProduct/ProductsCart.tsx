import React from 'react'
import { IGProduct } from '../../../helpers/Model/GetServer/model.products'
import { ButtonCard } from './Button/ButtonCard/ButtonCard'
import { Link } from 'react-router-dom'
import { CountView } from './CountView'
import { ArticleBadges, QuantityBadges, SalesBadges } from './Badges/Badges'
import { FadeLoader } from 'react-spinners'
import { ProductCartGrid } from './Grid/ProductCartGrid'

export interface IProductProps {
  data: IGProduct
  isLoading: boolean
  gridStore: boolean
}

export const ProductsCart = ({ data, isLoading, gridStore }: IProductProps) => {
  if (isLoading) {
    return (
      <div className=' container mx-auto '>
        <div className=' flex justify-center items-center'>
          <FadeLoader color='#757575' />
        </div>
      </div>
    )
  }

  // _____________________________________
  // Горизонтальная сетка
  // _____________________________________
  if (!gridStore) {
    return <ProductCartGrid data={data} isLoading={isLoading} gridStore={gridStore} />
  }
  //________________________________________
  // Формат сетки по умолчанию квадратики
  //________________________________________

  return (
    <div
      className='flex flex-col items-center cursor-pointer border +
     border-gray-200 px-4 py-2  rounded-lg shadow-lg bg-white box-border h-[350px] w-[300px] p-4 '
    >
      <QuantityBadges data={data} />
      <ArticleBadges data={data} />
      <Link
        to={`/product/:category/${data.id}`}
        className='mb-4 w-[150px] h-[150px] '
      >
        <img
          className='block object-cover object-center w-full h-full rounded-lg'
          src={`http://localhost:4000/img/${data.imgFolder}/${data.imgLink[0]}`}
          alt={data.altImg}
        />
      </Link>
      <Link
        to={`/product/:category/${data.id}`}
        className=' flex font-light text-black text-sm text-center mb-2'
      >
        {data.title.length > 100
          ? data.title.slice(0, 100) + '...'
          : data.title}
      </Link>

      {/* Счетчики отзывов  */}

      <CountView key={data.id} data={data} gridStore={gridStore} />

      <SalesBadges data={data} />

      {/* Блок с ценами и кнопка */}
      <div className='flex gap-16 items-center mt-auto mb-0 '>
        <div className='flex gap-2'>
          <p className=' font-bold text-xl'>
            {Math.round(data.price * (data.discount / 11)).toLocaleString('ru')}{' '}
            ₽
          </p>
          <button className=' bg-gray-100 rounded-lg  py-0'>
            <span className={'font-light text-sm mb-2 line-through'}>
              {data.price.toLocaleString('ru')} ₽
            </span>
          </button>
        </div>

        {/*Добавить в корзину*/}
        <ButtonCard key={data.id} data={data} />
      </div>
    </div>
  )
}
