import React from "react";

export const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  const cityArray = [
    {
      id: 1,
      city1: "San Francisco",
      city2: "Miami",
      city3: "San Diego",
      city4: "East Bay",
      city5: "Long Beach",
    },
    {
      id: 2,
      city1: "Los Angeles",
      city2: "Washington DC",
      city3: "Seattle",
      city4: "Portland",
      city5: "Nashville",
    },
    {
      id: 3,
      city1: "New York City",
      city2: "Orange County",
      city3: "Atlanta",
      city4: "Charlotte",
      city5: "Denver",
    },
    {
      id: 4,
      city1: "Chicago",
      city2: "Phoenix",
      city3: "Las Vegas",
      city4: "Sacramento",
      city5: "Okhlahoma City",
    },
    {
      id: 5,
      city1: "Columbus",
      city2: "New Mexico",
      city3: "Albuquerque",
      city4: "Sacramento",
      city5: "New Orleans",
    },
  ];

  const linksArray = [
    {
      id: 1,
      heading: "Company",
      link1: "About us",
      link2: "Team",
      link3: "Careers",
      link4: "Blog",
    },
    {
      id: 2,
      heading: "Contact",
      link1: "Help & Support",
      link2: "Partner with us",
      link3: "Ride with us",
      link4: "",
    },
    {
      id: 3,
      heading: "Legal",
      link1: "Terms & Conditions",
      link2: "Refund & Cancellation",
      link3: "Privacy Policy",
      link4: "Cookie Policy",
    },
  ];
  return (
    <>
      <div className="relative">
        <div className="">
          <img src="/assets/Image43.png" className="relative h-60 w-full" alt="" />
          <div className="absolute lg:top-20 top-10 lg:left-1/3 text-center">
            <h2 className="text-white font-serif font-bold mb-5 lg:text-4xl text-3xl w-full lg:w-2/3">
              Are you ready to order with the best deals?
            </h2>
            <button className="flex items-center lg:left-40 left-1/4 relative btnMix2 px-6 py-3 rounded-lg font-serif text-white text-md gap-2">
              PROCEED TO ORDER <img src="./assets/Icon6.png" alt="" />
            </button>
          </div>
        </div>

        <div className="bg-[#212121] text-white lg:px-32 px-3 py-10 lg:py-20 h-fit font-serif relative">
          <div className="border-[#424242] border-b-2">
            <h3 className="font-bold text-xl">Our top cities</h3>
            {cityArray.map((item) => {
              return (
                <div
                  className="lg:inline-flex lg:mr-24 mt-3 lg:mt-8 text-[#F5F5F5] lg:mb-20 mb-5"
                  key={item.id}
                >
                  <ul className="lg:leading-loose">
                    <li>{item.city1}</li>
                    <li>{item.city2}</li>
                    <li>{item.city3}</li>
                    <li>{item.city4}</li>
                    <li>{item.city5}</li>
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="flex lg:gap-24 flex-col lg:flex-row lg:justify-between">
            <div className="lg:flex">
              {linksArray.map((item) => {
                return (
                  <div key={item.id}>
                    <div className="text-[#F5F5F5] mt-4 lg:mt-8">
                      <ul className="mr-16 leading-loose">
                        <h3 className="font-bold lg:pb-8 text-xl">
                          {item.heading}
                        </h3>

                        <li>{item.link1}</li>
                        <li>{item.link2}</li>
                        <li>{item.link3}</li>
                        <li>{item.link4}</li>
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col gap-4 top-4 lg:top-8 relative h-56">
              <h3 className="font-bold text-[#7c7979]">FOLLOW US</h3>
              <span className="flex   items-center gap-3">
                <img src="/assets/1.png" alt="" />
                <img src="/assets/2.png" alt="" />
                <img src="/assets/3.png" alt="" />
              </span>

              <p className="font-bold text-[#BBBBBB]">
                Receive exclusive offers in your mailbox
              </p>
              <div className="flex lg:gap-5 lg:flex-row gap-y-2 flex-col">
                <span className="relative flex gap-3">
                  <img
                    src="/assets/envelope.png"
                    className="absolute top-3 left-2 gap-2 w-5 h-4 "
                    alt=""
                  />
                  <input
                    className="bg-[#424242] w-full px-10  py-2 text-base outline-none rounded-md"
                    placeholder="Enter your email"
                    type="text"
                    name=""
                    id=""
                  />
                </span>

                <button className="btnMix px-3 rounded-lg py-2">Subscribe</button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#212121] relative text-white font-serif">
          <p className="lg:mx-32 mx-3 border-t-2 py-2 h-10 border-[#424242]">
            All rights Reserved &#169; 3FK5, {year}
          </p>
          <p className="lg:absolute lg:bottom-2 px-3 h-3 lg:right-32 pb-6">
            Made with &#128420; by 3FK5 👨🏽
          </p>
        </div>
      </div>
    </>
  );
};
