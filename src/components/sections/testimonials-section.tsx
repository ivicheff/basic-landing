import TestimonialsCardCarousel from "../block/testimonials-card-carousel";

const TestimonialsSection = () => {
  return (
    <section className="flex flex-col gap-5" id="testimonials">
      <div className="flex flex-col items-center">
        <h2>What Our Clients Say</h2>
        <p>
          Don&apos;t just take our word for it - hear from some of our satisfied
          clients.
        </p>
      </div>
      <TestimonialsCardCarousel />
    </section>
  );
};

export default TestimonialsSection;
