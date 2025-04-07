import PriceCard from "~/components/ui/price-card";

const PriceCardBlock = () => {
  return (
    <div className="grid grid-cols-1 gap-5  lg:grid-cols-3">
      <PriceCard
        title="Business Consulting"
        description="Comprehensive marketing strategies to increase your online presence and drive customer acquisition."
        price="Starting at $2,000/month"
        image="/default.png"
        buttonText="Get Started"
      />
      <PriceCard
        title="Digital Marketing"
        description="Comprehensive marketing strategies to increase your online presence and drive customer acquisition."
        price="Starting at $1,500/month"
        image="/default.png"
        buttonText="Get Started"
      />
      <PriceCard
        title="Software Development"
        description="Comprehensive marketing strategies to increase your online presence and drive customer acquisition."
        price="Starting at $5,000/project"
        image="/default.png"
        buttonText="Get Started"
      />
    </div>
  );
};

export default PriceCardBlock;
