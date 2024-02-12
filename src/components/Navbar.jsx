import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [nav, setNav] = useState(false);
// {javascript for the navbar}
  function handleClick() {
    setNav(!nav);
  }
  function closeNavbar(){
    setNav(false)
  }
  return (
    // {NAVBAR}
    <header className="w-full h-[50px] bg-black m-auto ">
      <nav
        className="max-w-[1200px] flex justify-between
         text-white  px-5 py-1 md:px-0 items-center" 
      >
        <h1 className="text-xl pl-3 md:3xl">Industrious</h1>
        <div className="flex gap-1 items-center  text-gray-600 text-2xl hover:text-white cursor-pointer ">
          <div onClick={handleClick}>
            {!nav ? <AiOutlineMenu size={26} /> : <AiOutlineClose />}
          </div>
          <p className={nav ? 'hidden':'block'}>Menu</p>
        </div>
      </nav>
{/* {mobile responbsiveness} */}
      <section
        className={
          nav
            ? "w-[300px] pt-5 h-screen bg-black absolute right-0  ease-in-out duration-500  scroll-behavior:smooth lg:w-[500px]"
            : " absolute  right-[-100%] hidden   "
        }
      >
        <ul
          className="max-w-[1200px] flex flex-col text-gray-500 
           text-3xl gap-3 px-5
           "
        >
          <li className="hover:text-gray-100" 
          onClick={closeNavbar}
          >
            <Link to='/home'>Home</Link>
            
          </li>
          <hr className="border-solid border-gray-700" />
          <li className="hover:text-gray-100"
          onClick={closeNavbar}
          
          >
            <Link to='/elements'>Elements</Link>
          </li>
          <hr className="border-solid border-gray-700"   />
          <li className="hover:text-gray-100" 
          
          onClick={closeNavbar}
          >
            <Link to='/generic'>Generic</Link>
          </li>
        </ul>
      </section>
    </header>
  );
}
