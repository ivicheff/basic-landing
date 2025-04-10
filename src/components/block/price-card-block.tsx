import PriceCard from "~/components/ui/price-card";
import { contentData } from "~/lib/content-data";
const PriceCardBlock = () => {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      {contentData.pricing.cards.map((card, index) => (
        <PriceCard
          key={index}
          title={card.title}
          description={card.description}
          price={card.price}
          image={card.image}
          buttonText={card.buttonText}
        />
      ))}
    </div>
  );
};

export default PriceCardBlock;
