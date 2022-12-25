import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { add_history, sort_by_keyword } from '../redux/action/filterAction';

const ProductCard = ({content}) => {
    const {image,title,desc,tags,id} = content
    const dispatch = useDispatch()
    // const activeClass = "text-white bg-indigo-500 border-white";
  return (
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="#s">
            <img class="rounded-t-lg transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0" src={image} alt="" />
        </a>
        <div class="p-5">
            <a href="#s">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{desc}</p>
            {/* tags show */}
            <div className='mb-2 flex justify-start gap-5'>
                {
                    tags.map(tag => 
                        <button onClick={e=>dispatch(sort_by_keyword(e.target.innerText))} key={tag} className={`border px-1 py-1 rounded-lg font-semibold`}>
                            {tag}
                        </button>
                    )
                }
            </div>
            <Link to={`/posts/${id}`} onClick={()=> dispatch(add_history(id))} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </Link>
        </div>
    </div>
  )
}

export default ProductCard