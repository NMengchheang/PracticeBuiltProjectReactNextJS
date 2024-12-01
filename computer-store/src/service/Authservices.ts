import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const {
    handlers: {GET, POST}, 
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

        CredentialsProvider({
            credentials: {
                email: { label: "Email", type: "text", placeholder: "example@example.com"},
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