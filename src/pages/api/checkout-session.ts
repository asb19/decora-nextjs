// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'
import { MyProduct } from '../_app'

type Data = {
  customer?: any
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
    if(req.method!='GET') {
        res.status(405).json({message: "GET method is required"})
    }
    try{
        const id = req.query.session_id as string
        
        const stripe = new Stripe("sk_test_51MctQ9SIf6CxNJedgbhfOyU9LRuga6D4Q2OheuUV4Q7JiZx6fcoBmvcJ5zmutt8IHB6C38hw7jsMxbbTGNvUA9N400f7bT3Aqy" || "", {apiVersion: "2022-11-15"})
        const session= await stripe.checkout.sessions.retrieve(id);
        

        res.status(200).json({customer: session.customer_details});

        
        

    }
    catch(err: any) {
  res.status(400).json({ message: err.message })
    }
}