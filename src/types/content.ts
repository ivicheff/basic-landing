interface Navigation {
  text: string;
  url: string;
}

interface Contact {
  text: string;
  url: string;
}

interface CTA {
  text: string;
  url: string;
}

interface Image {
  src: string;
  alt: string;
}

interface Platform {
  rating: number;
  link: string;
  image: string;
}

interface Avatars {
  length: number;
  images: string[];
  fallbacks: string[];
  alts: string[];
}

interface Card {
  title: string;
  description: string;
  icon: string;
  iconColor: string;
}

interface PricingCard {
  title: string;
  description: string;
  price: string;
  image: string;
  buttonText: string;
}

interface Testimonial {
  name: string;
  jobTitle: string;
  image: string;
  testimonial: string;
}

interface Step {
  title: string;
  description: string[];
  number: number;
  image: string;
  reverse: boolean;
}

interface Question {
  question: string;
  answer: string;
}

interface ContactItem {
  type: string;
  label: string;
  value: string;
  url: string;
}

interface MapLocation {
  coordinates: [number, number];
  zoom: number;
}

interface FormField {
  label: string;
  placeholder: string;
  error: string;
}

interface FormContent {
  title: string;
  description: string;
  fields: {
    name: FormField;
    email: FormField;
    message: FormField;
  };
  button: {
    default: string;
    loading: string;
  };
  success: string;
  error: string;
}

interface ContentData {
  header: {
    logo: string;
    contacts: Contact[];
    navigation: Navigation[];
    cta: CTA;
  };
  hero: {
    title: string;
    description: string;
    cta: CTA;
    testimonialText: string;
    image: Image;
    avatars: Avatars;
    platforms: Platform[];
  };
  advantages: {
    title: string;
    description: string;
    cards: Card[];
  };
  about: {
    title: string;
    description: string[];
    image: Image;
    statistics: { title: string; description: string }[];
  };
  pricing: {
    title: string;
    description: string;
    cards: PricingCard[];
  };
  testimonials: {
    title: string;
    description: string;
    loading: string;
    error: string;
    items: Testimonial[];
  };
  steps: {
    title: string;
    description: string;
    items: Step[];
  };
  faq: {
    title: string;
    description: string;
    questions: Question[];
    callToAction: {
      text: string;
      button: CTA;
    };
  };
  contacts: {
    title: string;
    description: string;
    form: FormContent;
    contactInfo: {
      title: string;
      items: ContactItem[];
    };
    mapLocation: MapLocation;
  };
  footer: {
    logo: string;
    description: string;
    quickLinks: Navigation[];
    services: Navigation[];
    contactInfo: Contact[];
    newsletter: {
      title: string;
      description: string;
    };
    copyright: string;
    legalLinks: Navigation[];
  };
}

export type { ContentData };
