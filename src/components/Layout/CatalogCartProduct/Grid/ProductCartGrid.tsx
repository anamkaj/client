import React from 'react'
import { Link } from 'react-router-dom'
import { ButtonCard } from '../Button/ButtonCard/ButtonCard'
import { ShortCharacteristics } from './ShortCharacteristics'
import {
  ArticleBadgesGrid,
  QuantityBadgesGrid,
  SalesBadgesGrid,
} from './BadgesGrid'
import { CountViewGrid } from './CountViewGrid'
import { variants } from '../../UI/animation/category'
import { motion } from 'framer-motion'
import { IGProduct } from '../../../../helpers/Model/GetServer/model.products'

interface GridProp {
  data: IGProduct
  URL: string
  
}

export const ProductCartGrid = ({
  data,
  URL
}: GridProp) => {
  return (
    <motion.div variants={variants} initial='hidden' animate='visible'>
      <div
        className='flex border +
     border-gray-200 px-8 py-4 rounded-lg shadow-lg bg-white box-border h-[350px] w-full p-4 items-center '
      >
        <Link
          to={URL}
          className='mb-4 w-[250px] h-[250px] '
        >
          <div className=' flex justify-between gap-4'>
            <QuantityBadgesGrid data={data} />
            <ArticleBadgesGrid data={data} />
          </div>
          <img
            className='block object-cover object-center w-full h-full rounded-lg'
            src={`https://tmk-v.ru:8080/img/${data.imgFolder}/${data.imgLink[0]}`}
            alt={data.altImg}
          />
        </Link>
        <div className=' w-[550px]'>
          <Link
            to={URL}
            className=' flex font-light text-black text-xl mb-2 ml-4'
          >
            {data.title.length > 800
              ? data.title.slice(0, 800) + '...'
              : data.title}
          </Link>
          <ShortCharacteristics data={data} />
          <div className=' flex items-center gap-5'>
            <CountViewGrid key={data.id} data={data} URL={URL} />
            <SalesBadgesGrid data={data} />
          </div>
        </div>

        {/* Блок с ценами и кнопка */}

        <div className='flex gap-16 items-center justify-end mt-auto mb-0'>
          <div className='flex gap-2'>
            <p className=' font-bold text-xl'>
              {Math.round(data.price * (data.discount / 11)).toLocaleString(
                'ru',
              )}{' '}
              ₽
            </p>
            <div className=' bg-gray-100 rounded-lg px-2 py-0'>
              <span className={'font-light text-sm mb-2  line-through'}>
                {data.price.toLocaleString('ru')} ₽
              </span>
            </div>
          </div>

          {/*Добавить в корзину*/}
          <ButtonCard key={data.id} data={data} />
        </div>
      </div>
    </motion.div>
  )
}
