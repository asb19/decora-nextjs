import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { GetServerSideProps, NextPage } from 'next'

import Stripe from 'stripe'

const inter = Inter({ subsets: ['latin'] })

type Props = {
  prices: Stripe.Price[]
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  // const stripe = new Stripe( process.env.STRIPE_SECRET || "", {apiVersion: "2022-11-15" })
  console.log("ENV", process.env.STRIPE_SECRET)
  const stripe = new Stripe(process.env.STRIPE_SECRET || "", {apiVersion: "2022-11-15"})

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



// export default function Home ({prices} : Props)   {
// //   return (
// //     //
  
// // <div className="mx-auto container px-6 xl:px-0 py-12">
// //             <div className="flex flex-col"> 
// //                 <div className="flex flex-col justify-center">
// //                     <div className="relative">
// //                         <img className="hidden sm:block w-full" src="earl-wilcox-pSo0u53FF10-unsplash.jpg" alt="sofa" />
// //                         <img className="sm:hidden w-full" src="earl-wilcox-pSo0u53FF10-unsplash-big.jpg" alt="sofa" />
// //                         <div className="absolute sm:bottom-8 bottom-4 pr-10 sm:pr-0 left-4 sm:left-8 flex justify-start items-start">
// //                             <p className="text-3xl sm:text-4xl font-semibold leading-9 text-white">Shope Now</p>
// //                         </div>
// //                     </div>
// //                 </div>
// // </div>
// //     {
// //       prices.map(item => (
// //         <div className="container w-screen h-screen flex">
// //   <div className="container mx-auto max-w-sm w-full p-4 sm:w-1/2">
// //     <div className="card flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl">
// //       <div className="prod-title">
// //         <p className="text-2xl uppercase text-gray-900 font-bold">{item.product.name}</p>
// //         <p className="uppercase text-sm text-gray-400">
// //           {item.product.description}
// //         </p>
// //       </div>
// //       <div className="prod-img">
// //         <img src={item.product.images[0]}
// //              className="w-full object-cover object-center" />
// //       </div>
// //       <div className="prod-info grid gap-10">
// //         <div>
// //           <ul className="flex flex-row justify-center items-center">
// //             <li className="mr-4 last:mr-0">
// //               <span
// //                     className="block p-1 border-2 border-gray-500 rounded-full transition ease-in duration-300">
// //                 <a href="#blue" className="block w-6 h-6 bg-blue-900 rounded-full"></a>
// //               </span>
// //             </li>
// //             <li className="mr-4 last:mr-0">
// //               <span
// //                     className="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
// //                 <a href="#yellow" className="block w-6 h-6 bg-yellow-500 rounded-full"></a>
// //               </span>
// //             </li>
// //             <li className="mr-4 last:mr-0">
// //               <span
// //                     className="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
// //                 <a href="#red" className="block w-6 h-6 bg-red-500 rounded-full"></a>
// //               </span>
// //             </li>
// //             <li className="mr-4 last:mr-0">
// //               <span
// //                     className="block p-1 border-2 border-white hover:border-gray-500 rounded-full transition ease-in duration-300">
// //                 <a href="#green" className="block w-6 h-6 bg-green-500 rounded-full"></a>
// //               </span>
// //             </li>
// //           </ul>
// //         </div>
// //         <div className="flex flex-col md:flex-row justify-between items-center text-gray-900">
// //           <p className="font-bold text-xl">{item.unit_amount/100} INR</p>
// //           <button
// //                   className="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">Add
// //             to cart</button>
// //         </div>
// //       </div>
// //     </div>
// //   </div>
// // </div>
// //       ))
// //     }
// //   </div>
// //   )

// }


import React, { useState } from "react";
import "pure-react-carousel/dist/react-carousel.es.css";
import Card from 'components/Card'
import Header from 'components/Header'

export default function Home({prices}: Props) {
    return (
        <div className="mx-auto container px-6 xl:px-0 py-12">
          <Header></Header>
            <div className="flex flex-col">
                <div className="flex flex-col justify-center">
                    <div className="relative">
                        <img className="hidden sm:block w-2/4" src="earl-wilcox-pSo0u53FF10-unsplash-big.jpg" alt="sofa" />
                        <img className="sm:hidden w-1/4" src="earl-wilcox-pSo0u53FF10-unsplash.jpg" alt="sofa" />
                        <div className="absolute sm:bottom-8 bottom-4 pr-10 sm:pr-0 left-4 sm:left-8 flex justify-start items-start">
                            <p className="text-3xl sm:text-4xl font-semibold leading-9 text-black">Range Comfort Sofas</p>
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
        </div>
    );
}
