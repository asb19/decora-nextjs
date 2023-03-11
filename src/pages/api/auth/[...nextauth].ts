import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth ({
    providers: [
        GoogleProvider({
            clientId: "278897371847-2ouh0m8lmngd8lbe5p20t0g13g59s4u4.apps.googleusercontent.com",
            clientSecret:"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"

        }),
        
    ],
    secret: "hello"
})