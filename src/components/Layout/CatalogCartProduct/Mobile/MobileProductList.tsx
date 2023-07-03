import React from 'react'
import { IGProduct } from '../../../../helpers/Model/GetServer/model.products'
import { translate } from '../helper/translate.url'
import { FadeLoader } from 'react-spinners'
import { motion } from 'framer-motion'
import { variants } from '../../UI/animation/category'
import { ImgProductCart } from '../ImgProductCart'
import { TitleProductCart } from '../TitleProductCart'
import { ArticleBadges, QuantityBadges, SalesBadges } from '../Badges/Badges'
import { ButtonCard } from '../Button/ButtonCard/ButtonCard'
import { MobileImgProduct } from './MobileImgProduct'
import { Link } from 'react-router-dom'
import { useCountViewInc } from '../hook/count.view.inc'
import { MobileTitleProduct } from './MobileTitleProduct'

interface IProductLsProp {
  data: IGProduct
  isLoading: boolean
  nameCategory?: string | undefined
}

export const MobileProductList = ({
  data,
  isLoading,
  nameCategory,
}: IProductLsProp) => {
  const URL = `/product/${nameCategory}/${translate(data?.title)}/${data?.id}`
  const { countViewInc } = useCountViewInc(data.id)

  if (isLoading) {
    return (
      <div className=' container mx-auto '>
        <div className=' flex justify-center items-center'>
          <FadeLoader color='#757575' />
        </div>
      </div>
    )
  }

  return (
    <motion.div
      variants={variants}
      initial='hidden'
      animate='visible'
      className=' flex flex-wrap'
    >
      <div
        className='flex flex-col items-center cursor-pointer border +
     border-gray-200 px-4 py-2 rounded-lg shadow-lg bg-white box-border h-[330px] w-[187px] '
        onClick={() => countViewInc()}
      >
        <div className=' flex w-full justify-between'>
          <QuantityBadges data={data} />
        </div>

        {/* Изображение товара  */}

        <MobileImgProduct data={data} URL={URL} />

        <MobileTitleProduct data={data} URL={URL}  />

        {/* Счетчики отзывов  */}

        {/* <CountView key={data.id} data={data} gridStore={gridStore} URL={URL} /> */}

        <SalesBadges data={data} />

        {/* Блок с ценами и кнопка */}
        <div className='w-full flex justify-between items-center mt-auto mb-0 '>
          <div className='flex gap-2 flex-col'>
            <div className=' bg-gray-100 rounded-lg  py-0'>
              <span className={'font-light text-sm mb-2 line-through'}>
                {data.price.toLocaleString('ru')} ₽
              </span>
            </div>
            <p className=' font-bold text-sm'>
              {Math.round(data.price * (data.discount / 11)).toLocaleString(
                'ru',
              )}
              ₽
            </p>
          </div>

          {/*Добавить в корзину*/}
          <ButtonCard key={data.id} data={data} />
        </div>
      </div>
    </motion.div>
  )
}
