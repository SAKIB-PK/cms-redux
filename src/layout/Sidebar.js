import React from 'react'
import { CgPlayListRemove } from "react-icons/cg"
import { FaHome } from "react-icons/fa"
import { FiEdit } from "react-icons/fi"
import { IoIosCreate } from "react-icons/io"
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    
    <aside className=" col-span-3 h-[calc(100vh-25px)] p-5 rounded-lg" aria-label="Sidebar">
        <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
            <ul className="space-y-2">
                <li>
                    <Link to={"/"} className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <FaHome className='w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'/>
                        <span className="ml-3">Back to Home</span>
                    </Link>
                </li>
            </ul>
            <ul className=" pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
                <li>
                    <Link to={"/dashboard/add"} className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <IoIosCreate className='w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'/>
                        <span className="ml-3">Create Post</span>
                    </Link>
                </li>
                <li>
                    <Link to={"/dashboard/remove"} className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <CgPlayListRemove className='w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'/>
                        <span className="ml-3">Remove Post</span>
                    </Link>
                </li>
                <li>
                    <Link to={"/dashboard/edit"} className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <FiEdit className='w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'/>
                        <span className="ml-3">Edit Post</span>
                    </Link>
                </li>
            </ul>
        </div>
    </aside>

  )
}

export default Sidebar