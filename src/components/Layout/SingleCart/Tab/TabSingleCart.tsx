import React from 'react'
import { tab } from '../helper/tabName'

type IProps = {
  activeTab: number
  setActiveTab: React.Dispatch<React.SetStateAction<number>>
}

export const TabSingleCart = ({ activeTab, setActiveTab }: IProps) => {
  const styleActive =
    'uppercase text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none' +
    ' text-blue-500 border-b-2 font-medium border-blue-500'
  const styleDisable =
    'uppercase text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none'

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
      <div id={'tab'}>
        {tab.map((e) => {
          return (
            <div key={e.id}>
              <h4>
                Технические характеристики HIWATCH DS-T200 B 2.8 мм 00-00002940
              </h4>
              <p key={e.id}>{activeTab === e.id && e.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
