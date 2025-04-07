"use client";

import FAQAccordionBlock from "~/components/block/faq-accordion-block";
import { Button } from "~/components/ui/button";
import type { ContentData } from "~/lib/content";
import contentData from "../../../src/content.ru.json";

const FAQSection = () => {
  const faqData = (contentData as ContentData).faq;

  if (!faqData) {
    return null;
  }

  return (
    <section className="mx-auto flex max-w-[1632px] flex-col" id="faq">
      <div className="flex flex-col items-center gap-2 pb-8">
        <h2>{faqData.title}</h2>
        <p className="text-muted-foreground text-center">
          {faqData.description}
        </p>
      </div>
      <FAQAccordionBlock />
      <div className="flex flex-col items-center gap-5 pt-10">
        <p className="text-center">{faqData.callToAction.text}</p>
        <Button variant="cta" size="lg">
          {faqData.callToAction.button.text}
        </Button>
      </div>
    </section>
  );
};

export default FAQSection;
