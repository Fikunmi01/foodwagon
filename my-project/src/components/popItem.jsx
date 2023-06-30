import React from "react";

export const PopItem = () => {
  const popArray = [
    {
      id: 0,
      imgSrc: "./assets/cheeseburger.png",
      mealTitle: "Cheese Burger",
      mealLocation: "Burger Arena",
      price: "3.88",
    },
    {
      id: 1,
      imgSrc: "./assets/toffee-cake.png",
      mealTitle: "Toffee's Cake",
      mealLocation: "Top Sticks",
      price: "4.00",
    },
    {
      id: 2,
      imgSrc: "./assets/dancake.png",
      mealTitle: "Dancake",
      mealLocation: "Cake World",
      price: "1.99",
    },
    {
      id: 3,
      imgSrc: "./assets/crispy-sandwich.png",
      mealTitle: "Crispy Sandwich",
      mealLocation: "FastFood Dine",
      price: "3.00",
    },
    {
      id: 4,
      imgSrc: "./assets/thai-soup.png",
      mealTitle: "Thai Soup",
      mealLocation: "Foody man",
      price: "2.70",
    },
  ];
  return (
    <div className="heightFull lg:px-32 relative mb-10 top-28 px-3 lg:top-72">
      <h1 className="text-center text-[#212121] font-serif text-3xl font-bold mb-10">
        Popular items
      </h1>

      <div className="lg:flex grid grid-cols-2 gap-4 relative ">
        <img src="./assets/arrow-left.png" className="absolute hidden lg:right-full lg:mt-28 w-24 h-24 " alt="" />

        {popArray.map((item) => {
          return (
            <div key={item.id}>
              <div>
                <img src={item.imgSrc} className="rounded-2xl" alt="" />
                <span>
                  <p className="font-serif lg:text-xl font-bold text-[#424242]">
                    {item.mealTitle}
                  </p>
                  <p className="flex items-center font-serif text-base text-[#FFB30E]">
                    <img className="w-5" src="./assets/map-marker.png" alt="" />
                    {item.mealLocation}
                  </p>
                  <p className="text-[#212121] font-bold text-lg font-serif">
                    ${item.price}
                  </p>

                  <button className="top-4 py-2 rounded-lg mb-10 text-center relative btnMix2 w-full font-serif text-white">
                    Order Now
                  </button>
                </span>
              </div>
            </div>
          );
        })}
        <img src="./assets/arrow-right.png" className="absolute lg:left-full w-24 h-24 hidden mt-28" alt="" />
      </div>
    </div>
  );
};
