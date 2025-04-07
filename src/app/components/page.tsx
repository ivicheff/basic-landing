import AchievementStatisticCard from "~/components/ui/statistic-card";
import AdvantagesCard from "~/components/ui/advantages-card";
import AvatarStack from "~/components/patterns/avatar-stack";
import PlatformReviews from "~/components/ui/platform-reviews-card";
import PriceCard from "~/components/ui/price-card";
import Step from "~/components/patterns/step";
import TestimonialCard from "~/components/ui/testimonial-card";
import FormCard from "~/components/ui/form-card";
import NewsletterForm from "~/components/forms/newsletter-form";
import Navbar from "~/components/sections/header";
import Footer from "~/components/sections/footer";
import { Clock } from "lucide-react";
import AdvantagesCardBlock from "~/components/block/advantages-card-block";
import AboutSection from "~/components/sections/about-section";
import AdvantagesSection from "~/components/sections/advantages-section";
import StepsSection from "~/components/sections/steps-section";
import StepsCardBlock from "~/components/block/steps-card-block";
import PricingSection from "~/components/sections/pricing-section";
import PriceCardBlock from "~/components/block/price-card-block";
import TestimonialsCardCarousel from "~/components/block/testimonials-card-carousel";
import TestimonialsSection from "~/components/sections/testimonials-section";
export default function Page() {
  return (
    <div className="flex flex-col-reverse gap-10">
      <PlatformReviews
        rating={4.8}
        link="https://www.google.com"
        image="/default.png"
      />
      <AvatarStack />
      <AchievementStatisticCard title="500+" description="Clients Served" />
      <AdvantagesCard
        title="Fast Implementation"
        description="Quick deployment of solutions to minimize disruption to your business operations."
        icon={<Clock className="h-8 w-8 " />}
        iconColor="blue-400"
      />
      <PriceCard
        title="Business Consulting"
        description="Comprehensive marketing strategies to increase your online presence and drive customer acquisition."
        price="Starting at $2,000/month"
        image="/default.png"
        buttonText="Get Started"
      />
      <Step
        image="/default.png"
        title="Business Consulting"
        description={
          <span className="text-muted-foreground flex flex-col gap-2">
            {" "}
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris.
            </p>
            <p>
              Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
              Vestibulum auctor ornare leo, non suscipit magna interdum eu.
              Curabitur pellentesque nibh nibh, at maximus ante fermentum sit
              amet.
            </p>
          </span>
        }
        number={1}
      />
      <TestimonialCard
        name="Sarah Johnson"
        jobTitle="Product Manager"
        image="https://github.com/shadcn.png"
        testimonial="This product has completely transformed our workflow. It's intuitive, powerful, and a joy to use every day"
      />
      <FormCard />
      <NewsletterForm />
      <Navbar />
      <Footer />
      <AdvantagesCardBlock />
      <AboutSection />
      <AdvantagesSection />
      <StepsCardBlock />
      <StepsSection />
      <PricingSection />
      <PriceCardBlock />
      <TestimonialsCardCarousel />
      <TestimonialsSection />
    </div>
  );
}