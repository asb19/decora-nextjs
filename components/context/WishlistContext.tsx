import { MyProduct } from '@/pages/_app'
import { createContext } from 'react'
import Stripe from 'stripe'

export type WishlistContextProps = {
    itemsW: MyProduct[],
    removeW: (id: string) => void,
    addW: (p: Stripe.Price) => void,
    sum: number
}

let wishlistContextProps :WishlistContextProps  = {
    itemsW: [],
    removeW: function (id: String): void {
        throw new Error('Function not implemented.')
    },
    addW: function (p: Stripe.Price): void {
        throw new Error('Function not implemented.')
    },
    sum: 0
    
}

const WishlistContext = createContext(wishlistContextProps)

export default WishlistContext