import React from "react";
import Search from "../components/Search";
import HeroSection from "../components/HeroSection";

function Home() {
  return (
    <div className="w-full ">
      <HeroSection />
      {/* search section */}
      <div className="w-full flex items-center justify-center">
        <Search />
      </div>
    </div>
  );
}

export default Home;
