import NextAuth from "next-auth";
import { pool } from "../postgres";
import authConfig from "./authConfig";
import pgAdapter from "@auth/pg-adapter";

export const { handlers, auth, signIn, signOut } = NextAuth({
    trustHost: true,
    adapter: pgAdapter(pool),
    secret: process.env.AUTH_SECRET,

    callbacks: {
        async jwt( {token, user}) {
            if (user) {
                return{
                    ...token,
                    id: user.id
                };
            }
            return token;
        },
        async session({ session, token}) {
            console.log("session callback", {session, token });
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id as string,
                },
            };
        },
    },

    session : {
        strategy: 'jwt',
        maxAge: 24 * 60 * 60, // 1 day
    },

    pages: {
        signIn: '/signin'
    },
    
    ...authConfig,
});













// import CredentialsProvider from "next-auth/providers/credentials";
// CredentialsProvider({
//     credentials: {
//         email: { label: "Email", type: "text", placeholder: "example@gmail.com"},
//         password: { label: "Password", type: "password"},
//     },
//     async authorize(credential, req) {
//         const fackUser = {
//             email: "test@gmail.com",
//             password: "12345678",
//         }
//         let user: any = null;

//         if (fackUser.email === credential.email && fackUser.password === credential.password){
//             user = {
//                 id: 1,
//                 email: fackUser.email,
//                 name: "Fack User"
//             }
//         }
//         return user;
//     }
// }),