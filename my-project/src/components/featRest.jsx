import React, { useState } from "react";

export const FeatRest = () => {
  const [avail, setAvail] = useState("Open Now");
  const [notAvail, setNotAvail] = useState("Opens tomorrow");
  const featuredArray = [
    {
      id: 0,
      imgTag: 20,
      imgSrc: "./assets/Image26.png",
      busImg: "./assets/Image18.png",
      busTitle: "Foodworld",
      rating: 46,
      availableTag: "",
      notAvailable: "Opens tomorrow",
    },
    {
      id: 1,
      imgTag: 15,
      imgSrc: "./assets/Image27.png",
      busImg: "./assets/image19.png",
      busTitle: "Pizzahub",
      rating: 40,
      availableTag: "",
      notAvailable: "Opens tomorrow",
    },
    {
      id: 2,
      imgTag: 10,
      imgSrc: "./assets/Image28.png",
      busImg: "./assets/image20.png",
      busTitle: "Donuts hut",
      rating: 20,
      availableTag: "Open Now",
      notAvailable: null,
    },
    {
      id: 3,
      imgTag: 15,
      imgSrc: "./assets/Image29.png",
      busImg: "./assets/image21.png",
      busTitle: "Donuts hut",
      rating: 50,
      availableTag: "Open Now",
      notAvailable: "",
    },
    {
      id: 4,
      imgTag: 10,
      imgSrc: "./assets/Image30.png",
      busImg: "./assets/Image22.png",
      busTitle: "Ruby Tuesday",
      rating: 26,
      availableTag: "Open Now",
      notAvailable: "",
    },
    {
      id: 5,
      imgTag: 25,
      imgSrc: "./assets/Image31.png",
      busImg: "./assets/Image23.png",
      busTitle: "Kuakata Chicken",
      rating: 53,
      availableTag: "Open Now",
      notAvailable: "",
    },
    {
      id: 6,
      imgTag: 10,
      imgSrc: "./assets/Image32.png",
      busImg: "./assets/Image24.png",
      busTitle: "Red Square",
      rating: 45,
      availableTag: "Open Now",
      notAvailable: "",
    },
    {
      id: 7,
      imgTag: 10,
      imgSrc: "./assets/Image33.png",
      busImg: "./assets/Image25.png",
      busTitle: "Taco Bell",
      rating: 35,
      availableTag: "Open Now",
      notAvailable: "",
    },
  ];

  return (
    <>
      <h1 className="top-28 text-center text-[#212121] font-bold text-2xl lg:text-3xl font-serif relative py-10 lg:py-20">
        Featured Restaurant
      </h1>

      <div className="grid lg:grid-cols-4 grid-cols-2 gap-y-16 lg:px-32 px-3 heightFull py-20 top-10 gap-x-3 lg:gap-x-5 relative">
        {featuredArray.map((item) => {
          return (
            <div key={item.id}>
              <div>
                <div className="relative">
                  <div className="flex lg:gap-4 gap-1 justify-center lg:left-6 left-2 lg:top-5 top-4 text-white font-serif absolute ">
                    <p className="flex px-2 lg:px-3 py-1 items-center gap-1 text-sm lg:text-xl btnMix2 rounded-lg ">
                      <img src="./assets/Icon3.png" alt="" className="w-4 h-4" />
                      {item.imgTag} %off
                    </p>
                    <p className="flex items-center px-2 lg:px-3 py-1 text-sm lg:text-xl bg-[#FFB302] rounded-lg gap-1">
                      <img src="./assets/Icon2.png" alt="" />
                      Fast
                    </p>
                  </div>
                  <img src={item.imgSrc} alt="" className="rounded-xl" />
                </div>

                <div className="flex gap-2 mt-5">
                  <img src={item.busImg} alt="" className="w-12 h-12" />
                  <span>
                    <p className="font-bold text-[#212121] font-serif">
                      {item.busTitle}
                    </p>
                    <p className="flex  items-center gap-1 font-bold text-[#FFB30E] font-serif text-base">
                      <img
                        src="./assets/Icon4.png"
                        className="w-4 relative h-4"
                        alt=""
                      />
                      {item.rating}
                    </p>
                  </span>
                </div>

                <div className="flex justify-between items-center mt-3 relative">
                  <p
                    className={
                      avail === item.availableTag ? "lightGreen" : "hidden"
                    }
                  >
                    {item.availableTag}
                  </p>

                  <p
                    className={
                      notAvail === item.notAvailable ? "lightOrange" : "hidden"
                    }
                  >
                    {item.notAvailable}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="relative px-32 flex justify-center py-20">
        <button className="flex items-center gap-2 px-3 rounded-lg text-white shadow-lg py-2 font-serif bg-[#FF9A0E]">
          View All <img src="./assets/Icon6.png" alt="" />
        </button>
      </div>
    </>
  );
};
