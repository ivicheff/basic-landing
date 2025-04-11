import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { contentData } from "~/lib/content-data";
import AvatarStack from "../patterns/avatar-stack";
import PlatformCardStack from "../patterns/platform-card-stack";

const HeroSection = () => {
  return (
    <section className="mx-auto flex max-w-[102rem] flex-col gap-5 md:gap-10 lg:flex-row">
      <div className="flex flex-1 flex-col justify-end gap-5">
        <div className="flex flex-col gap-2">
          <h1 className="">{contentData.hero.title}</h1>
          <p className="text-muted-foreground">
            {contentData.hero.description}
          </p>
        </div>
        <div className="flex items-center justify-between gap-5">
          <div className="flex flex-col gap-5">
            <Button variant="cta" size="lg" className="shadow-lg">
              <Link href={contentData.hero.cta.url}>
                {contentData.hero.cta.text}
              </Link>
            </Button>
            <div className="flex flex-col gap-1">
              <AvatarStack />
              <p className="max-w-96 leading-none">
                <small className="text-muted-foreground leading-none">
                  {contentData.hero.testimonialText}
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
          src={contentData.hero.image.src}
          alt={contentData.hero.image.alt}
          className="h-full w-full rounded-lg object-cover shadow-xl"
          width={1632}
          height={1088}
        />
      </div>
    </section>
  );
};

export default HeroSection;
