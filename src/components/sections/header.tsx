import { Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import SocialIcons from "~/components/ui/social-icons";
import contentData from "~/content.ru.json";
import type { ContentData } from "~/types/content";
import CustomLink from "../ui/custom-link";

const content = contentData as unknown as ContentData;

const Header = () => {
  return (
    <header className="bg-background/80 fixed top-0 right-0 left-0 z-50 border-b backdrop-blur-sm">
      <div className="mx-auto flex max-w-[102rem] items-center justify-between px-4 py-3 lg:px-8">
        <div className="">
          <h2>Logo</h2>
        </div>
        <div className="text-muted-foreground flex flex-1 items-center justify-center gap-8 max-2xl:hidden">
          <Link href="tel:+15551234567">+1 (555) 123-4567</Link>
          <Link href="mailto:info@webapphorizon.com">
            info@webapphorizon.com
          </Link>
        </div>
        <div className="hidden items-center gap-8 xl:flex 2xl:flex-1">
          <nav className="flex items-center gap-9 text-nowrap">
            {content.header.navigation.map((item) => (
              <CustomLink key={item.url} href={item.url}>
                {item.text}
              </CustomLink>
            ))}
          </nav>
          <Button className="min-w-40 flex-1 text-nowrap">
            {content.header.cta.text}
          </Button>
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
                  {content.header.logo}
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col items-start space-y-5 p-4 text-xl">
                {content.header.navigation.map((item) => (
                  <CustomLink key={item.url} href={item.url}>
                    {item.text}
                  </CustomLink>
                ))}
              </nav>
              <div className="text-md text-muted-foreground flex flex-col gap-8 p-4">
                <div className="flex flex-col gap-2">
                  {content.header.contacts.map((contact) => (
                    <Link key={contact.url} href={contact.url}>
                      {contact.text}
                    </Link>
                  ))}
                </div>
                <SocialIcons />
              </div>
              <SheetFooter>
                <Button className="w-full">{content.header.cta.text}</Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
