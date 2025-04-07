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
import CustomLink from "../ui/custom-link";

const Header = () => {
  return (
    <header className="mx-auto flex max-w-[1632px] items-center justify-between px-4 py-3 lg:px-8">
      <div>
        <h2>Logo</h2>
      </div>
      <div className="flex gap-8 max-2xl:hidden text-muted-foreground">
        <Link href="tel:+15551234567">+1 (555) 123-4567</Link>
        <Link href="mailto:info@example.com">info@example.com</Link>
      </div>
      <div className="hidden items-center gap-20 xl:flex">
        <nav className="flex items-center gap-9">
          <CustomLink href="/">Home</CustomLink>
          <CustomLink href="#about">About</CustomLink>
          <CustomLink href="#services">Services</CustomLink>
          <CustomLink href="#testimonials">Testimonials</CustomLink>
          <CustomLink href="#faq">FAQ</CustomLink>
          <CustomLink href="#contacts">Contacts</CustomLink>
        </nav>
        <Button>Get Started</Button>
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
              <SheetTitle className="text-3xl font-bold">Logo</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col items-start space-y-5 p-4 text-xl">
              <CustomLink href="#home">Home</CustomLink>
              <CustomLink href="#about">About</CustomLink>
              <CustomLink href="#services">Services</CustomLink>
              <CustomLink href="#testimonials">Testimonials</CustomLink>
              <CustomLink href="#faq">FAQ</CustomLink>
              <CustomLink href="#contacts">Contacts</CustomLink>
            </nav>
            <div className="text-md text-muted-foreground flex flex-col gap-8 p-4">
              <div className="flex flex-col gap-2">
                <Link href="tel:+15551234567">+1 (555) 123-4567</Link>
                <Link href="mailto:info@example.com">info@example.com</Link>
              </div>
              <SocialIcons />
            </div>
            <SheetFooter>
              <Button className="w-full">Get Started</Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
