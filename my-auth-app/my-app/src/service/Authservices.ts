import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
// import prisma from "./db";


export const {

    handlers,
    auth, 
    signIn, 
    signOut

} = NextAuth({
    session : {
        strategy: 'jwt',
    },
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),

        EmailProvider({
            server: {
                host: process.env.EMAIL_SERVER_HOST,
                port: Number(process.env.EMAIL_SERVER_PORT),
                auth: {
                    user: process.env.EMAIL_SERVER_USER,
                    pass: process.env.EMAIL_SERVER_PASSWORD
                }
            },
            from: process.env.EMAIL_FROM
        }),
    ],
    pages: {
        signIn: '/signin'
    }
});

// function EmailProvider(arg0: { server: { host: string | undefined; port: string | undefined; auth: { user: string | undefined; pass: string | undefined; }; }; from: string | undefined; }): import("@auth/core/providers").Provider {
//     throw new Error("Function not implemented.");
// }
