import React from 'react'

import { Link } from 'react-router-dom'

export const Services = () => {
  const servicesImg2 = 'http://localhost:4000/img/servicesImg/1284.jpg'
  const servicesImg3 =
    'http://localhost:4000/img/servicesImg/subbanner-fdas-page.png'

  const listService = [
    {
      id: 1,
      img: '',
      description:
        'Проектирование охранно-пожарной сигнализации, систем пожаротушения и оповещения о пожаре',
      url: 'proektirovanie_ohrannyh_sistem',
    },
    {
      id: 2,
      img: '',
      description: 'Установка охранно-пожарной сигнализации',
      url: '/ustanovka_ohranno_pozharnoj_signalizacii',
    },
    {
      id: 3,
      img: '',
      description:
        'Обслуживание охранно-пожарной сигнализации, систем пожаротушения и оповещения о пожаре',
      url: '/obsluzhivanie ohranno_pozharnoj_signalizacii',
    },
    {
      id: 4,
      img: '',
      description: 'Видеонаблюдение для офиса',
      url: '/videonablyudenie_dlya_ofisa',
    },
    {
      id: 5,
      img: '',
      description: 'Системы видеонаблюдения для квартиры',
      url: '/sistemy_videonablyudeniya_dlya_kvartiry',
    },
    {
      id: 6,
      img: '',
      description: 'Видеонаблюдение для магазина',
      url: '/videonablyudenie_dlya_magazina',
    },
  ]

  return (
    <div className=' '>
      <div className=' mt-10 mb-4 '>
        <h2 className='font-bold text-2xl text-slate-600 uppercase'>
          {' '}
          Услуги кампании{' '}
        </h2>
      </div>
      <div className=' grid grid-cols-3 gap-4 '>
        {listService.map((x, index) => (
          <div
            key={index}
            className=' border h-[180px] shadow-md p-4 rounded-md flex flex-col justify-center bg-gradient-to-r from-rose-50 via-fuchsia-50 to-indigo-50'
          >
            <div className=' h-[100px]'>
              <p className=' font-semibold uppercase'>{x.description}</p>
            </div>
            <div className=' mb-2 mt-8'>
              <Link
                className=' uppercase font-light text-white bg-gradient-to-r from-fuchsia-600 to-purple-600  rounded-full text-sm px-5 py-2.5 text-center mb-2  '
                to={`post/${x.id}`}
              >
                Узнать подробнее...
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
