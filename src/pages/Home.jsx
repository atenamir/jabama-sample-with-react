import React from "react";
import Search from "../components/Search";
import HeroSection from "../components/HeroSection";
import SuggestedList from "../components/suggestedList/SuggestedList.jsx";
import Header from '../components/Header.jsx'

function Home() {
  return (
    <div className="w-full ">
      <Header />
      {/* hero section */}
      <HeroSection />
      {/* search section */}
      <div className="w-full flex items-center justify-center">
        <Search />
      </div>
      {/* all suggested places and homes */}
     <SuggestedList />
    </div>
  );
}

export default Home;
