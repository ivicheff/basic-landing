import contentData from "../../../src/content.ru.json";
import TestimonialsCardCarousel from "../block/testimonials-card-carousel";

const TestimonialsSection = () => {
  return (
    <section className="flex flex-col" id="testimonials">
      <div className="flex flex-col items-center gap-2 pb-8">
        <h2>{contentData.testimonials.title}</h2>
        <p className="text-muted-foreground text-center">
          {contentData.testimonials.description}
        </p>
      </div>
      <TestimonialsCardCarousel />
    </section>
  );
};

export default TestimonialsSection;
