import React from "react";

export default function Section2() {
  return (
    <section className=" flex justify-center  p-2">
      <div className="container w-90% lg:w-7/12  gap-2 p-2 flex flex-col justify-center items-center">
        <div className=" text-center w-11/12 lg:w-9/12">
          <h1 className="font-bold text-[22px]">How can we help you?</h1>
          <p className="text-[13px]">
            Consectetur purus ut faucibus pulvinar elementum integer enim neque.
            Egestas egestas fringilla phasellus faucibus scelerisque.
          </p>
        </div>
        <div className=" w-100% grid grid-cols-1 lg:grid-cols-2  ">
          <img src="https://assets.nicepagecdn.com/d2cc3eaa/144337/images/fgfg.jpg"></img>
          <div className="flex flex-col p-3 items-start gap-3 justify-center bg-[#f1bb13]">
            <h1 className="font-bold ">Leadership</h1>
            <p className="text-[14px]"> 
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <button className="text-black text-[13px] border border-black px-4 py-2 rounded-2xl hover:bg-white hover:text-black transition duration-300">LEARN MORE</button>
          </div>

           <div className="order-4 flex flex-col p-3 items-start gap-3 justify-center bg-[#34375a] text-white">
            <h1 className="font-bold ">Innovations</h1>
            <p className="text-[14px]"> 
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <button className="text-white text-[13px] border border-white px-4 py-2 rounded-2xl hover:bg-white hover:text-black transition duration-300">LEARN MORE</button>
          </div>
          <img className="order-3 lg:order-4" src="https://assets.nicepagecdn.com/d2cc3eaa/144337/images/yu.jpg"></img>
          <img className="order-5" src="https://assets.nicepagecdn.com/d2cc3eaa/144337/images/89.jpg"></img>
          <div className="order-5 flex flex-col p-3 items-start gap-3 justify-center bg-[#f1bb13]">
            <h1 className="font-bold ">Coaching</h1>
            <p className="text-[14px]"> 
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <button className="text-black text-[13px] border border-black px-4 py-2 rounded-2xl hover:bg-white hover:text-black transition duration-300">LEARN MORE</button>
          </div>
        </div>
      </div>
    </section>
  );
}
