export const Navbar = () => {
  return (
    <>
      <div className="flex py-4 lg:px-16 text-[#424242] px-3 font-serif lg:justify-around lg:items-center ">
        <div className="lg:w-52 w-2/3">
          <img src="./assets/logo.png" alt="" className="" />
        </div>
        <div className="lg:block hidden">
          <p className="flex items-center text-[#424242] text-lg">
            <span className="pr-2 font-bold ">Deliver to:</span>
            <img src="./assets/map-marker.png" alt="" className="w-6" />
            Current Location
            <span className="pl-2 font-bold">Mohammadpur Bus Stand, Dhaka</span>
          </p>
        </div>
        <div className="lg:flex hidden items-center gap-3">
          <button className="font-bold flex items-center text-lg gap-x-2">
            <img src="./assets/Search.png" alt="" />
            Search Food
          </button>
          <button className="flex px-4 py-1 text-[#FF8A00] text-lg shadow-lg bg-white rounded-lg items-center gap-x-2 font-serif">
            <img src="./assets/user.png" alt="" />
            Login
          </button>
        </div>
      </div>
    </>
  );
};
