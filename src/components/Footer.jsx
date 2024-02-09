import React from 'react'
import { FaFacebook,FaTwitter,FaInstagram,FaGithub } from 'react-icons/fa'

export default function Footer() {
  return (
<main className='w-full h-full bg-black '> 
<section className='w-full grid grid-cols-1 text-gray-300 px-8 lg:grid-cols-3 pt-8 gap-[100px] ' >
    <div className='w-[400px]'>
<h1 className='text-gray-200 text-[20px] lg: px-6text-3xl'>ACCUMSAN MONTES VIVERRA</h1>
<p className=" pt-6 leading-6 text-gray-400">
          Nunc lacinia ante nunc ac loborits Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Sit maxime fuga molestiae animi libero
          deleniti earum incidunt iusto reiciendis aperiam iste neque eligendi,
          expedita quam assumenda quae voluptas laboriosam. Veritatis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, autem! Similique, quis sapiente debitis 
        </p>

    </div>

<div className='pt-2' >
    <h1 className='pt-2' >SEM TURPIS AMET SEMPER</h1>
    <ul className='flex flex-col gap-2 text-gray-400 pt-2'>
        <li>Dolor pulvinar sed etiam</li>
    <hr  />

    <li>Dolor pulvinar sed etiam</li>
    <hr />

    <li>Dolor pulvinar sed etiam</li>
    <hr />

    <li>Dolor pulvinar sed etiam</li>
    <hr />

    </ul>
</div>




<div className='flex flex-col gap-2'>
<div className='flex gap-[10px]'>
    <div className='w-[30px] h-[30px] flex justify-center items-center bg-white rounded-sm'>
    <FaTwitter className='text-black' /> 
    </div>
    <p >Twitter</p>
    </div>
<div className='flex gap-[10px]'>
<div className='w-[30px] h-[30px] flex justify-center items-center bg-white rounded-sm'>
    <FaFacebook className='text-black' /> 
    </div>
  
   <p>Facebook</p></div>
<div className='flex gap-[10px]'>

<div className='w-[30px] h-[30px] flex justify-center items-center bg-white rounded-sm'>
    <FaInstagram className='text-black'/> 
    </div>
  <p>Instagram</p></div>
<div className='flex gap-[10px]'>
  
<div className='w-[30px] h-[30px] flex justify-center items-center bg-white rounded-sm'>
    <FaGithub  className='text-black'/> 
    </div>
  
  <p>Github</p></div>
</div>









</section>
<div className='mt-8 w-full h-[100px] flex flex-col justify-center'>
<hr  className='w-[100%] text-gray-500'/>
<p className=' pt-[20px] text-center text-gray-200 self-center'>Design by <span className='text-red-500'>TEMPLATED</span></p>
</div>
</main>
  )
}
