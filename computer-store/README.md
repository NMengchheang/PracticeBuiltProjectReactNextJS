** Visual Workflow
1. User Action: Clicks "Sign in with Google/GitHub" → signIn("google") or signIn("github").
2. Redirection: Sent to the provider's OAuth page → User logs in and grants permissions.
3. Callback: Provider redirects to /api/auth/callback/google or /api/auth/callback/github with an auth code.
4. Token Exchange: NextAuth exchanges the code for an access token and retrieves user data.
5. Database Update: User record is created or updated in PostgreSQL.
6. Session Created: JWT is generated and stored in the session.
7. Redirection: User is redirected to the specified page ("/dashboard").

*** The signIn method provided by next-auth/react is specifically designed to initiate the GitHub login flow from the client side.

*** Google Login: Can work with either client-side or server-side signIn because it supports both flows.