interface TipCardSchema {
  image: string;
  title: string;
  description: string;
}

interface TipsSchema {
  originalText: string;
  highlightedText: string[];
  tipCards: TipCardSchema[];
}

export interface TipsDataSchema {
  data: TipsSchema;
}
