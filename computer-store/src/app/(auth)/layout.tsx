import React from 'react';

export default function AuthLayout({
    children
}: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <section className="bg-gray-100">
        <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
            <h1 className="">Auth Layout</h1>
            {children}
        </div>
    </section>
  )
}