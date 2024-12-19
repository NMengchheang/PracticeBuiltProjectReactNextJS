import React from 'react'
import { redirect } from 'next/navigation';
import SigninForm from './../components/SigninForm'
import { checkIsAuthenticated } from '@/lib/auth/checkIsAuthenticated';

export default async function SignInpage() {
  // ToDo: check if user is authenticated
  const isAuthenticated = await  checkIsAuthenticated();
  if(isAuthenticated){
    redirect("/dashboard");
  } else {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-full">
          <SigninForm />
        </div>
      </div>
    )
  }
}
