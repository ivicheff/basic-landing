import PriceCardBlock from "~/components/block/price-card-block";

const PricingSection = () => {
  return (
    <section className="flex flex-col" id="pricing">
      <div className="flex flex-col items-center gap-2 pb-8">
        <h2>Pricing</h2>
        <p className="text-muted-foreground text-center">
          We offer a range of pricing options to suit your needs.
        </p>
      </div>
      <PriceCardBlock />
    </section>
  );
};

export default PricingSection;
