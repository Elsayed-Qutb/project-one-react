import React from "react";

export default function Section1() {
  return (
    <section className="w-100% p-2.5 flex justify-center bg-[#f1bb13] rounded-2xls">
      <div className="container bg-red-5 gap-3  flex flex-col lg:flex-row  items-center">
        <img data-aos="zoom-in"
          className="w-100% lg:w-6/12 "
          src="https://assets.nicepagecdn.com/d2cc3eaa/3762495/images/young-man-min.png"
        ></img>
        <div  data-aos="fade-left" className="flex flex-col gap-2.5 lg:gap-6 justify-center text-center lg:text-start items-center lg:items-start w-100% lg:w-4/12">
          <h1 className="text-[20px]">CONSULTING FIRM</h1>
          <p className="font-bold text-10px lg:text-[30px]">
            Designing success. Over{" "}
            <span className="text-[#363b47]">1.5 Billion</span> raised with the
            help of our products
          </p>
          <button className="bg-[#35375b] px-4 py-2 text-[13px] rounded-2xl text-white">
            LEARN MORE
          </button>
        </div>
      </div>
    </section>
  );
}
