import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "~/components/ui/accordion";
import { Button } from "../ui/button";

const FAQSection = () => {
  return (
    <section className="mx-auto flex max-w-[1632px] flex-col gap-5 px-4 md:px-8">
      <div className="flex flex-col items-center">
        <h2>Frequently Asked Questions</h2>
        <p>Find answers to common questions about our services and approach.</p>
      </div>
      <div className="flex flex-col gap-5">
        <Accordion type="single" collapsible className="border-b">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <p>How long does implementation typically take?</p>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible className="border-b ">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <p>Do you offer customized solutions?</p>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible className="border-b ">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <p>What industries do you serve?</p>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible className="border-b ">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <p>How do you measure success?</p>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible className="border-b ">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <p>What support do you provide after implementation?</p>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="flex flex-col items-center gap-5">
        <p>
          Don&apos;t see your question here? Contact us directly and we&apos;ll
          be happy to help.
        </p>
        <Button variant="cta" size="lg">
          Contact Us
        </Button>
      </div>
    </section>
  );
};

export default FAQSection;
