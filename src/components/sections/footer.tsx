import Link from "next/link";
import NewsletterForm from "~/components/forms/newsletter-form";
import CustomLink from "~/components/ui/custom-link";
import SocialIcons from "~/components/ui/social-icons";
import contentData from "../../../src/content.ru.json";

const Footer = () => {
  return (
    <footer
      className="mx-auto flex max-w-[102rem] flex-col gap-5 md:gap-8 px-4 md:px-8"
      id="footer"
    >
      <div className="flex flex-col justify-between gap-8 md:flex-row md:flex-wrap">
        <div className="flex max-w-sm flex-col gap-4">
          <h2>Logo</h2>
          <p className="text-muted-foreground">
            {contentData.footer.description}
          </p>
          <SocialIcons />
        </div>
        <div className="flex flex-col gap-3 sm:min-w-64">
          <h4>{contentData.footer.quickLinks.title}</h4>
          <CustomLink className="text-muted-foreground" href="/">
            {contentData.footer.quickLinks.items?.[0]?.text}
          </CustomLink>
          <CustomLink className="text-muted-foreground" href="/about">
            {contentData.footer.quickLinks.items?.[1]?.text}
          </CustomLink>
          <CustomLink className="text-muted-foreground" href="/services">
            {contentData.footer.quickLinks.items?.[2]?.text}
          </CustomLink>
          <CustomLink className="text-muted-foreground" href="/testimonials">
            {contentData.footer.quickLinks.items?.[3]?.text}
          </CustomLink>
          <CustomLink className="text-muted-foreground" href="/pricing">
            {contentData.footer.quickLinks.items?.[4]?.text}
          </CustomLink>
          <CustomLink className="text-muted-foreground" href="/steps">
            {contentData.footer.quickLinks.items?.[5]?.text}
          </CustomLink>
        </div>
        <div className="flex flex-col gap-3 sm:min-w-sm">
          <h4>{contentData.footer.services.title}</h4>
          <CustomLink className="text-muted-foreground" href="/#services">
            {contentData.footer.services.items?.[0]?.text}
          </CustomLink>
          <CustomLink className="text-muted-foreground" href="/#services">
            {contentData.footer.services.items?.[1]?.text}
          </CustomLink>
          <CustomLink className="text-muted-foreground" href="/#services">
            {contentData.footer.services.items?.[2]?.text}
          </CustomLink>
          <CustomLink className="text-muted-foreground" href="/#services">
            {contentData.footer.services.items?.[3]?.text}
          </CustomLink>
        </div>
        <div className="flex flex-col gap-3">
          <h4>{contentData.footer.contactInfo.title}</h4>
          <Link href="tel:+15551234567" className="text-muted-foreground">
            +1 (555) 123-4567
          </Link>
          <Link
            href="mailto:info@example.com"
            className="text-muted-foreground"
          >
            info@example.com
          </Link>
          <Link
            href="https://maps.google.com/?q=123+Business+Avenue,+Suite+100,+New+York,+NY+10001"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground"
          >
            123 Business Avenue, Suite 100, New York, NY 10001
          </Link>
          <h4 className="pt-2">{contentData.footer.newsletter.title}</h4>
          <p className="text-muted-foreground max-w-sm">
            {contentData.footer.newsletter.description}
          </p>
          <NewsletterForm />
        </div>
      </div>
      <div className="border-border flex flex-col-reverse justify-between border-t py-5 md:py-7 md:flex-row">
        <p className="text-muted-foreground pt-4 md:pt-0">
          {contentData.footer.copyright}
        </p>
        <div className="flex flex-col gap-2 md:flex-row md:gap-8">
          <CustomLink href="/privacy-policy" className="text-muted-foreground">
            {contentData.footer.legalLinks?.[1]?.text}
          </CustomLink>
          <CustomLink
            href="/terms-of-service"
            className="text-muted-foreground"
          >
            {contentData.footer.legalLinks?.[0]?.text}
          </CustomLink>
          <CustomLink href="/cookie-policy" className="text-muted-foreground">
            {contentData.footer.legalLinks?.[2]?.text}
          </CustomLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
