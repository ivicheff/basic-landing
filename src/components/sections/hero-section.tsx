import { Button } from "~/components/ui/button";
import AvatarStack from "../patterns/avatar-stack";
import PlatformCardStack from "../patterns/platform-card-stack";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="mx-auto flex max-w-[1632px] flex-col gap-5 md:gap-10 lg:flex-row">
      <div className="flex flex-1 flex-col justify-end gap-5">
        <div className="flex flex-col gap-2">
          <h1 className="">
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut.
          </h1>
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
            vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor
            ornare leo, non suscipit magna interdum eu.
          </p>
        </div>
        <div className="flex items-center justify-between gap-5">
          <div className="flex flex-col gap-5">
            <Button variant="cta" size="lg">
              Get Started
            </Button>
            <div className="flex flex-col gap-1">
              <AvatarStack />
              <p className="max-w-96 leading-none">
                <small className="leading-none">
                  40,000+ Service Business Owners have already flipped the
                  script on client generation and you can too...
                </small>
              </p>
            </div>
          </div>
          <div className="hidden 2xl:block">
            <PlatformCardStack />
          </div>
        </div>
      </div>
      <div className="flex-1">
        <Image
          src="/default.png"
          alt="Hero"
          className="rounded-lg object-cover"
          width={1632}
          height={1088}
        />
      </div>
    </section>
  );
};

export default HeroSection;
