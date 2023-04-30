import React from 'react'
import { tab } from '../helper/tabName'
import { IGProduct } from '../../../../helpers/model/model.products'
import { TableParamsProduct } from './TableParamsProduct'
import { TabReviews } from './TabReviews'

type TabProps = {
  activeTab: number
  setActiveTab: React.Dispatch<React.SetStateAction<number>>
  product: IGProduct[]
}

export const TabSingleCart = ({
  activeTab,
  setActiveTab,
  product,
}: TabProps) => {
  const styleActive =
    'uppercase text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none' +
    ' text-blue-500 border-b-2 font-medium border-blue-500'
  const styleDisable =
    'uppercase text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none'
  console.log(activeTab)

  const description = product[0].descriptionOne

  return (
    <div>
      <nav className='flex flex-col sm:flex-row'>
        {tab.map((e) => {
          return (
            <button
              className={activeTab === e.id ? styleActive : styleDisable}
              key={e.id}
              onClick={() => {
                setActiveTab(e.id)
              }}
            >
              {e.title}
            </button>
          )
        })}
      </nav>
      <div id={'tab'}>{activeTab == 1 && description}</div>
      <div id={'tab'}>
        {activeTab == 2 && <TableParamsProduct product={product} />}
      </div>
      <div>{activeTab == 3 && <TabReviews />}</div>
    </div>
  )
}
