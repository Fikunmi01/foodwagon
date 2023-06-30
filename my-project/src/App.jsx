import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { HowItW } from "./components/howitw";
import { PopItem } from "./components/popItem";
import { FeatRest } from "./components/featRest";
import { Search } from "./components/search";
import { Deals } from "./components/deals";
import { Footer } from "./components/footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="relative h-10">
        <Navbar />
        <Hero />
        <HowItW />
        <PopItem />
        <FeatRest />
        <Search />
        <Deals />
        <Footer />
      </div>
    </>
  );
}

export default App;
