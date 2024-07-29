import SigninForm from '@/components/forms/SigninForm'
import React from 'react'

export default function SignInpage() {
  return (
    <div className="flex items-center justify-center h-screen">
        <div className="w-full max-w-sm">
            <SigninForm />
        </div>
    </div>
  )
}
