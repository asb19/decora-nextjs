import React, { FunctionComponent, useContext } from 'react'
import Stripe from 'stripe'
import { getProductDescription, getProductImage, getProductName, getProductPrice } from './computed'
import CartContext from './context/CartContext'
import WishlistContext from './context/WishlistContext'

type WishProps = {
    item: Stripe.Price
}

const WishList: FunctionComponent<WishProps> = ({item}) => {

    const { removeW} = useContext(CartContext)

    const removeWishlist = (id: string) => {
        removeW(id)
    }
  return (
    <li className="flex py-6">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img src={getProductImage(item.product)} alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." className="h-full w-full object-cover object-center"/>
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                              <a href="#">{getProductName(item.product)}</a>
                            </h3>
                            <p className="ml-4">{getProductPrice(item)}</p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">{getProductDescription(item)}</p>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          {/* <p className="text-gray-500">Qty {item.count}</p> */}

                          <div className="flex">
                            <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500" onClick={()=> removeWishlist(item.id)}>Remove</button>
                          </div>
                        </div>
                      </div>
                    </li>
  )
}

export default WishList