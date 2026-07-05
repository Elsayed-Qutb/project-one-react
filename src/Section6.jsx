import React from "react";

export default function Section6() {
  return (
    <section className="flex justify-center bg-[#34375a]">
      <div className="container grid grid-cols-1 lg:grid-cols-2 w-11/12 lg:w-6/12 bg-[#34375a] p-2 gap-6 text-white border border-white rounded-2xl  ">
        <div className=" p-2 flex flex-col gap-2">
          <h1 className="font-bold text-[17px]">Get in touch</h1>
          <h1 className="font-bold text-[14px]">
            We believe in innovation and creative problem solving.
          </h1>
          <h1 className="text-[12px]">
            Etiam sit amet convallis erat – class aptent taciti sociosqu ad
            litora torquent per conubia! Maecenas gravida lacus. Lorem etiam sit
            amet convallis erat.
          </h1>
        </div>
        <div className=" p-2 flex flex-col gap-2">
          <h1 className="font-bold text-[15px]">call us</h1>
          <div>
            <h1 className=" text-[11px]">1 (234) 567-891</h1>
            <h1 className="text-[11px]">1 (234) 987-65</h1>
          </div>
          <h1 className="font-bold text-[15px]">location</h1>

          <h1 className="text-[11px]">
            121 Rock Sreet, 21 Avenue, New York, NY 92103-9000
          </h1>
          <h1 className="font-bold text-[15px]">Our top services</h1>
          <ol className="text-[11px]">
            <li>✔Consulting</li>
            <li>✔Coaching</li>
            <li>✔Development</li>
          </ol>
        </div>

       
      </div>
    </section>
  );
}
