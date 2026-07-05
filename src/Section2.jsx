import React from "react";

export default function Section2() {
  return (
    <section className=" flex justify-center p-4">
      <div className="container w-90% lg:w-7/12 gap-3 lg:gap-6 p-2 flex flex-col justify-center items-center">
        <div data-aos="zoom-in-down" className=" text-center w-11/12 lg:w-9/12 flex flex-col gap-2">
          <h1 className="font-bold text-[22px]">How can we help you?</h1>
          <p className="text-[13px]">
            Consectetur purus ut faucibus pulvinar elementum integer enim neque.
            Egestas egestas fringilla phasellus faucibus scelerisque.
          </p>
        </div>

        <div className=" w-100% grid grid-cols-1 lg:grid-cols-2  ">
          <img
            data-aos="fade-right"
            src="https://assets.nicepagecdn.com/d2cc3eaa/144337/images/fgfg.jpg"
          ></img>

          <div
            data-aos="fade-left"
            className="flex flex-col p-3 items-start gap-3 justify-center bg-[#f1bb13]"
          >
            <h1 className="font-bold ">Leadership</h1>
            <p className="text-[14px]">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <button className="text-black text-[13px] border border-black px-4 py-2 rounded-2xl hover:bg-white hover:text-black transition duration-300">
              LEARN MORE
            </button>
          </div>

          <div
            data-aos="fade-up"
            className="order-4 flex flex-col p-3 items-start gap-3 justify-center bg-[#34375a] text-white"
          >
            <h1 className="font-bold ">Innovations</h1>
            <p className="text-[14px]">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <button className="text-white text-[13px] border border-white px-4 py-2 rounded-2xl hover:bg-white hover:text-black transition duration-300">
              LEARN MORE
            </button>
          </div>

          <img
            data-aos="fade-up"
            className="order-3 lg:order-4"
            src="https://assets.nicepagecdn.com/d2cc3eaa/144337/images/yu.jpg"
          ></img>

          <img
            data-aos="fade-up"
            data-aos-duration="1300"
            className="order-5"
            src="https://assets.nicepagecdn.com/d2cc3eaa/144337/images/89.jpg"
          ></img>

          <div
            data-aos="fade-right"
            data-aos-duration="1300"
            className="order-5 flex flex-col p-3 items-start gap-3 justify-center bg-[#f1bb13]"
          >
            <h1 className="font-bold ">Coaching</h1>
            <p className="text-[14px]">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <button className="text-black text-[13px] border border-black px-4 py-2 rounded-2xl hover:bg-white hover:text-black transition duration-300">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
