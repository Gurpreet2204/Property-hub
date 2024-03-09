import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
export default function Header() {
    return (
        <header className=' bg-red-200 shadow-md' >
            <div className=' flex justify-between items-center max-w-6xl mx-auto p-3'>
                <Link to='/'>
                    <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                        <span className='text-red-500'> Property</span>
                        <span className='text-black'> hub</span>
                    </h1>
                </Link>

                <form className='bg-red-100 p-3 rounded-lg flex items-center'>
                    <input type="text" placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64' />
                    <FaSearch className='text-red-500' />
                </form>

                <ul className='flex gap-4'>
                    <Link to='/'>
                        <li className='hidden sm:inline text-gray-800  hover:underline'>
                            Home
                        </li>
                    </Link>
                    <Link to='about'>
                        <li className='hidden sm:inline text-gray-800 hover:underline'>
                            Abuot
                        </li>
                    </Link>
                    <Link to='sign-in'>
                        <li className=' text-gray-800 hover:underline'>
                            Sign in
                        </li>
                    </Link>
                </ul>
            </div>

        </header>
    )
}
