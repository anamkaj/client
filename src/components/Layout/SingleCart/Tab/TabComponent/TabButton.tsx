import React from 'react'

type Props = {
  setActiveTab: React.Dispatch<React.SetStateAction<number>>
  scroll: () => void
}

export const CharacteristicsBtn = ({ setActiveTab, scroll }: Props) => {
  return (
    <div onClick={() => scroll()}>
      <button
        className={
          ' text-gray-600 border-t-2  text-sm font-bold p-4 rounded-l-lg bg-white shadow-indigo-100 shadow-md hover:shadow-indigo-300 hover:scale-101 duration-900'
        }
        onClick={() => setActiveTab(2)}
      >
        Все характеристики
      </button>
    </div>
  )
}

// export const ServicesBtn = ({ setActiveTab }: Props) => {
//   return (
//     <div>
//       <Scrollchor to={''}>
//         <button
//           className={
//             ' text-gray-600 border-t-2  text-sm font-bold p-4  bg-white shadow-indigo-100 shadow-md hover:shadow-indigo-300 hover:scale-101 duration-800 '
//           }
//           onClick={() => setActiveTab(4)}
//         >
//           Все услуги
//         </button>
//       </Scrollchor>
//     </div>
//   )
// }

export const ReviewsBtn = ({ setActiveTab, scroll }: Props) => {
  return (
    <div onClick={() => scroll()}>
      <button
        className={
          ' text-gray-600 border-t-2 text-sm font-bold p-4 rounded-r-lg bg-white shadow-indigo-100 shadow-md hover:shadow-indigo-300 hover:scale-101 duration-800 '
        }
        onClick={() => setActiveTab(3)}
      >
        Отзывы
      </button>
    </div>
  )
}

export const DescriptionBtn = ({ setActiveTab, scroll }: Props) => {
  return (
    <div onClick={() => scroll()}>
      <button
        className={
          ' text-gray-600 border-t-2 text-sm font-bold p-4  bg-white shadow-indigo-100 shadow-md hover:shadow-indigo-300 hover:scale-101 duration-800 '
        }
        onClick={() => setActiveTab(1)}
      >
        Описание товара
      </button>
    </div>
  )
}
