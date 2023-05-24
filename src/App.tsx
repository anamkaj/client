import React from 'react'
import { MainPage } from './page/MainPage'
import { Route, Routes } from 'react-router-dom'
import { Header } from './components/Layout/Header/Header'
import { ShopCardPage } from './page/ShopCardPage'
import { ProductList } from './components/Layout/CatalogCartProduct/ProductList'
import { useAppSelector } from './store/Redux/storeHook'
import { SingleProductCart } from './page/SingleProductCart'
import { Dashboard } from './page/Dashboard'
import { Category } from './page/Category'
import { Footer } from './components/Layout/Footer/Footer'

function App() {
  const addObjLocalStore = useAppSelector((state) => state.cartReducer.cart)
  if (localStorage.length <= 0) {
    localStorage.setItem('countCart', JSON.stringify(addObjLocalStore))
  }

  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<MainPage />}></Route>
        <Route path='company' element={<MainPage />}></Route>
        <Route path='news' element={<MainPage />}></Route>
        <Route path='contact' element={<MainPage />}></Route>
        <Route path='logistic' element={<MainPage />}></Route>
        <Route path='order' element={<ShopCardPage />}></Route>
        <Route path='category'>
          <Route path=':id' element={<Category />}></Route>
          <Route path=':name/:id' element={<Category />}></Route>
        </Route>

        <Route path='product'>
          <Route path=':id' element={<ProductList />}></Route>
        </Route>

        <Route>
          <Route
            path='product/:category/:name/:id'
            element={<SingleProductCart />}
          ></Route>
          <Route
            path='product/:name/:id'
            element={<SingleProductCart />}
          ></Route>
        </Route>
        <Route path='dashboard' element={<Dashboard />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
