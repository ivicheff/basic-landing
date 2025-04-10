"use client";

import FAQAccordionBlock from "~/components/block/faq-accordion-block";
import { Button } from "~/components/ui/button";
import type { ContentData } from "~/lib/content";
import contentData from "../../../src/content.ru.json";
import Link from "next/link";

const FAQSection = () => {
  const faqData = (contentData as ContentData).faq;

  if (!faqData) {
    return null;
  }

  return (
    <section className="mx-auto flex max-w-2xl items-center flex-col" id="faq">
      <div className="flex flex-col items-center gap-2 pb-8">
        <h2>{faqData.title}</h2>
        <p className="text-muted-foreground text-center">
          {faqData.description}
        </p>
      </div>
      <FAQAccordionBlock />
      <div className="flex flex-col items-center gap-5 pt-10">
        <h3 className="text-center">{faqData.callToAction.text}</h3>
        <Link href={contentData.faq.callToAction.button.url}>
          <Button variant="cta" size="lg" className="shadow-lg">
            {faqData.callToAction.button.text}
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default FAQSection;
