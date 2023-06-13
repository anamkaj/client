import React, { useEffect, useState } from 'react'
import { IGProduct } from '../../../../../helpers/Model/GetServer/model.products'
import {
  addToCart,
  removeToCart,
} from '../../../../../store/Redux/Product/cartSlise'
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../store/Redux/storeHook'
import { BsFillCartCheckFill } from 'react-icons/bs'
import { BsCartDash } from 'react-icons/bs'

interface IProductProps {
  data: IGProduct
}

export const ButtonCard = ({ data }: IProductProps) => {
  const checkCart = useAppSelector((state) => state.cartReducer.cart)
  const dispatch = useAppDispatch()
  const checkCartColorButton =
    checkCart.length > 0 ? checkCart.find((e) => e.id === data.id) : undefined

  return (
    <div>
      <div>
        {checkCartColorButton == undefined ? (
          <button
            onClick={() =>
              dispatch(
                addToCart({
                  id: data.id,
                  title: data.title,
                  price: Number(data.price),
                  img: data.imgLink[0],
                  imgFolder: data.imgFolder,
                  totalCount: 1,
                  sale: data.discount,
                }),
              )
            }
          >
            <span>
              <BsFillCartCheckFill className=' w-10 h-10' />
            </span>
          </button>
        ) : (
          <button
            onClick={() =>
              dispatch(
                removeToCart({
                  id: data.id,
                  title: data.title,
                  price: Number(data.price),
                  img: data.imgLink[0],
                  imgFolder: data.imgFolder,
                  totalCount: 1,
                  sale: data.discount,
                }),
              )
            }
          >
            <span>
              <BsCartDash className=' w-10 h-10' />
            </span>
          </button>
        )}
      </div>
    </div>
  )
}
