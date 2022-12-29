import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import addContent from '../../redux/thunk/content/addContent';

const Addcontent = () => {
    const { register, handleSubmit ,reset} = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate()
  
    const submit = (data) => {
      const product = {
        author:"Sakib PK",
        title: data.title,
        image: data.image,
        desc: data.desc,
        tags: data.tags.split(","),
        date_time:new Date().getTime()
      };
      dispatch(addContent(product))
      reset()
      // page redirect to home page
      navigate("/")
    };
  
    return (
      <div className='flex justify-center items-center h-full '>
        <form
          className='shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between bg-white'
          onSubmit={handleSubmit(submit)}
        >
          <div className='flex flex-col w-full max-w-xs'>
            <label className='mb-2' htmlFor='title'>
              Title
            </label>
            <input type='text' className='p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' id='title' {...register("title")} />
          </div>
          <div className='flex flex-col w-full max-w-xs'>
            <label className='mb-2' htmlFor='image'>
              Image
            </label>
            <input type='text' name='image'className='p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' id='image' {...register("image")} />
          </div>
          <div className='flex flex-col w-full '>
            <label className='mb-2' htmlFor='tags'>
              Tags
            </label>
            <input type='text' className='p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' id='tags' {...register("tags")} />
            <p className="mt-2 text-sm text-green-600 dark:text-green-500">Tags separated with comma. Ex.( How to,tips, etc)</p>
          </div>
          <div className='flex flex-col w-full'>
            <label className='mb-2' htmlFor='desc'>Your message</label>
            <textarea id="desc" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..." {...register("desc")}></textarea>
          </div>
  
          <div className='flex justify-between items-center w-full'>
            <button
              className=' px-4 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500'
              type='submit'
            >
              Submit
            </button>
          </div>
        </form>
      </div>
  )
}

export default Addcontent