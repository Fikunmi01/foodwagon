import React, { useState } from "react";

export const Hero = () => {
  const [toggle, setToggle] = useState(true);

  const handleClick = (id) => {
    setToggle((prev) => !prev);
  };
  return (
    <>
      <div className="font-serif bg-[#FFB800] lg:px-24 px-3 py-10 flex lg:flex-row flex-col-reverse items-center heightFull relative lg:gap-20">
        <div className="lg:w-8/12 w-full">
          <h1 className="lg:text-7xl text-6xl font-bold text-white mb-4">
            Are you starving?
          </h1>
          <p className="text-[#504F4F] text-xl w-full lg:w-5/6">
            Within a few clicks, find meals that are accessible near you{" "}
          </p>

          <div className="bg-white mt-10 lg:px-6 px-3 shadow-2xl rounded-xl py-5 flex flex-col gap-y-5 lg:gap-y-7 h-40">
            <span className="flex gap-5">
              <button
                className={` ${
                  toggle
                    ? "px-3 py-2 rounded-lg text-[#F17228] font-bold bg-[#F172281A]  shadow-2xl flex items-center gap-2 relative"
                    : "px-3 py-2 rounded-lg text-[#504F4F] bg-[white] font-bold border-yellow-50 border-2 shadow-2xl flex items-center gap-2 relative"
                }`}
                onClick={() => handleClick(true)}
              >
                <img src="./assets/bike-icon.png" alt="" />
                Delivery
              </button>
              <button
                onClick={() => handleClick(false)}
                className={` ${
                  toggle
                    ? "px-3 py-2 rounded-lg text-[#504F4F] bg-[white] font-bold border-yellow-50 border-2 shadow-2xl flex items-center gap-2 relative"
                    : "px-3 py-2 rounded-lg text-[#F17228] font-bold bg-[#F172281A]  shadow-2xl flex items-center gap-2 relative"
                }`}
              >
                <img src="./assets/pickup-icon.png" alt="" />
                Pickup
              </button>
            </span>
            <span className="relative flex gap-4 items-center">
              <img
                src="./assets/Icon16.png"
                className="absolute lg:top-2 left-2 lg:left-4"
                alt=""
              />
              <input
                type="text"
                className="bg-[#F172281A] w-4/5 py-3 text-sm pl-8 lg:py-2 lg:pl-12 rounded-lg outline-2 outline-red-200"
                placeholder="Enter your address"
                name=""
                id=""
              />

              <span>
                <button className="lg:px-3 lg:py-2 rounded-lg shadow-lg text-white btnMix2">
                  <img src="" alt="" />
                  Find Food
                </button>
              </span>
            </span>
          </div>
        </div>
        <div className="lg:top-24 lg:pt-16 relative">
          <img src="./assets/hero-img.png" alt="" />
        </div>
      </div>
    </>
  );
};
