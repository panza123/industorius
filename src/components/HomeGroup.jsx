import React from "react";

export default function HomeGroup({ text ,img}) {
  return (
    <section className="w-[80%] h-[300px] pl-3 bg-white flex flex-col justify-center items-center rounded-[5px]">
      <div className="flex gap-3">
      <div className="w-[20px] h-[70px] bg-gray-400"></div>
      <p>
        Nunc lacinia ante nunc ac lobortis ipsum.interdum adipiscing gravida
        odio porriror sem non mi integer non faucibus
      </p>
    </div>
    <div className="mt-10 flex  w-full  gap-2">
      <div className="w-[100px] h-[100px]">
      <img src={img} alt="" className="w-full h-full rounded-full" />
      </div>
      <p className="pt-10"><span className="text-red-600">{text}</span> CEO-Abc Inc</p>
    </div>
    </section>
  );
}
