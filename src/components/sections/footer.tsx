import NewsletterForm from "~/components/forms/newsletter-form";
import CustomLink from "~/components/ui/custom-link";

const Footer = () => {
  return (
    <footer
      className="mx-auto flex max-w-[1632px] flex-col gap-5 px-4 md:px-8"
      id="footer"
    >
      <div className="flex flex-col justify-between gap-8 md:flex-row md:flex-wrap">
        <div className="flex max-w-sm flex-col gap-4">
          <h2>Logo</h2>
          <p>
            Providing innovative business solutions to help companies thrive in
            today&apos;s competitive landscape.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:min-w-64">
          <h4>Quick Links</h4>
          <CustomLink href="/">Home</CustomLink>
          <CustomLink href="/about">About</CustomLink>
          <CustomLink href="/services">Services</CustomLink>
          <CustomLink href="/testimonials">Testimonials</CustomLink>
          <CustomLink href="/faq">FAQ</CustomLink>
          <CustomLink href="/contacts">Contacts</CustomLink>
        </div>
        <div className="flex flex-col gap-3 sm:min-w-sm">
          <h4>Services</h4>
          <CustomLink href="/#services">Business Consulting</CustomLink>
          <CustomLink href="/#services">Digital Marketing</CustomLink>
          <CustomLink href="/#services">Software Development</CustomLink>
          <CustomLink href="/#services">Data Analytics</CustomLink>
          <CustomLink href="/#services">Cloud Solutions</CustomLink>
        </div>
        <div className="flex flex-col gap-3">
          <h4>Subscribe</h4>
          <p>Subscribe to our newsletter to receive updates and insights.</p>
          <NewsletterForm />
        </div>
      </div>
      <div className="border-border flex justify-between border-t py-5">
        <p>© 2025 Your Company. All rights reserved.</p>
        <div className="flex gap-8">
          <CustomLink href="/privacy-policy">Privacy Policy</CustomLink>
          <CustomLink href="/terms-of-service">Terms of Service</CustomLink>
          <CustomLink href="/cookie-policy">Cookie Policy</CustomLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
