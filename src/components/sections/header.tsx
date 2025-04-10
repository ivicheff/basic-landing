"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import Logo from "~/components/ui/logo";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import SocialIcons from "~/components/ui/social-icons";
import { useScrollDirection } from "~/hooks/useScrollDirection";
import { contentData } from "~/lib/content-data";
import { cn } from "~/lib/utils";
import CustomLink from "../ui/custom-link";

const Header = () => {
  const isVisible = useScrollDirection();

  return (
    <header
      className={cn(
        "bg-background/80 fixed top-0 right-0 left-0 z-50 border-b shadow-sm backdrop-blur-sm transition-transform duration-300",
        !isVisible && "-translate-y-full",
      )}
    >
      <div className="mx-auto flex max-w-[102rem] items-center justify-between px-4 py-3 lg:px-8 lg:py-5">
        <div className="">
          <Logo />
        </div>
        <div className="text-muted-foreground flex flex-1 items-center justify-center gap-8 max-2xl:hidden">
          <Link href={`${contentData.links.phone.url}`}>
            {contentData.links.phone.text}
          </Link>
          <Link href={`${contentData.links.email.url}`}>
            {contentData.links.email.text}
          </Link>
        </div>
        <div className="hidden items-center gap-8 xl:flex 2xl:flex-1">
          <nav className="flex items-center gap-9 text-nowrap">
            {contentData.header.navigation?.map((item) => (
              <CustomLink key={item.url} href={item.url}>
                {item.text}
              </CustomLink>
            ))}
          </nav>
          <Link href={contentData.header.cta.url}>
            <Button className="min-w-40 flex-1 text-nowrap">
              {contentData.header.cta.text}
            </Button>
          </Link>
        </div>
        <div className="xl:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="">
                <Menu className="size-7" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="text-3xl font-bold">
                  {contentData.links.logo.text}
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col items-start space-y-5 p-4 text-xl">
                {contentData.header.navigation?.map((item) => (
                  <CustomLink key={item.url} href={item.url}>
                    {item.text}
                  </CustomLink>
                ))}
              </nav>
              <div className="text-md text-muted-foreground flex flex-col gap-8 p-4">
                <div className="flex flex-col gap-2">
                  <Link href={contentData.links.phone.url}>
                    {contentData.links.phone.text}
                  </Link>
                  <Link href={contentData.links.email.url}>
                    {contentData.links.email.text}
                  </Link>
                </div>
                <SocialIcons />
              </div>
              <SheetFooter>
                <Button className="w-full">
                  {contentData.header.cta.text}
                </Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
