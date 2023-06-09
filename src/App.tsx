import React from 'react'
import { MainPage } from './page/MainPage'
import { Route, Routes, ScrollRestoration } from 'react-router-dom'
import { Header } from './components/Layout/Header/Header'
import { ShopCardPage } from './page/ShopCardPage'
import { ProductList } from './components/Layout/CatalogCartProduct/ProductList'
import { useAppSelector } from './store/Redux/storeHook'
import { SingleProductCart } from './page/SingleProductCart'
import { Dashboard } from './page/Dashboard'
import { Category } from './page/Category'
import { Footer } from './components/Layout/Footer/Footer'
import { Post } from './page/Post'
import { UserAgreement } from './components/Layout/Policy/UserAgreement'
import { PrivacyPolicy } from './components/Layout/Policy/PrivacyPolicy'
import { ThankYouPage } from './page/ThankYouPage'
import { useMediaQuery } from 'react-responsive'

function App() {
  const isMobileScreen = useMediaQuery({ query: '(max-width: 480px)' })
  const isMidScreen = useMediaQuery({ query: '(max-width: 1024px)' })
  const addObjLocalStore = useAppSelector((state) => state.cartReducer.cart)
  if (localStorage.length <= 0) {
    localStorage.setItem('countCart', JSON.stringify(addObjLocalStore))
  }

  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<MainPage />}></Route>
        <Route path='order' element={<ShopCardPage />}></Route>
        <Route path='category'>
          <Route
            path=':id'
            element={<Category isMobileScreen={isMobileScreen} />}
          ></Route>
          <Route
            path=':name/:id'
            element={<Category isMobileScreen={isMobileScreen} />}
          ></Route>
        </Route>

        <Route path='product'>
          <Route
            path=':id'
            element={<ProductList isMobileScreen={isMobileScreen} />}
          ></Route>
        </Route>

        <Route>
          <Route
            path='product/:category/:name/:id'
            element={
              <SingleProductCart
                isMobileScreen={isMobileScreen}
                isMidScreen={isMidScreen}
              />
            }
          ></Route>

          {/* Роут перехода в карточку товара не из каталога (отзывы , главная ,
          акции ) */}
          <Route
            path='product/:name/:id'
            element={
              <SingleProductCart
                isMobileScreen={isMobileScreen}
                isMidScreen={isMidScreen}
              />
            }
          ></Route>
        </Route>

        <Route>
          <Route path='post/:id' element={<Post />} />
        </Route>
        <Route>
          <Route
            path='policy/polzovatelskoe-soglashenie'
            element={<UserAgreement />}
          />
          <Route
            path='policy/politika-konfidentsialnosti'
            element={<PrivacyPolicy />}
          />
        </Route>
        {/* <Route path='dashboard' element={<Dashboard />}></Route> */}

        <Route path='thanks' element={<ThankYouPage />}></Route>
      </Routes>

      <Footer />
    </>
  )
}

export default App
