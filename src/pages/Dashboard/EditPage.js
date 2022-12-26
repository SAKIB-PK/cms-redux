import React, { useEffect } from 'react'
import { FiEdit } from "react-icons/fi"
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import getContent from '../../redux/thunk/content/getContent'


const EditPage = () => {
    const contents = useSelector(state => state.content.posts)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getContent())
    },[dispatch])
  return (
    <div className='flex flex-col justify-center items-center h-full w-full '>
      <div className='w-full max-w-7xl mx-auto rounded-lg  bg-white shadow-lg border border-gray-200'>
        <header className='px-5 py-4 border-b border-gray-100'>
          <div className='font-semibold text-gray-800'>Products</div>
        </header>

        <div className='overflow-x-auto p-3'>
          <table className='table-auto w-full'>
            <thead className='text-xs font-semibold uppercase text-gray-400 bg-gray-50'>
              <tr>
                <th></th>
                <th className='p-2'>
                  <div className='font-semibold text-left'>Image</div>
                </th>
                <th className='p-2'>
                  <div className='font-semibold text-left'>Title</div>
                </th>
                <th className='p-2'>
                  <div className='font-semibold text-left'>Author</div>
                </th>
                <th className='p-2'>
                  <div className='font-semibold text-center'>Action</div>
                </th>
              </tr>
            </thead>

            <tbody className='text-sm divide-y divide-gray-100'>
              {contents.map(({ title, author, desc, image, _id }) => (
                <tr>
                  <td className='p-2'>
                    <input type='checkbox' className='w-5 h-5' value='id-1' />
                  </td>
                  <td className='p-2'>
                    <img src={image} alt={title} className='object-cover rounded-t-lg h-16 md:rounded-none md:rounded-l-lg'/>
                  </td>
                  <td className='p-2'>
                    <div className='font-medium text-gray-800'>{title}</div>
                  </td>
                  <td className='p-2'>
                    <div className='text-left capitalize'>{author}</div>
                  </td>
                  <td className='p-2'>
                    <div className='flex justify-center'>
                      <Link to={`/dashboard/edit/${_id}`} >
                        <FiEdit/>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default EditPage