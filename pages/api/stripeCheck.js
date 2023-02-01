const stripe= require("stripe")(process.env.Stripe_secret)

export default async(req,res)=>{
//info received from the axios.post method comes as a req
const {Items,email}= req.body;

// console.log(Items)
// console.log(email)

const transform = Items.map((item)=>({

    quantity:1,
    price_data:{
        currency:"USD",
        unit_amount:item.price * 100,
        product_data:{
            name:item.title,
           images:[item.image]
        }
    } }))
//  console.log(transform)
    const session = await stripe.checkout.sessions.create({
    payment_method_types:["card"],
    shipping_address_collection: {
      allowed_countries: ["GB", "US", "CA", "AU","GH"]},
    line_items:transform,
    mode:"payment",
    success_url:`${process.env.HOST}/success`,
    cancel_url:`${process.env.HOST}/checkout`,
    metadata:{email,images:JSON.stringify(Items.map((item)=>(item.image)))
    },
    
    })

console.log("session created!",session.id)
//every req to the server needs a response(res)
res.status(200).json({id:session.id})//sessiom.id from stripe
}