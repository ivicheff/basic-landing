"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import type { ContentData, FAQItem } from "~/lib/content";
import contentData from "../../../src/content.ru.json";

interface FAQAccordionBlockProps {
  questions?: FAQItem[];
}

const FAQAccordionBlock = ({ questions }: FAQAccordionBlockProps) => {
  const faqItems = questions ?? (contentData as ContentData).faq.questions;
  const [openItem, setOpenItem] = useState<string | undefined>(undefined);

  if (!faqItems?.length) {
    return null;
  }

  return (
    <div className="flex flex-col gap-5 xl:min-w-3xl">
      {faqItems.map((item, index) => (
        <Accordion
          key={`faq-${index}`}
          type="single"
          value={openItem}
          onValueChange={setOpenItem}
          collapsible
          className="border-b"
        >
          <AccordionItem value={`item-${index}`}>
            <AccordionTrigger>
              <p>{item.question}</p>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">{item.answer}</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
};

export default FAQAccordionBlock;
