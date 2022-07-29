import React from "react";

export default function EstimateFrom() {
  return (
    <>
      <div className="bg-slate-200 rounded-lg p-8 container mx-auto z-10 mt-0 md:mt-[-40px]">
        <h3 className="text-2xl  font-bold text-emerald-500">
          Get Free Estimate
        </h3>

        <div className="mt-4 ">
          <div>
            <form className=" grid grid-cols-1  md:grid-cols-4 gap-2">
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered input-info w-full "
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="input input-bordered input-info w-full "
              />
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered input-info w-full "
              />
              <input
                type="text"
                placeholder="Type of Cleaning"
                className="input input-bordered input-info w-full "
              />
              <input
                type="text"
                placeholder="Frequency of Cleaning"
                className="input input-bordered input-info w-full "
              />
              <input
                type="number"
                placeholder="Number of Bedrooms"
                className="input input-bordered input-info w-full "
              />
            </form>
            <input
              type="submit"
              value="Request A Qoute"
              className="btn  input-info mt-3 "
            />
          </div>
        </div>
      </div>
    </>
  );
}
