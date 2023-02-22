// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'
import { MyProduct } from '../_app'

type Data = {
  session?: Stripe.Checkout.Session
  message?: string
}

type LineItem = {
    price: string
    quantity: number
}

type Req = {
    lineItems: LineItem[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    if(req.method!='POST') {
        res.status(405).json({message: "POST method is required"})
    }
    try{
        const body:Req = JSON.parse(req.body)
        const stripe = new Stripe("sk_test_51MctQ9SIf6CxNJedgbhfOyU9LRuga6D4Q2OheuUV4Q7JiZx6fcoBmvcJ5zmutt8IHB6C38hw7jsMxbbTGNvUA9N400f7bT3Aqy" || "", {apiVersion: "2022-11-15"})

        const session = await stripe.checkout.sessions.create({
            success_url: process.env.ENVIRONMENT=='local' ? 'http://localhost:3000/' : 'https://decora.clicksandcracfts.com/' + 'success?session_id={CHECKOUT_SESSION_ID}',
            cancel_url: process.env.ENVIRONMENT=='local' ? 'http://localhost:3000/' : 'https://decora.clicksandcracfts.com/' +'cancel',
            line_items: body.lineItems,
            mode: 'payment'
            
        })
        console.log("SESSION",session)
        

        res.status(201).json({session: session})

    }
    catch(err: any) {
  res.status(400).json({ message: err.message })
    }
}
