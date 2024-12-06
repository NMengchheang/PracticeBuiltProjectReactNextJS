import EmailProvider from "next-auth/providers/email"

import type { NextAuthConfig } from "next-auth";

export default {
    providers: [ EmailProvider({
        	
    })],
} satisfies NextAuthConfig