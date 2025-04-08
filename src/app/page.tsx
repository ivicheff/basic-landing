import AboutSection from "~/components/sections/about-section";
import AdvantagesSection from "~/components/sections/advantages-section";
import ContactsSection from "~/components/sections/contacts-section";
import FAQSection from "~/components/sections/faq-section";
import Footer from "~/components/sections/footer";
import Header from "~/components/sections/header";
import HeroSection from "~/components/sections/hero-section";
import PricingSection from "~/components/sections/pricing-section";
import StepsSection from "~/components/sections/steps-section";
import TestimonialsSection from "~/components/sections/testimonials-section";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="mx-auto flex max-w-[94rem] flex-col gap-20 px-4 pt-5 pb-10 md:pt-10 md:pb-20 lg:gap-30 lg:px-8 ">
        <HeroSection />
        <AdvantagesSection />
        <AboutSection />
        <PricingSection />
        <TestimonialsSection />
        <StepsSection />
        <ContactsSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
