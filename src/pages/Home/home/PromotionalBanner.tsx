import Button from "../../../components/ui/Button";

const PromotionalBanner = () => {
  return (
   <section className="bg-dark-card py-16">
     <div className="relative max-w-7xl mx-auto rounded-2xl bg-gradient-to-r  text-white  flex items-center justify-between h-[400px]">
      <img
        src="top-categories-bg.jpg"
        alt="Promotional Banner"
        className="h-full rounded-2xl w-full object-cover"
      />
      <div className="absolute">
        <div>
          <p className="text-xl font-semibold">Get 25%</p>
          <h1 className="text-5xl font-bold my-2">
            Discount In All <br /> Kind Of Super Selling
          </h1>
        </div>
        <div>
          <Button name="Shop Now " />
        </div>
      </div>
    </div>
   </section>
  );
};

export default PromotionalBanner;
