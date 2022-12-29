import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import editContent from '../../redux/thunk/content/editContent';
import getContent from '../../redux/thunk/content/getContent';
const EditContent = () => {
    const { register, handleSubmit , reset} = useForm();
    const dispatch = useDispatch();
    const {postID} = useParams()
    const contents = useSelector(state => state.content.posts)
    const content = contents.filter(content => content._id === postID)[0]
    const navigate = useNavigate()
    useEffect(()=> {
      dispatch(getContent())
    },[dispatch])
  
    const submit = (data) => {
      const product = {
        author:"Sakib PK",
        title: data.title,
        image: data.image,
        desc: data.desc,
        tags: data.tags.split(","),
        date_time:new Date().getTime()
      };
      dispatch(editContent(postID,product))
      // form reset inputvalue
      reset()
      // redirect to home page
      navigate("/")
    };
    if(!content){
      return <p>Loading...</p>
    }
  
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
            <input type='text' className='p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' id='title' defaultValue={content.title} {...register("title")} />
          </div>
          <div className='flex flex-col w-full max-w-xs'>
            <label className='mb-2' htmlFor='image'>
              Image
            </label>
            <input type='text' name='image'className='p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' defaultValue={content.image} id='image' {...register("image")} />
          </div>
          <div className='flex flex-col w-full '>
            <label className='mb-2' htmlFor='tags'>
              Tags
            </label>
            <input type='text' className='p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' id='tags'defaultValue={content.tags} {...register("tags")} />
            <p className="mt-2 text-sm text-green-600 dark:text-green-500">Tags separated with comma. Ex.( How to,tips, etc)</p>
          </div>
          <div className='flex flex-col w-full'>
            <label className='mb-2' htmlFor='desc'>Your message</label>
            <textarea id="desc" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..." {...register("desc")} defaultValue={content.desc}></textarea>
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

export default EditContent