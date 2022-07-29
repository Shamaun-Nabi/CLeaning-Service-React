import React from "react";
import BucketGirl from "../../assets/bucketgirl 1.png";
import EstimateFrom from "./EstimateFrom";

export default function Landing() {
  return (
    <>
      <div className=" bg-emerald-100">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-12 grid-cols-1  ">
            <div className="  md:col-span-5 flex justify-center items-center order-2 md:order-1">
              <div className=" mt-4 mx-4">
                <span  data-aos="fade-down"  >Best Quality</span>
                <h3 className="text-2xl md:text-5xl mt-2 font-bold">
                  Professional Cleaning Service
                </h3>
                <p  className="mt-3" >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has
                </p>
                <div  className="text-center md:text-left mb-2"  >
                  <button className="btn btn-secondary mt-3 py-2">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
            <div className="  md:col-span-7 flex justify-center order-1 md:order-2">
              <img data-aos="fade-up" className="w-[450px]" src={BucketGirl} alt="" />
            </div>
          </div>
        </div>
      </div>
      <EstimateFrom />
    </>
  );
}
