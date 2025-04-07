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
    <header className="mx-auto flex max-w-[1632px] items-center justify-between py-3  px-4 md:px-8">
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
            <Button variant="ghost" size="icon" className="p-0">
              <Menu className="h-12 w-12" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Logo</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col items-start space-y-4 p-6">
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
