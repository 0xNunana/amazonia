/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    domains:["links.papareact.com","fakestoreapi.com"]
  },
  reactStrictMode: true,
   experimental: {
    appDir: true,
  },
  //this allows the key to be used in the loadStripe call
  env:{
    stripe_pk:process.env.Stripe_pk
  }
}

module.exports = nextConfig
