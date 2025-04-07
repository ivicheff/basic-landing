import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import CustomLink from "./custom-link";

const SocialIcons = () => {
  return (
    <div className="flex gap-4">
      <CustomLink
        href="https://facebook.com"
        className="text-muted-foreground hover:text-foreground transition-colors"
      >
        <Facebook className="size-5" />
      </CustomLink>
      <CustomLink
        href="https://twitter.com"
        className="text-muted-foreground hover:text-foreground transition-colors"
      >
        <Twitter className="size-5" />
      </CustomLink>
      <CustomLink
        href="https://instagram.com"
        className="text-muted-foreground hover:text-foreground transition-colors"
      >
        <Instagram className="size-5" />
      </CustomLink>
      <CustomLink
        href="https://linkedin.com"
        className="text-muted-foreground hover:text-foreground transition-colors"
      >
        <Linkedin className="size-5" />
      </CustomLink>
      <CustomLink
        href="https://youtube.com"
        className="text-muted-foreground hover:text-foreground transition-colors"
      >
        <Youtube className="size-5" />
      </CustomLink>
    </div>
  );
};

export default SocialIcons;
