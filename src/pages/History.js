import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'

const History = () => {
    const {posts,history} = useSelector(state => state.content)

  return (
    <div className='max-w-7xl gap-14 mx-auto my-10'>
        <h2 className=' text-2xl my-4 font-bold text-indigo-400 first-letter:text-indigo-500 '>History</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-14'>
            {
            posts.filter(post => history.includes(post._id)).map(content =><ProductCard key={content._id} content = {content} />)
            }
        </div>
    </div>
  )
}

export default History