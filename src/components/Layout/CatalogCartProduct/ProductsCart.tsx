import React from 'react'
import { IGProduct } from '../../../helpers/Model/GetServer/model.products'
import { ButtonCard } from './Button/ButtonCard/ButtonCard'
import { CountView } from './CountView'
import { ArticleBadges, QuantityBadges, SalesBadges } from './Badges/Badges'
import { FadeLoader } from 'react-spinners'
import { ProductCartGrid } from './Grid/ProductCartGrid'
import { motion } from 'framer-motion'
import { variants } from '../UI/animation/category'
import { ImgProductCart } from './ImgProductCart'
import { TitleProductCart } from './TitleProductCart'
import { translate } from './helper/translate.url'

interface IProductProps {
  data: IGProduct
  isLoading: boolean
  gridStore?: boolean
  nameCategory?: string | undefined
}

export const ProductsCart = ({
  data,
  isLoading,
  gridStore,
  nameCategory,
}: IProductProps) => {
  
  // Транслит URL ссылок
  // const translate = tr(data.title).toLowerCase().replace(/\W/g, '-')
  //Ссылка для перехода в карточку товара
  const URL = `/product/${nameCategory}/${translate(data.title)}/${data.id}`

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
    return <ProductCartGrid data={data} URL={URL} />
  }
  //________________________________________
  // Формат сетки по умолчанию плитка
  //________________________________________

  return (
    <motion.div variants={variants} initial='hidden' animate='visible'>
      <div
        className='flex flex-col items-center cursor-pointer border +
     border-gray-200 px-4 py-2 rounded-lg shadow-lg bg-white box-border h-[380px] w-[335px] '
      >
        <div className=' flex w-full justify-between'>
          <ArticleBadges data={data} />
          <QuantityBadges data={data} />
        </div>

        {/* Изображение товара  */}

        <ImgProductCart data={data} URL={URL} />

        <TitleProductCart data={data} URL={URL} />

        {/* Счетчики отзывов  */}

        <CountView key={data.id} data={data} gridStore={gridStore} URL={URL} />

        <SalesBadges data={data} />

        {/* Блок с ценами и кнопка */}
        <div className='flex gap-16 items-center mt-auto mb-0 '>
          <div className='flex gap-2'>
            <p className=' font-bold text-xl'>
              {Math.round(data.price * (data.discount / 11)).toLocaleString(
                'ru',
              )}{' '}
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
    </motion.div>
  )
}
