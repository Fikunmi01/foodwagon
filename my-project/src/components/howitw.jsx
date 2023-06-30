import React from "react";

export const HowItW = () => {
  const mealArray = [
    {
      id: 1,
      imgSrc: "./assets/Image14.png",
      discountTag: 15,
      mealTitle: "Greys Vayage",
      daysLeft: "6 Days Remaining",
    },
    {
      id: 2,
      imgSrc: "./assets/Image15.png",
      discountTag: 10,
      mealTitle: "Greys Vayage",
      daysLeft: "6 Days Remaining",
    },
    {
      id: 3,
      imgSrc: "./assets/Image16.png",
      discountTag: 25,
      mealTitle: "Greys Vayage",
      daysLeft: "7 Days Remaining",
    },
    {
      id: 4,
      imgSrc: "./assets/Image17.png",
      discountTag: 20,
      mealTitle: "Greys Vayage",
      daysLeft: "8 Days Remaining",
    },
  ];

  const HowItwArray = [
    {
      id: 1,
      title: "Select location",
      description: "Choose the location where your food will be delivered",
      imgSrc: "./assets/map-marker.png",
    },
    {
      id: 2,
      title: "Choose order",
      description: "Choose over hundreds of menus to pick your favorite food",
      imgSrc: "./assets/IconsOrder.png",
    },
    {
      id: 3,
      title: "Pay advanced",
      description:
        "It's quick, safe, and simple. Select several methods of payment",
      imgSrc: "./assets/IconsAdvanced.png",
    },
    {
      id: 4,
      title: "Enjoy meals",
      description: "Food is made and delivered directly to your home",
      imgSrc: "./assets/Donut.png",
    },
  ];
  return (
    <div className="lg:px-28 px-3 mt-10">
      <div>
        <div className="flex gap-2 lg:gap-8 h-56 lg:h-96 overflow-x-scroll lg:overflow-hidden no-scrollbar">
          {mealArray.map((item) => {
            return (
              <div key={item.id}>
                <span>
                  <div className="w-24 relative">
                    <div className="bg-[#FFB800] lg:top-40 top-[5.3rem] absolute gap-1 py-0 lg:py-1 borderRadius items-center px-3 flex font-serif font-bold text-white text-4xl">
                      {item.discountTag}
                      <span className="text-base font-normal">
                        %<div>off</div>
                      </span>
                    </div>
                  </div>
                  <img className="rounded-2xl w-68" src={item.imgSrc} alt="" />
                </span>
                <span className="top-4 font-serif relative">
                  <p className="text-[#424242] text-lg font-bold">
                    {item.mealTitle}
                  </p>
                  <p className="text-sm font-bold text-[#F17228] px-4 py-1 rounded-lg bg-[#F172281A] w-40">
                    {item.daysLeft}
                  </p>
                </span>
              </div>
            );
          })}
        </div>

        <div className="lg:top-36 top-10 relative">
          <h2 className="text-center font-serif font-bold text-[#F17228] text-3xl">How does it work</h2>

          <div className="lg:flex grid grid-cols-2 lg:gap-16 gap-4 mt-10 lg:px-32 px-3 ">
            {HowItwArray.map((item) => {
              return (
                <div key={item.id} className="relative mx-auto">
                  <div className="flex lg:w-1/2 justify-center flex-col w-28 items-center">
                    <span>
                      <img src={item.imgSrc} className="h-32 w-32" alt="" />
                    </span>
                    <span className="text-center">
                      <p className="h-16 text-xl font-serif font-bold text-[#434343]">{item.title}</p>
                      <p className="font-serif  text-sm text-[#9E9E9E]">{item.description}</p>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
