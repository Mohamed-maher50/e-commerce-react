import React from "react";
import Breadcrumbs from "../components/Breadcrumbs/Index";
import SwiperProduct from "../components/SwiperProduct/SwiperProduct";
import SwiperAdds from "../components/SwiperAdds/SwiperAdds";
import Index from "../components/categories-swiper";

const Home = () => {
  return (
    <div>
      <div className="container mx-auto">
        <Breadcrumbs />
        <SwiperAdds />
        <Index />
        <SwiperProduct />
      </div>
    </div>
  );
};

export default Home;
