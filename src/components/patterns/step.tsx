import Image from "next/image";
import type { ReactNode } from "react";
import { Separator } from "~/components/ui/separator";

interface StepProps {
  image: string;
  title: string;
  description: ReactNode;
  number: number;
}

const Step = ({ image, title, description, number }: StepProps) => {
  return (
    <div className="flex gap-2 md:gap-10">
      <div className="flex w-full flex-1 flex-col gap-2 max-md:hidden">
        <Image
          src={image}
          className="h-auto w-full rounded-md object-cover"
          alt="Step"
          width={100}
          height={100}
        />
      </div>
      <div className="flex w-fit">
        <div className="flex h-full flex-col items-center gap-3 md:gap-5">
          <div className="flex h-7 w-7 items-center justify-center rounded-full border border-2 bg-transparent md:h-12 md:w-12">
            <h3>{number}</h3>
          </div>
          <Separator className="flex-1 border-1" orientation="vertical" />
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-4 md:gap-5">
        <Image
          src={image}
          className="h-auto w-full rounded-md object-cover md:hidden"
          alt="Step"
          width={100}
          height={100}
        />
        <h3>{title}</h3>
        {description}
      </div>
    </div>
  );
};

export default Step;
