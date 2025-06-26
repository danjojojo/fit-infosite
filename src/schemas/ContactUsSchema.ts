import { icons } from "@/ui/icons";

interface DetailsSchema {
  name: string;
  icon: keyof typeof icons;
  link: string;
}

interface ContactUsSchema {
  originalText: string;
  highlightedText: string[];
  contactDetails: DetailsSchema[];
  socialMediaLinks: DetailsSchema[];
}

export interface ContactUsDataSchema {
  data: ContactUsSchema;
}
