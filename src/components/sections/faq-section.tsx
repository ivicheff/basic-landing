import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "~/components/ui/accordion";
import { Button } from "../ui/button";

const FAQSection = () => {
  return (
    <section className="mx-auto flex max-w-[1632px] flex-col ">
      <div className="flex flex-col items-center gap-2 pb-8">
        <h2>Frequently Asked Questions</h2>
        <p className="text-muted-foreground text-center">
          Find answers to common questions about our services and approach.
        </p>
      </div>
      <div className="flex flex-col gap-5 xl:min-w-3xl">
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
        <Accordion type="single" collapsible className="border-b">
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
        <Accordion type="single" collapsible className="border-b">
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
        <Accordion type="single" collapsible className="border-b">
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
        <Accordion type="single" collapsible className="border-b">
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
      <div className="flex flex-col items-center gap-5 pt-10 ">
        <p className=" text-center">
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
