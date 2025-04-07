import { type ReactElement } from "react";
import Step from "~/components/patterns/step";
import contentData from "~/content.ru.json";
import type { ContentData } from "~/types/content";

const content = contentData as ContentData;

const StepsCardBlock = (): ReactElement => {
  return (
    <div className="flex flex-col gap-3 md:gap-5">
      {content.steps.items.map((step) => (
        <Step
          key={step.number}
          image={step.image}
        title={step.title}
          description={
            <span className="flex flex-col gap-2">
              {step.description.map((paragraph, pIndex) => (
                <p key={pIndex}>{paragraph}</p>
              ))}
            </span>
          }
          number={step.number}
          reverse={step.reverse}
        />
      ))}
    </div>
  );
};

export default StepsCardBlock;
