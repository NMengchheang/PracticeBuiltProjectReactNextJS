import React from 'react'
import {auth, signIn, signOut} from "@/auth";
import Link from 'next/link';
import Image from 'next/image';
type Props = {}

function SignOut() {
    return (
        <form action={async () => {
            'use server';
            await signOut()
        }} >
            <button className='' type='submit'>Sign Out</button>
        </form>
    )
} 

const Header = async (props: Props) => {
    const session = await auth();
    console.log(session);
  return (
    <header className='border bottom-1'>
        <nav className='bg-white border-gray-200 px-4 py-2.5'>
            <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
                <h1>
                    AI form Builder
                </h1>
                <div>
                    {
                        session?.user ? (
                            <div className='flex items-center gap-4'>{ session.user.name && session.user.image && <Image src={session.user.image} alt={session.user.name} width={32} height={32} className='rounded-full' />}<SignOut /></div>
                        ) : (
                            <Link href="/api/auth/signin">
                                <button >
                                    Sign In
                                </button>
                            </Link>
                        )
                    }
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header