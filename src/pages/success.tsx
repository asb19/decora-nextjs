// import { useRouter } from 'next/router';
import React from 'react'

// export const getCustomer = async () => {
//     // const {
//     //     query: { session_id },
//     //   } = useRouter();

//     const res = await fetch(`http://localhost:3000/api/checkout-session?session_id=${session_id}`)
//     const customerData = await res.json()
//     console.log(customerData, "customer")
//     return {
//       props: {
//         customer: customerData
//       }
//     }
  
//   }

export function success({customer}: any) {
    
  return (
    <>
    <div>Order Success, Thanks for your order.</div>
    {/* <div>{customer ? customer.name : "Dear User"}, sit tight.</div> */}
    </>
  )
}



export default success