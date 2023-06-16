import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  


  return (
    <div className=' container mx-auto bg-slate-100 rounded-t-xl p-4 mt-5'>
      <div className=' grid grid-cols-3 justify-center'>
        <div className=' flex flex-col'>
          <h2 className=' font-semibold text-lg '>Контакты</h2>
          <span className=' font-thin'>Задать вопрос или оформить покупку</span>
          <div className=' mt-4'>
            <p className=' font-bold text-xl'>8 (861) 298-34-28</p>
            <p className=' font-bold text-xl'> 8 (900) 268-93-60</p>
          </div>
          <p className=' font-light text-xl mt-4'>
            Напишите нам: info@tmk-v.ru
          </p>
        </div>
        <div>
          <h2 className=' font-semibold text-lg '>Офис обслуживания</h2>
          <span className=' font-thin'>
            Часы работы: по будням с 9:30 до 18:00
          </span>
          <p className=' font-light text-lg'>
            Адрес: г. Краснодар , Ростовское шоссе, 14 / 2
          </p>
        </div>
        <div>
          <h2 className=' font-semibold text-lg '> Правовая информация</h2>
          <div className=' flex flex-col mt-2'>
            <Link
              to={'https://tmk-v.ru/policy/polzovatelskoe-soglashenie'}
              className=' text-slate-800 font-light text-lg'
            >
              Пользовательское соглашение
            </Link>
            <Link
              to={'https://tmk-v.ru/policy/politika-konfidentsialnosti'}
              className=' font-light text-lg'
            >
              Политика конфиденциальности
            </Link>
          </div>
          <p className=' text-slate-400  font-thin text-base mt-4'>
            ООО "Интеграл Протект" ИНН 2311248110 ОГРН 1172375092504
            зарегистрировано 07.11.2017 по юридическому адресу 350072,
            Краснодарский край, город Краснодар, улица Ростовское шоссе, дом
            14/2 литер е, офис 412. Статус организации: действующая.
          </p>
        </div>
      </div>
      <div className=' mt-4'>
        <p>
          © 2006–2023. «ТМК Вектор» системы безопасности и видеонаблюдения в Краснодаре. Все права
          защищены.
        </p>
      </div>
    </div>
  )
}
