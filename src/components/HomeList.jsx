import React from "react";

export default function HomeList({ icon, title }) {
  return (
    <main className="w-[80%] h-[300px] bg-white mt-8 flex flex-col
     justify-center items-center text-center rounded-[5px]">
      <span>{icon}</span>
      <p className="text-2xl text-gray-400">{title}</p>
      <p className="px-10 pt-4 text-[18px] lg:px-5">
        Nunc lacina ante nunc ac lobortis ipsum.interdum adipiscing gravida odio
        porttitor sem non mi interger non faucibus
      </p>
    </main>
  );
}
