import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'
import getContent from '../redux/thunk/content/getContent'

const Home = () => {
  const dispatch = useDispatch()
  let contents = useSelector(state => state.content.posts)

  useEffect(()=>{
    dispatch(getContent())
  },[dispatch])

  return (
    <div className='max-w-7xl gap-14 mx-auto my-10'>
      <div className='mb-6 flex justify-end gap-5'>
      <label for="countries" class=" mb-2 text-sm font-medium text-gray-900 dark:text-white">Sort By :</label>
      <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500   p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option value="first" selected>First upload</option>
        <option value="last">Last upload</option>
      </select>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-14'>
          {
            contents.map(content =><ProductCard key={content.id} content = {content} />)
          }
      </div>

    </div>
  )
}

export default Home