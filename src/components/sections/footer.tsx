import Link from "next/link";
import NewsletterForm from "~/components/forms/newsletter-form";
import CustomLink from "~/components/ui/custom-link";
import SocialIcons from "~/components/ui/social-icons";

const Footer = () => {
  return (
    <footer
      className="mx-auto flex max-w-[1632px] flex-col gap-5 px-4 md:px-8"
      id="footer"
    >
      <div className="flex flex-col justify-between gap-8 md:flex-row md:flex-wrap">
        <div className="flex max-w-sm flex-col gap-4">
          <h2>Logo</h2>
          <p className="text-muted-foreground">
            Providing innovative business solutions to help companies thrive in
            today&apos;s competitive landscape.
          </p>
          <SocialIcons />
        </div>
        <div className="flex flex-col gap-3 sm:min-w-64">
          <h4>Quick Links</h4>
          <CustomLink className="text-muted-foreground" href="/">
            Home
          </CustomLink>
          <CustomLink className="text-muted-foreground" href="/about">
            About
          </CustomLink>
          <CustomLink className="text-muted-foreground" href="/services">
            Services
          </CustomLink>
          <CustomLink className="text-muted-foreground" href="/testimonials">
            Testimonials
          </CustomLink>
          <CustomLink className="text-muted-foreground" href="/pricing">
            Pricing
          </CustomLink>
          <CustomLink className="text-muted-foreground" href="/steps">
            FAQ
          </CustomLink>
        </div>
        <div className="flex flex-col gap-3 sm:min-w-sm">
          <h4>Services</h4>
          <CustomLink className="text-muted-foreground" href="/#services">
            Business Consulting
          </CustomLink>
          <CustomLink className="text-muted-foreground" href="/#services">
            Digital Marketing
          </CustomLink>
          <CustomLink className="text-muted-foreground" href="/#services">
            Software Development
          </CustomLink>
          <CustomLink className="text-muted-foreground" href="/#services">
            Data Analytics
          </CustomLink>
        </div>
        <div className="flex flex-col gap-3">
          <h4>Contact Us</h4>
          <Link
            href="tel:+15551234567"
            className="text-muted-foreground"
          >
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
          <h4 className="pt-2">Subscribe</h4>
          <p className="text-muted-foreground">
            Subscribe to our newsletter to receive updates and insights.
          </p>
          <NewsletterForm />
        </div>
      </div>
      <div className="border-border flex flex-col-reverse justify-between border-t py-5 md:flex-row">
        <p className="text-muted-foreground pt-4 md:pt-0">
          © 2025 Your Company. All rights reserved.
        </p>
        <div className="flex flex-col gap-2 md:flex-row md:gap-8">
          <CustomLink href="/privacy-policy" className="text-muted-foreground">
            Privacy Policy
          </CustomLink>
          <CustomLink
            href="/terms-of-service"
            className="text-muted-foreground"
          >
            Terms of Service
          </CustomLink>
          <CustomLink href="/cookie-policy" className="text-muted-foreground">
            Cookie Policy
          </CustomLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
