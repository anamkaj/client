import { useEffect, useState } from 'react'
import { useAppSelector } from '../../../../../store/Redux/storeHook'
import { addCartStore } from '../../../../../helpers/Model/Store/Redux/type.product'

type PriceProp = {
  data: addCartStore[]
}

export const useCalcPriceProduct = ({ data }: PriceProp) => {
  const totalCart = useAppSelector((state) => state.cartReducer.total)

  const [totalCartPrice, setTotalCartPrice] = useState<number>(0)
  const [totalSale, setTotalSale] = useState<number>(0)

  console.log(totalCartPrice, totalSale)

  useEffect(() => {
    setTotalCartPrice(totalCart)
  }, [totalCart])

  useEffect(() => {
    const totalSale = data.reduce((prev: number, curr: addCartStore) => {
      return (curr.price / curr.sale) * curr.totalCount
    }, 0)

    setTotalSale(totalSale)
  }, [totalCart])

  return { totalCartPrice, totalSale }
}
