import Card from 'components/Card'
import Navbar from 'components/NavBar'
import { GetServerSideProps } from 'next'
import React from 'react'
import Stripe from 'stripe'

type Props = {
    prices: Stripe.Price[]



  }


  export const getServerSideProps: GetServerSideProps = async (context) => {
    // const stripe = new Stripe( process.env.STRIPE_SECRET || "", {apiVersion: "2022-11-15" })
    console.log("ENV", process.env.STRIPE_SECRET)
    const stripe = new Stripe("sk_test_51MctQ9SIf6CxNJedgbhfOyU9LRuga6D4Q2OheuUV4Q7JiZx6fcoBmvcJ5zmutt8IHB6C38hw7jsMxbbTGNvUA9N400f7bT3Aqy" || "", {apiVersion: "2022-11-15"})
  
    const response = await stripe.prices.list({
      limit: 10,
      expand: ['data.product']
    })
    console.log(response )
  
    const prices = response.data.filter(x => x.active)
    console.log(prices)
  
    return {
      props: {
        prices
      }
    }
  
  }

const ListItems = ({prices}: Props) => {
    return (
        <>
        <Navbar></Navbar>
      <div className="md:flex flex flex-col">
                  <div className="flex flex-col justify-center">
                      <div className="relative">
                          <img className="hidden sm:block w-fit h-1/6" src="earl-wilcox-pSo0u53FF10-unsplash-big.jpg" alt="sofa" />
                          <img className="sm:hidden w-fit h-1/6" src="earl-wilcox-pSo0u53FF10-unsplash.jpg" alt="sofa" />
                          <div className="absolute sm:bottom-8 bottom-4 pr-10 sm:pr-0 left-4 sm:left-8 flex justify-start items-start">
                              <p className="text-3xl sm:text-4xl font-semibold leading-9 text-black font-serif italic">Sustainable Ceramic Items</p>
                          </div>
                      </div>
                  </div>
                  <div className="mt-10 grid lg:grid-cols-2 gap-x-8 gap-y-8 items-center">
                    {
                      prices.map(item => (
                        <Card item={item} key={item.id}></Card>
                      ))
                    }
                      
                      
                  </div>
                  <div className="flex justify-end items-end mt-12">
                      <div className="flex flex-row items-center justify-center space-x-8">
                          <button className="text-base leading-none text-gray-800 border-b-2 border-transparent focus:outline-none focus:border-gray-800">
                              <p>1</p>
                          </button>
                          <button className="text-base leading-none text-gray-800 border-b-2 border-transparent focus:outline-none focus:border-gray-800">
                              <p>2</p>
                          </button>
                          <button className="text-base leading-none text-gray-800 border-b-2 border-transparent focus:outline-none focus:border-gray-800">
                              <p>3</p>
                          </button>
                          <button className="flex justify-center items-center">
                              <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M9 6L15 12L9 18" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                          </button>
                      </div>
                  </div>
              </div>
              </>
    )
  }

export default ListItems