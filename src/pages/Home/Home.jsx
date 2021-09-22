import React from "react";
import Banner from "../../components/Banner/Banner";
import Categories from "../../components/Categories/Categories";
import HotProducts from "../../components/HotProducts/HotProducts";

function Home() {
  return (
    <div>
      <Banner />
      <Categories />
      <HotProducts/>
    </div>
  );
}

export default Home;
