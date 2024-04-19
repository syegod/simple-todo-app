import { Poppins } from 'next/font/google'
import Link from 'next/link';
import React from 'react'

const poppins = Poppins({
    subsets: ["latin"],
    weight: '600'
});


const Header = () => {
    return (
        <header className='w-full py-2 shadow-md'>
            <div className='sm:w-[70%] mx-auto px-5 sm:px-0'>
                <nav className='inline-flex gap-3 items-center justify-between w-full'>
                    <Link href={'/'} className={`${poppins.className} text-lg`}>Sye's ToDo</Link>
                    <div className='inline-flex relative gap-3'>
                        <Link href={'/login'} className='font-medium group text-gray-500 hover:text-gray-900'>
                            Sign in or sign up
                            <div className='group-hover:scale-x-100 transition origin-center scale-x-0 h-[1px] bg-fuchsia-500' />
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header