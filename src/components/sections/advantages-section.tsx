import AdvantagesCardBlock from "~/components/block/advantages-card-block";

const AdvantagesSection = () => {
  return (
    <section className="flex flex-col" id="advantages">
      <div className="flex flex-col items-center gap-2 pb-8">
        <h2>Why Choose Us</h2>
        <p className="text-muted-foreground text-center">
          We deliver exceptional results through our comprehensive suite of
          business solutions.
        </p>
      </div>
      <div>
        <AdvantagesCardBlock />
      </div>
    </section>
  );
};

export default AdvantagesSection;
