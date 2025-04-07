import TestimonialsCardCarousel from "../block/testimonials-card-carousel";

const TestimonialsSection = () => {
  return (
    <section className="flex flex-col" id="testimonials">
      <div className="flex flex-col items-center gap-2 pb-8">
        <h2>What Our Clients Say</h2>
        <p className="text-muted-foreground text-center">
          Don&apos;t just take our word for it - hear from some of our satisfied
          clients.
        </p>
      </div>
      <TestimonialsCardCarousel />
    </section>
  );
};

export default TestimonialsSection;
