import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import getContent from '../redux/thunk/getContent'

const Home = () => {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getContent())
  },[dispatch])
  return (
    <div>Home</div>
  )
}

export default Home