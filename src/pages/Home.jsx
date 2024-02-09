import React from "react";
import logo from "../assets/images/banner.mp4";
import { FaAddressCard, FaCopy, FaSave, FaChartLine } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { BsQrCodeScan } from "react-icons/bs";
import HomeList from "../components/HomeList";
import HomeImage from "../components/HomeImage";
import HomeGroup from "../components/HomeGroup";
import logo1 from '../assets/images/pic01.jpg'
import logo2 from '../assets/images/pic02.jpg'
import logo3 from '../assets/images/pic03.jpg'
export default function Home() {
  return (
    // {footer display down nav display}
    <main className="w-full  h-full ">
      <section className=" w-full h-[500px] relative  -z-10">
        <video
          src={logo}
          autoPlay
          loop
          className="w-full h-full  absolute top-0 object-cover"
        />
        <div
          className="w-full h-full  flex flex-col justify-center items-center absolute top-0
                 bg-gradient-to-r from-red-900 to-gray-900
                 opacity-75 text-center
               "
        >
          <h1 className="text-6xl text-white max-sm:text-3xl ">INDUSTRIOUS</h1>
          <p className="text-2xl px-4 text-gray-300 py-3 md:px-4 lg:px-[230px]">
            A responsive business oriented template with a video background
            designed by TEMOLATED and released under the Creative Common License
          </p>
        </div>
      </section>

      <div className="w-full h-full m-auto bg-gray-200/90  flex flex-col justify-center items-center text-center">
        <h2 className="text-3xl text-gray-600 mt-4">SEM TURPIS AMET SEMPER</h2>
        <p className="text-[15px] px-10   pt-5 md:px-8 lg:px-60 text-gray-500">
          In arcu accumsan arcu adiscing accumsan orci ac.Felis id emin aliquet.
          Accumsan ac integer lobortis commodo ornare aliquet accusman erat
          tempus amet porrittor
        </p>

        <div className="max-w-[1240px]  grid grid-cols-1 gap-3 justify-items-center items-center lg:grid-cols-3 ">
          <HomeList
            icon={<FaAddressCard size={100} className="text-red-700" />}
            title="FEUGIAT CONSEQUAT"
          />
          <HomeList
            icon={<FaCopy size={100} className="text-red-700" />}
            title="FEUGIAT CONSEQUAT"
          />
          <HomeList
            icon={<FaSave size={100} className="text-red-700" />}
            title="FEUGIAT CONSEQUAT"
          />
          <HomeList
            icon={<FaChartLine size={100} className="text-red-700" />}
            title="FEUGIAT CONSEQUAT"
          />
          <HomeList
            icon={<IoIosSend size={100} className="text-red-700" />}
            title="FEUGIAT CONSEQUAT"
          />
          <HomeList
            icon={<BsQrCodeScan size={100} className="text-red-700" />}
            title="FEUGIAT CONSEQUAT"
          />
        </div>
        <div className="relative w-full h-full ">
          <HomeImage />
        </div>
      </div>
      <div className="w-full h-full pt-10 bg-gray-200/90   ">
        <div  className="flex flex-col
        justify-center items-center text-center  px-10 lg:px-20" >
          <h1 className="text-2xl text-gray-600">FAUCIBUS CONSEQUAT LOREM</h1>

          <p className="pt-2 text-gray-500">
            in acrc accumsan arcu adipising accumsan orci ac.felis id
            enim.Accumsan ac integer lobortis commodo ornare aliquwt accusmsan
            erat tempus amet porttitor
          </p>
        </div>

        <div className="w-full h-full grid grid-cols-1
         gap-3 justify-items-center items-center mt-10 lg:grid-cols-3">
<HomeGroup text='-Jane Doe' img={logo2}/>
<HomeGroup text='-John Doe' img={logo3} />
<HomeGroup text='Janet Smit' img={logo1}/>

        </div>
      </div>
    
    </main>
  );
}
