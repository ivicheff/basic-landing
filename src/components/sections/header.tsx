import { Menu } from "lucide-react";
import { Button } from "~/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import CustomLink from "../ui/custom-link";

const Header = () => {
  return (
    <header className="mx-auto flex max-w-[1632px] items-center justify-between px-4 py-3 md:px-8">
      <div>
        <h2>Logo</h2>
      </div>
      <div className="hidden items-center gap-20 xl:flex">
        <div className="flex items-center gap-9">
          <CustomLink href="/">Home</CustomLink>
          <CustomLink href="#about">About</CustomLink>
          <CustomLink href="#services">Services</CustomLink>
          <CustomLink href="#testimonials">Testimonials</CustomLink>
          <CustomLink href="#faq">FAQ</CustomLink>
          <CustomLink href="#contacts">Contacts</CustomLink>
        </div>
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
