import Link from "next/link";
import NewsletterForm from "~/components/forms/newsletter-form";
import CustomLink from "~/components/ui/custom-link";
import SocialIcons from "~/components/ui/social-icons";
import contentData from "../../../src/content.ru.json";
import { Separator } from "~/components/ui/separator";

const Footer = () => {
  return (
    <footer
      className="mx-auto flex max-w-[102rem] flex-col px-4  md:px-8"
      id="footer"
    >
      <div className="flex flex-col justify-between gap-8 md:flex-row md:flex-wrap">
        <div className="flex max-w-sm flex-col-reverse gap-8">
          <div className="flex flex-col gap-4">
            <h4 className="w-fit">{contentData.footer.contactInfo.title}</h4>
            <div className="flex flex-col gap-3">
              <Link href="tel:+15551234567" className="text-muted-foreground">
                +1 (555) 123-4567
              </Link>
              <Link
                href="mailto:info@webapphorizon.com"
                className="text-muted-foreground"
              >
                info@webapphorizon.com
              </Link>
              <Link
                href="https://maps.google.com/?q=123+Business+Avenue,+Suite+100,+New+York,+NY+10001"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground"
              >
                123 Business Avenue, Suite 100, New York, NY 10001
              </Link>
            </div>
            <SocialIcons />
          </div>
          <div className="flex flex-col gap-2">
            <h2>Company</h2>
            <p className="text-muted-foreground">
              {contentData.footer.description}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="w-fit">{contentData.footer.quickLinks.title}</h4>
          <div className="flex flex-col gap-3">
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
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="w-fit">{contentData.footer.services.title}</h4>
          <div className="flex flex-col gap-3">
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
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="w-fit">{contentData.footer.newsletter.title}</h4>
          <div className="flex flex-col gap-3">
            <p className="text-muted-foreground max-w-sm">
              {contentData.footer.newsletter.description}
            </p>
            <NewsletterForm />
          </div>
        </div>
      </div>
      <Separator className="my-8" />
      <div className="border-border flex flex-col-reverse justify-between  pb-5 xl:flex-row md:pb-7">
        <p className="text-muted-foreground pt-8 xl:pt-0">
          {contentData.footer.copyright}
        </p>
        <div className="flex flex-col gap-3 xl:flex-row xl:gap-8">
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
