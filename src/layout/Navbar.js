import React from 'react'
import { BsFillCartFill } from "react-icons/bs"
import { IoIosListBox } from "react-icons/io"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='h-14 bg-indigo-200 rounded-full m-2 max-w-7xl mx-auto px-5'>
    <ul className='h-full  mx-auto flex justify-between items-center gap-3 font-semibold text-indigo-900'>
      <Link to={"/"} className='flex-1'>Moon Tech</Link>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/dashboard/edit'>Dashboard</Link>
      </li>
      <li title='history' className='bg-indigo-500 p-2 rounded-full'>
        <Link to='/history'>
          <BsFillCartFill className='text-white ' />
        </Link>
      </li>
      <li title='Wishlist' className='bg-indigo-500 p-2 rounded-full'>
        <Link to='/'>
          <IoIosListBox className='text-white' />
        </Link>
      </li>
    </ul>
  </nav>
  )
}

export default Navbar