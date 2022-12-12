import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'
import getContent from '../redux/thunk/content/getContent'

const Home = () => {
  const dispatch = useDispatch()
  let contents = useSelector(state => state.posts)

  useEffect(()=>{
    dispatch(getContent())
  },[dispatch])

  const activeClass = "text-white bg-indigo-500 border-white";
  return (
    <div className='max-w-7xl gap-14 mx-auto my-10'>
      <div className='mb-10 flex justify-end gap-5'>
        <span className={` px-3 py-2 font-semibold`}>Sort By: </span>
        <button
          className={`border px-3 py-2 rounded-full font-semibold ${activeClass }`}
        >
          AMD
        </button>
        <button
          className={`border px-3 py-2 rounded-full font-semibold`}
        >
          Intel
        </button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-14'>
          {
            contents.map(content =><ProductCard key={content.id} content = {content} />)
          }
      </div>

    </div>
  )
}

export default Home