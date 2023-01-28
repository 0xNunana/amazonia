import NextAuth from 'next-auth'

import GoogleProvider from 'next-auth/providers/google'


export default NextAuth({
  providers: [
    
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    })
  ]
})

// id 1075569158684-gutpob9od6ldtahjt7jshkrdibvpg6f8.apps.googleusercontent.com
// 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