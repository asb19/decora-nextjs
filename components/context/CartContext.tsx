import { MyProduct } from '@/pages/_app'
import { createContext } from 'react'
import Stripe from 'stripe'

export type CartContextProps = {
    items: MyProduct[],
    itemsW: Stripe.Price[],
    remove: (id: string) => void,
    removeW: (id: string) => void,
    add: (p: Stripe.Price) => void,
    addW: (p: Stripe.Price) => void,
    sum: number
}

let cartContextProps :CartContextProps  = {
    items: [],
    itemsW: [],
    remove: function (id: String): void {
        throw new Error('Function not implemented.')
    },

    add: function (p: Stripe.Price): void {
        throw new Error('Function not implemented.')
    },
    sum: 0,
    removeW: function (id: string): void {
        throw new Error('Function not implemented.')
    },
    addW: function (p: Stripe.Price): void {
        throw new Error('Function not implemented.')
    }
}

const CartContext = createContext(cartContextProps)

export default CartContext