import StepsCardBlock from "../block/steps-card-block";

const StepsSection = () => {
  return (
    <section className="flex flex-col gap-5" id="steps">
      <div className="flex flex-col items-center justify-center gap-2">
        <h2>Steps to success</h2>
        <p>
          We deliver exceptional results through our comprehensive suite of
          business solutions.
        </p>
      </div>
      <StepsCardBlock />
    </section>
  );
};

export default StepsSection;
