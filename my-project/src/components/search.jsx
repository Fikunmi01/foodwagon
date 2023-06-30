import React from "react";

export const Search = () => {
  const searchArray = [
    {
      id: 0,
      imgSrc: "./assets/Image34.png",
      imgName: "Pizza",
    },
    {
      id: 1,
      imgSrc: "./assets/Image35.png",
      imgName: "Burger",
    },
    {
      id: 2,
      imgSrc: "./assets/Image36.png",
      imgName: "Noodles",
    },
    {
      id: 3,
      imgSrc: "./assets/Image37.png",
      imgName: "Sub-sandwich",
    },
    {
      id: 4,
      imgSrc: "./assets/Image38.png",
      imgName: "Chowmein",
    },
    {
      id: 5,
      imgSrc: "./assets/Image39.png",
      imgName: "Steak",
    },
  ];
  return (
    <>
      <div className="relative lg:px-28 lg:py-20 lg:pb-32">
        <div className="lg:flex lg:justify-between lg:items-center">
          <h1 className="text-3xl px-3 py-6 font-serif font-bold text-[#212121]">
            Search by Food
          </h1>
          <div className="lg:flex lg:items-center hidden">
            <p className="flex items-center gap-2">
              View All
              <img src="./assets/Icon5.png" alt="" />
            </p>
            <span className="flex items-centerx">
              <div>
                <img
                  src="./assets/arrow-left.png"
                  className="w-24 h-24"
                  alt=""
                />
              </div>
              <img
                src="./assets/arrow-right.png"
                className="w-24 h-24"
                alt=""
              />
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:inline-flex">
        {searchArray.map((item) => {
          return (
            <div
              className="gap-5 pb-10 lg:pb-20 lg:w-40 lg:mr-6 lg:inline-flex px-3"
              key={item.id}
            >
              <div>
                <img className="w-full rounded-full" src={item.imgSrc} alt="" />
                <p className="text-center font-serif text-[#212121] font-bold text-lg">
                  {item.imgName}
                </p>
              </div>
            </div>
          );
        })}
        </div>

        <div className="bg-white shadow-xl boxShadow lg:mx-32 rounded-3xl flex lg:py-8 px-2 py-14 my-10 mx-6 lg:px-10 items-center">
          <div className="flex flex-row border-r-2 border-solid border-[#CFCFCF] w-2/3 items-center gap-1 ">
            <img src="./assets/Icon9.png" className="lg:w-24 w-7 h-7 lg:h-24" alt="" />
            <h2 className="backgroundMix font-serif font-bold lg:text-2xl text-sm lg:w-2/3">
              Daily Discounts
            </h2>
          </div>
          <div className="flex flex-row items-center border-r-2 border-solid border-[#CFCFCF] gap-1 w-2/3">
            <img src="./assets/Icon7.png" className="lg:w-24 w-7 h-7 lg:h-24 ml-1 lg:ml-4" alt="" />
            <h2 className="backgroundMix font-serif font-bold lg:text-2xl text-sm w-1/2 lg:w-2/3">
              Live Tracing
            </h2>
          </div>
          <div className="flex flex-row items-center w-2/3 gap-1">
            <img src="./assets/Icon8.png" className="lg:w-24 w-7 h-7 lg:h-24 ml-1 lg:ml-4" alt="" />
            <h2 className="backgroundMix font-serif font-bold text-sm lg:text-2xl lg:w-2/3">
              Quick Delivery
            </h2>
          </div>
        </div>
      </div>

      <div>
        <img  className="h-44 w-full" src="./assets/AppDownload.png" alt="" />
      </div>
    </>
  );
};
