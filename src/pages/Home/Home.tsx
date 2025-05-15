import Banner from "./home/Banner";
import TopCategoryBook from "./home/TopCategoryBook";
import TopReadSellBooks from "./home/TopReadSellBooks";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <TopReadSellBooks />
      <TopCategoryBook />
    </div>
  );
};

export default Home;
