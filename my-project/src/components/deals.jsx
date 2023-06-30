import React, { useState } from "react";

export const Deals = () => {
  const [reverse, setReverse] = useState(2);
  const dealsArray = [
    {
      id: 1,
      dealsTitle: "Best deals",
      dealsDescription:
        "Enjoy the large size of sandwiches. Complete perfect slice of sandwiches.",
      dealsImg: "./assets/sandwich.jpg",
      spanItem: "Crispy Sandwiches",
    },
    {
      id: 2,
      dealsTitle: "Celebrate parties with",
      dealsDescription:
        "Get the best fried chicken smeared with a lip smacking lemon chill flavor. ",
      dealsImg: "./assets/chicken1.jpg",
      spanItem: "Fried Chicken",
    },
    {
      id: 3,
      dealsTitle: "Wanna eat hot & spicy",
      dealsDescription:
        "Pair up with a friend and enjoy the hot and crispy pops. Try it with the best deals.",
      dealsImg:
        "./assets/pizza1.jpg                                                                                                                                                                                                                                               ",
      spanItem: "Pizza?",
    },
  ];
  return (
    <>
      <div className="lg:px-32 px-3 py-20">
        {dealsArray.map((item) => {
          return (
            <div
              key={item.id}
              className={`${reverse === item.id ? "mb-14 rounded-lg boxShadow gap-2 items-center flex relative lg:mx-auto lg:w-9/12" : "lg:mx-auto lg:w-9/12 mb-14 rounded-lg boxShadow gap-2 items-center flex relative flex-row-reverse"}`}
            >
              <div className="lg:w-5/12 w-full px-3 relative py-0 lg:px-10">
                <h2 className="font-serif font-bold text-xl lg:text-3xl text-[#212121]">
                  {item.dealsTitle}{" "}
                  <span className="backgroundMix">{item.spanItem}</span>
                </h2>
                <p className="font-serif text-[#616161] lg:text-base text-xs lg:mb-7">
                  {item.dealsDescription}
                </p>

                <div className="">
                  <button className="lg:px-16 px-2 py-2 text-center btnMix rounded-lg text-white flex text-xs mt-2 lg:mt-0 lg:text-sm items-center gap-2 font-serif font-bold">
                    PROCEED TO ORDER <img src="./assets/Icon6.png" alt="" />
                  </button>
                </div>
              </div>
              <img
                src={item.dealsImg}
                className={` ${
                  reverse === item.id ? "lg:w-7/12 w-1/2 lg:h-80 h-60 rounded-lg rounded-l-none" : "lg:w-7/12 w-1/2 lg:h-80 h-60 rounded-lg rounded-r-none"
                }`}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </>
  );
};
