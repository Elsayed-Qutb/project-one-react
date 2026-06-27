import React from "react";

export default function Section5() {
  return (
    <>
      <section className=" h-[200px] lg:h-[400px]">
        <div className="   w-100%  h-[100%] mb-10 ">
          <img
            className=" w-full h-full object-cover"
            src="https://assets.nicepagecdn.com/d2cc3eaa/3159880/images/manager-woman-leading-4-min.jpg "
          ></img>
        </div>
      </section>
      <main className="bg-[#34375a] p-2 flex justify-center ">
        <div className="container bg-[#34375a] p-2 w-11/12 lg:w-8/12 gap-5 flex flex-col items-center justify-center   ">
          <div className="bg-white p-2 w-full lg:w-1/2 flex flex-col items-center text-center gap-2 rounded-2xl  ">
            <h1 className="font-bold text-[22px]">Our Creative Team</h1>
            <p className="text-[13px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam
              nunc justo sagittis suscipit ultrices. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <button className="bg-[#34375a] text-white rounded-2xl px-2.5 py-2 text-[13px] w-4/12 hover:bg-[#f6b63a] hover:text-black transtion duration-300">
              LEARN MORE
            </button>
          </div>

          <div className="w-full lg:w-8/12 flex flex-col justify-center text-center items-center gap-17 lg:gap-12">
            <h1 className="font-bold text-[24px] text-white  ">
              Brilliant people and effective methods
            </h1>
            <div className="bg-green-500 w-full flex flex-col justify-center items-center relative">
              <div className="grid grid-cols-2 lg:grid-cols-4 w-11/12 gap-3 lg:gap-6 absolute bottom-25 lg:bottom-75  ">
                <div className="bg-white flex flex-col gap-1 lg:gap-2 px-2 py-2.5 lg:py-5 justify-center items-center">
                  <h1 className="text-[13px] text-gray-500 ">awards won</h1>
                  <h1 className="font-bold text-[#f6b63a] text-[20px] lg:text-[37px]">
                    10
                  </h1>
                </div>
                <div className="bg-white flex flex-col gap-1 lg:gap-2 px-2 py-2.5 lg:py-5 justify-center items-center">
                  <h1 className="text-[13px] text-gray-500 ">XP YEARS</h1>
                  <h1 className="font-bold text-[#f6b63a] text-[20px] lg:text-[37px]">
                    12+
                  </h1>
                </div>
                <div className="bg-white flex flex-col gap-1 lg:gap-2 px-2 py-2.5 lg:py-5 justify-center items-center">
                  <h1 className="text-[13px] text-gray-500 ">clients</h1>
                  <h1 className="font-bold text-[#f6b63a] text-[20px] lg:text-[37px]">
                    10k
                  </h1>
                </div>
                <div className="bg-white flex flex-col gap-1 lg:gap-2 px-2 py-2.5 lg:py-5 justify-center items-center">
                  <h1 className="text-[13px] text-gray-500 ">projects</h1>
                  <h1 className="font-bold text-[#f6b63a] text-[20px] lg:text-[37px]">
                    78+
                  </h1>
                </div>
              </div>
              <img src="https://images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/7b41792002e653d393caf40e/vbvbvbvb.jpg"></img>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
