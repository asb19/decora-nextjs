import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import {useState} from 'react'
import Stripe from 'stripe'
import _ from 'lodash'
import CartContext, { CartContextProps } from 'components/context/CartContext'
import WishListContext, { WishlistContextProps } from 'components/context/WishlistContext'

import {SessionProvider} from 'next-auth/react'
import { Session } from 'next-auth'

export type MyProduct = {
  product: Stripe.Price,
  count: number
}

interface MyAppProps extends AppProps {
  session: Session;
}

export default function App({ Component, pageProps, session }: MyAppProps) {
  const [items, setItems] = useState<MyProduct[]>([])
  const [itemsW, setWishlist] = useState<Stripe.Price[]>([])
  const [sum, setTotal] = useState<number>(0)
  const remove = (id: string) => {

    let i = items.find(x => x.product.id==id)
    let myItems = items
    if(i && i.count>=1) {
      i.count--
      if(!i.count) {
        myItems = items.filter(x => x.product.id!=i?.product.id)
      }
    }
    // let i = _.reject(items, (x)=>  x.id==id)
    setItems([...myItems])
    setTotal(sum- Number(i?.product.unit_amount ? i?.product.unit_amount/100 : 0))
  }

  const removeW = (id: string) => {

    
    let i = _.reject(itemsW, (x)=>  x.id==id)
    setWishlist(i)
  }

  const add = async (p: Stripe.Price) => {
    // let i = _.union(items, [p])
    
    let i = items.find(x => x.product.id==p.id)
    if(!i) {
      items.push({count: 1, product: p})
    }
    else {
      i.count++
    }
    console.log("ADDITION",items)
     setItems([...items])
     setTotal(sum+ Number(p.unit_amount ? p.unit_amount/100 : 0))
  }

  const addW = async (p: Stripe.Price) => {
    let i = _.union(itemsW, [p])
    
    
     setWishlist(i)
  }



  const cardContext: CartContextProps = {
    items,
    remove,
    add,
    sum,
    itemsW,
    removeW,
    addW
  }


  return(
    <SessionProvider session={session}>
  <CartContext.Provider value={cardContext} >
  <Component {...pageProps} />



  </CartContext.Provider>
  </SessionProvider>
  )
  
}
