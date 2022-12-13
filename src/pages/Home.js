import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'
import { sort_f_upload, sort_l_upload } from '../redux/action/filterAction'
import getContent from '../redux/thunk/content/getContent'

const Home = () => {
  const dispatch = useDispatch()
  let contents = useSelector(state => state.content.posts)
  let {sort_first_upload,sort_last_upload} = useSelector(state => state.filter)
  let data;
  useEffect(()=>{
    dispatch(getContent())
  },[dispatch])

  if(contents.length){
    data = contents.map(content =><ProductCard key={content.id} content = {content} />)
  }

  return (
    <div className='max-w-7xl gap-14 mx-auto my-10'>
      <div className='mb-6 flex justify-end gap-5'>
      <label for="countries" class=" mb-2 text-sm font-medium text-gray-900 dark:text-white">Sort By :</label>
      <select onChange={(e)=>e.target.value==="first"?dispatch(sort_f_upload(contents)):dispatch(sort_l_upload(contents))}  id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500   p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option  selected>select option</option>
        <option  value="first" >First upload</option>
        <option  value="last">Last upload</option>
      </select>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-14'>
          {
            data
          }
      </div>

    </div>
  )
}

export default Home