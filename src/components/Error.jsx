import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/Untitled.png'
export default function Error() {
  return (
    <div className='w-full h-full text-center flex flex-col justify-center items-center  py-10'>
        <div className='w-[300px] h-[300px] bg-transparent'>
        <img src={logo} alt="" className='obeject-cover bg-transparent' />
        </div>
        <h1 className='text-4xl'>Error 404</h1>
        <p className='text-3xl'>Page not found got to <Link to='/'
        className='text-blue-500 hover:text-blue-700'
        >Homepage</Link></p>
    </div>
  )
}
