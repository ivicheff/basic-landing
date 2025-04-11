"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import TestimonialCard from "~/components/ui/testimonial-card";
import { contentData } from "~/lib/content-data";

interface Testimonial {
  name: string;
  jobTitle: string;
  image: string;
  testimonial: string;
}

const TestimonialsCardCarousel = () => {
  const testimonials: Testimonial[] = contentData.testimonials.items;

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
        <div className="mt-0 flex items-center justify-center gap-2">
          <CarouselPrevious className="static mx-1 translate-y-0" />
          <CarouselNext className="static mx-1 translate-y-0" />
        </div>
      </Carousel>
    </div>
  );
};

export default TestimonialsCardCarousel;
