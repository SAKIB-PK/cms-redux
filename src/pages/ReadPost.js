import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import getContent from '../redux/thunk/content/getContent'

const ReadPost = () => {
    const {postID} = useParams()
    const contents = useSelector(state => state.content.posts)
    const content = contents.filter(content => content._id === postID)[0]
    const dispatch = useDispatch()
    useEffect(()=> {
      dispatch(getContent())
    },[dispatch])
  return (
    <div className="mb-4 md:mb-0 w-full mx-auto relative">
        <div className="px-4 lg:px-0">
          <div className="flex justify-between" >
            <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
              {content.title}
            </h2>
            <Link to={`/dashboard/edit/${content._id}`} className=' bg-indigo-700 text-white font-semibold py-2  px-4 rounded'>Edit</Link>
          </div>
          {
            content.tags.map(tag => <span key={tag}
              className="py-2 text-green-700 inline-flex items-center justify-center mb-2"
            >
              {tag} &nbsp;
            </span>)
          }
        </div>

        <img src={content.image} alt={content.title} className=" max-h-96 w-full"/>

        <div className="px-4 mt-3 lg:px-0">
          <p>{content.desc}</p>
        </div>
      </div>
  )
}

export default ReadPost