export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQData {
  title: string;
  description: string;
  questions: FAQItem[];
  callToAction: {
    text: string;
    button: {
      text: string;
      url: string;
    };
  };
}

export interface TestimonialsData {
  title: string;
  description: string;
  loading: string;
  error: string;
  items: {
    name: string;
    jobTitle: string;
    image: string;
    testimonial: string;
  }[];
}

export interface ContentData {
  header: Record<string, unknown>;
  hero: Record<string, unknown>;
  advantages: Record<string, unknown>;
  about: Record<string, unknown>;
  pricing: Record<string, unknown>;
  testimonials: TestimonialsData;
  steps: Record<string, unknown>;
  faq: FAQData;
  contacts: Record<string, unknown>;
  footer: Record<string, unknown>;
}

// Функция для загрузки данных из JSON файла
export async function loadContentData(): Promise<ContentData> {
  const response = await fetch("/content.ru.json");
  const data = (await response.json()) as ContentData;
  return data;
}
