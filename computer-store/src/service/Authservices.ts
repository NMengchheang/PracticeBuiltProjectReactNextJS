import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter} from "@auth/prisma-adapter";
import prisma from "./db";

export const {

    handlers,
    auth, 
    signIn, 
    signOut

} = NextAuth({
    adapter: PrismaAdapter(prisma),
    session : {
        strategy: 'jwt',
    },
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),

        GitHubProvider ({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        }),

        CredentialsProvider({
            credentials: {
                email: { label: "Email", type: "text", placeholder: "example@gmail.com"},
                password: { label: "Password", type: "password"},
            },
            async authorize(credential, req) {
                const fackUser = {
                    email: "test@gmail.com",
                    password: "12345678",
                }
                let user: any = null;

                if (fackUser.email === credential.email && fackUser.password === credential.password){
                    user = {
                        id: 1,
                        email: fackUser.email,
                        name: "Fack User"
                    }
                }
                return user;
            }
        }),
    ],
    pages: {
        signIn: '/signin'
    }
});

// function EmailProvider(arg0: { server: { host: string | undefined; port: string | undefined; auth: { user: string | undefined; pass: string | undefined; }; }; from: string | undefined; }): import("@auth/core/providers").Provider {
//     throw new Error("Function not implemented.");
// }
