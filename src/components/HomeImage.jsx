import React from "react";
import logo from "../assets/images/cta01.jpg";
export default function HomeImage() {
  return (
    <>
      <section className="w-full h-[500px] mt-10 lg:h-[300px] ">
        <img src={logo} alt="image" className="w-full h-full object-cover" />
      </section>
      <div className="w-full  absolute top-10 bg-red-800/30">
        <h1 className="py-16 text-3xl text-gray-50 ">
          CURABITUR ULLAMCORPER ULTICIES
        </h1>

        <p className="text-gray-300 px-8 leading-6">
          Nunc lacinia ante nunc ac loborits Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Sit maxime fuga molestiae animi libero
          deleniti earum incidunt iusto reiciendis aperiam iste neque eligendi,
          expedita quam assumenda quae voluptas laboriosam. Veritatis.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, autem! Similique, quis sapiente debitis 
        </p>
      </div>
    </>
  );
}
