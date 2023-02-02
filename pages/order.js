import Header from '@/component/Header'
import { getSession, useSession } from 'next-auth/react'
import React from 'react'

const Order = ({orders}) => {
    const {data:session}=useSession()
  return (
    <div>
      <Header/>
      <main className='max-w-screen-lg mx-auto p-10'>
        <h1 className='text-3xl border-b mb-2 pb-1 border-yellow-400'>Your Orders</h1>
        {session? (
            <h2> Available orders</h2>
        ):(<h2>Please Sign In to see your Orders</h2>)}
      <div className='mt-5 space-y-4'></div>
      </main>
    </div>
  )
}

export default Order
export async function getServerSide (context){
    const stripe = require("stripe")(process.env.Stripe_secret);

    //get users loggin credentials
    const session =getSession(context)

    if (!session){
        return{
            props:{}
        }
    }
    // firebase db
    const stripeorders =await db.collection("users").doc((await session).user.email).collection("orders").orderBy("timestamp","desc").get()
     
//stripe orders
// const orders = await Promise.all(
//     stripe
// )
}