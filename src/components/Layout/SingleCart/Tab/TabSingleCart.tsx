import React from 'react'
import { tab } from './TabComponent/helper/tabName'
import { IGProduct } from '../../../../helpers/Model/GetServer/model.products'
import { TableParamsProduct } from './TabComponent/TableParamsProduct'
import { TabReviews } from './TabComponent/TabReviews/TabReviews'
import { TabReviewsPostForm } from './TabComponent/TabReviews/TabReviewsPostForm'
import { motion } from 'framer-motion'
import { item } from '../../UI/animation/category'
import ReactMarkdown from 'react-markdown'

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

  const description = product[0].descriptionOne.split('. ')

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
      <div id={'tab'} className=' mt-4'>
        {activeTab == 1 && (
          <p>
            {description.map((x, index) => {
              return (
                <div key={index}>
                  <span className=' font-thin text-lg tracking-normal antialiased '>
                    {x.trim()}.
                  </span>
                  <br />
                </div>
              )
            })}
          </p>
        )}
      </div>
      <div id={'tab'} className=' mt-4'>
        {activeTab == 2 && (
          <div>
            <TableParamsProduct product={product} />
          </div>
        )}
      </div>
      <div className=' mt-4'>
        {activeTab == 3 && (
          <motion.div variants={item} initial='hidden' animate='visible'>
            <TabReviewsPostForm product={product} />
            <TabReviews id={product[0].id} />
          </motion.div>
        )}
      </div>
    </div>
  )
}
