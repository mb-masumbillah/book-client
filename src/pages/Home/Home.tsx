import Authors from "./home/Authors";
import Banner from "./home/Banner";
import BestSells from "./home/BestSells";
import FeaturedBook from "./home/FeaturedBook";
import News from "./home/News";
import PromotionalBanner from "./home/PromotionalBanner";
import TopCategoryBook from "./home/TopCategoryBook";
import TopReadBooks from "./home/TopReadBooks";
import TopReadSellBooks from "./home/TopReadSellBooks";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <TopReadSellBooks />
      <TopReadBooks/>
      <FeaturedBook />
      <TopCategoryBook />
      <PromotionalBanner/>
      <BestSells />
      <News />
      <Authors />
    </div>
  );
};

export default Home;
