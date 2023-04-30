import React, { useEffect, useState } from 'react'
import { CarouselProduct } from '../components/Layout/SingleCart/CaruselProduct'
import { TablePropsProduct } from '../components/Layout/SingleCart/TablePropsProduct'
import { TabSingleCart } from '../components/Layout/SingleCart/Tab/TabSingleCart'
import { LazyLoad } from '../components/Layout/LazyLoad/LazyLoad'
import { HeaderSingleProduct } from '../components/Layout/SingleCart/HeaderSingleProduct'
import {
  CharacteristicsBtn,
  DescriptionBtn,
  ReviewsBtn,
  ServicesBtn,
} from '../components/Layout/SingleCart/Tab/TabButton'
import { CartPrice } from '../components/Layout/SingleCart/AddProductCart/CartPrice'
import { useOneProduct } from '../components/Layout/SingleCart/hook/getOneProduct'
import { useParams } from 'react-router-dom'
import { Crumbs } from '../components/Layout/SingleCart/Crumbs'
import { Model } from '../components/Layout/UI/Model/Model'
import { Popup } from '../components/Layout/UI/Poupup/AddProductToStore/PopupAddStore'
import { FastOrderPopup } from '../components/Layout/UI/Poupup/FastOrder/FastOrderPopup'
import { CallSingleCart } from '../components/Layout/SingleCart/CallingSpecialist'
import { SpecialistCall } from '../components/Layout/UI/Poupup/CallingSpecialist/SpecialistCall'

export const SingleProductCart = () => {
  const { id } = useParams()
  const [activeTab, setActiveTab] = useState(1)
  const { data: product, isLoading } = useOneProduct(Number(id))
  
  //Состаяние модальных окон
  const [active, setActive] = useState(false)
  const [fastOrderModel, setFastOrderModel] = useState(false)
  const [specialist, setSpecialist] = useState(false)
  //_______________________________________________________________________
  //Счетчики количество товаров в popup
  const [countPopupProduct, setCountPopupProduct] = useState(1)
  const [countFastOrderProduct, setCountFastOrderProduct] = useState(1)
  //_______________________________________________________________________
  const titleModel = 'Товар добавлен в корзину'
  const titleFastOrderModel = 'Заявка на покупку товара'
  const titleSpecialistCall = 'Спецификация обьета'

  if (isLoading) {
    return <LazyLoad />
  }

  if (!product) {
    return <span> Error</span>
  }

  return (
    <div className={'container mx-auto mt-10'}>
      <Crumbs id={product[0].categoryId} />
      <h1 className={'font-bold text-2xl mt-5'}>{product[0].title}</h1>
      <div className={'grid grid-cols-[400px_minmax(450px,_1fr)_400px] gap-4'}>
        {/*Артикул и количество отзывов Слайд с фото  */}
        <div>
          <HeaderSingleProduct setActiveTab={setActiveTab} product={product} />
          <CarouselProduct product={product} />
        </div>

        {/*Характеристики*/}

        <div className={' mt-20 '}>
          <h2 className={'font-light'}>Технические характеристики</h2>
          <TablePropsProduct product={product} setActiveTab={setActiveTab} />

          <div className=' flex mt-2 items-center'>
            <CharacteristicsBtn setActiveTab={setActiveTab} />
            <ServicesBtn setActiveTab={setActiveTab} />
            <DescriptionBtn setActiveTab={setActiveTab} />
            <ReviewsBtn setActiveTab={setActiveTab} />
          </div>
        </div>

        {/*Карточка добавления в корзину (справа)*/}
        <div>
          <CartPrice
            product={product}
            setActive={setActive}
            setFastOrderModel={setFastOrderModel}
            setCountPopupProduct={setCountPopupProduct}
            setCountFastOrderProduct={setCountFastOrderProduct}
          />
          <CallSingleCart setSpecialist={setSpecialist} />
        </div>
      </div>

      {/*описание и характеристики TAB*/}
      <div>
        <TabSingleCart
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          product={product}
        />
      </div>

      {/*Модальное окно/ Добавление в корзину */}

      <Model setActive={setActive} active={active} titleModel={titleModel}>
        <Popup
          setActive={setActive}
          product={product}
          countPopupProduct={countPopupProduct}
          setCountPopupProduct={setCountPopupProduct}
        />
      </Model>

      {/*Модальное окно/ Быстрый заказ */}

      <Model
        setActive={setFastOrderModel}
        active={fastOrderModel}
        titleModel={titleFastOrderModel}
      >
        <FastOrderPopup
          setFastOrderModel={setFastOrderModel}
          product={product}
          countFastOrderProduct={countFastOrderProduct}
          setCountFastOrderProduct={setCountFastOrderProduct}
        />
      </Model>

      <Model
        setActive={setSpecialist}
        active={specialist}
        titleModel={titleSpecialistCall}
      >
        <SpecialistCall setSpecialist={setSpecialist} specialist={specialist} />
      </Model>
    </div>
  )
}
