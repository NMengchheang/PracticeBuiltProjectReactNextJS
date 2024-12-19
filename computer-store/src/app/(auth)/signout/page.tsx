import React from 'react'
import { redirect } from 'next/navigation';
import SignOutForm from './../components/SignoutForm'
import { checkIsAuthenticated } from '@/lib/auth/checkIsAuthenticated'

export default async function SignOutpage() {
  const isAuthenticated = await checkIsAuthenticated();
  if (!isAuthenticated) {
    redirect("/signin");
  } else {
    return (
      <div className="flex items-center justify-center h-screen">
          <div className="w-full max-w-sm">
            <SignOutForm />
          </div>
      </div>
    )
  }
  
}
