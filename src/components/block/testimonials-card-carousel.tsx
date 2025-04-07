import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import TestimonialCard from "~/components/ui/testimonial-card";

const testimonials = [
  {
    name: "John Doe",
    jobTitle: "CEO",
    image: "/default.png",
    testimonial:
      "This product has completely transformed our workflow. It's intuitive, powerful, and a joy to use every day",
  },
  {
    name: "Jane Smith",
    jobTitle: "CTO",
    image: "/default.png",
    testimonial:
      "The performance improvements we've seen since implementing this solution have been remarkable.",
  },
  {
    name: "Alex Johnson",
    jobTitle: "Product Manager",
    image: "/default.png",
    testimonial:
      "Our team has become much more efficient after adopting this platform. Highly recommended!",
  },
  {
    name: "Sarah Williams",
    jobTitle: "Lead Developer",
    image: "/default.png",
    testimonial:
      "The integration capabilities are exceptional. It connects seamlessly with all our existing tools.",
  },
  {
    name: "Michael Brown",
    jobTitle: "Marketing Director",
    image: "/default.png",
    testimonial:
      "The analytics features have given us insights we never had before. Game-changing for our strategy.",
  },
];

const TestimonialsCardCarousel = () => {
  return (
    <div className="w-full">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {testimonials.map((testimonial, index) => (
            <CarouselItem
              key={index}
              className="pl-2 sm:basis-full md:basis-1/2 md:pl-4 lg:basis-1/3"
            >
              <TestimonialCard
                name={testimonial.name}
                jobTitle={testimonial.jobTitle}
                image={testimonial.image}
                testimonial={testimonial.testimonial}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="mt-4 flex items-center justify-center gap-2">
          <CarouselPrevious className="static mx-1 translate-y-0" />
          <CarouselNext className="static mx-1 translate-y-0" />
        </div>
      </Carousel>
    </div>
  );
};

export default TestimonialsCardCarousel;
