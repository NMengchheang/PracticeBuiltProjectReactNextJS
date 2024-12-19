import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
// import type { NextAuthConfig } from "next-auth"

export default{

    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            allowDangerousEmailAccountLinking: true,
        }),
    
        GitHubProvider ({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
            allowDangerousEmailAccountLinking: true,
        }),
    ],

}
//  satisfies NextAuthConfig