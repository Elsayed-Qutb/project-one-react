import React from "react";

export default function Section3() {
  return (
    <>
      <section className="w-100% bg-[#34375a] p-5 flex justify-center ">
        <div className="container w-92% lg:w-5/12 p-2 flex flex-col items-center text-center gap-2.5 text-white">
          <h1 className="font-bold text-[22px] ">Start working smarter</h1>
          <h1 className="text-[12px]">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit
          </h1>
          <div className="flex gap-3 text-[13px]">
            <button className="border border-white px-3 py-1.5 rounded-2xl hover:bg-white hover:text-black transtion duration-300 ">
              OUR PROJECT
            </button>
            <button className="border border-white px-3 py-1.5 rounded-2xl hover:bg-white hover:text-black transtion duration-300 ">
              CONTACT US
            </button>
          </div>
        </div>
      </section>
      <main className=" p-2.5 flex justify-center ">
        <div className="container w-8/12 flex justify-center relative ">
          <div className="w-100% lg:w-1/2 shadow-2xl shadow-black "> 
            <img src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/64ba0e89e1d15981bfab92da/ddd.jpg"></img>
          </div>

          <div className="h-8/12 lg:h-6/12 w-10/12 lg:w-4/12 flex flex-col gap-1.5 lg:gap-3.5 text-white p-2 lg:p-4 justify-center text-center items-center lg:text-start lg:items-start bg-[#34375a] absolute top-35 left-20 lg:top-35 lg:left-140  ">
            <h1 className="font-bold text-[14px] lg:text-[24px]">
              We maximize added value for our clients
            </h1>
            <p className="text-[8px] lg:text-[11px]">
              Urna duis convallis convallis tellus id interdum velit laoreet.
              Odio pellentesque diam volutpat commodo sed egestas egestas
              fringilla. Nunc eget lorem dolor sed viverra ipsum nunc aliquet.
            </p>
            <button className="w-1/2 text-[10px] lg:text-[12px] border border-white px-2 lg:px-4 py-2 rounded-2xl hover:bg-white hover:text-black transtion duration-300">LEARN MORE</button>
          </div>
        </div>
      </main>
    </>
  );
}
