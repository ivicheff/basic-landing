import PriceCardBlock from "~/components/block/price-card-block";

const PricingSection = () => {
  return (
    <section className="flex flex-col gap-5" id="pricing">
      <div className="flex flex-col items-center">
        <h2>Pricing</h2>
        <p>We offer a range of pricing options to suit your needs.</p>
      </div>
      <PriceCardBlock />
    </section>
  );
};

export default PricingSection;
