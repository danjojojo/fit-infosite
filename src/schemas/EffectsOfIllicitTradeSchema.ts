interface CardArticleSchema {
  id: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

interface ConsequenceSchema {
  title: string;
  description: string;
}

interface EffectsOfIllicitTradeSchema {
  originalText: string;
  highlightedText: string[];
  warningText: string[];
  warningDescription: string;
  cardArticles: CardArticleSchema[];
  consequences: ConsequenceSchema[];
}

export interface EffectsOfIllicitTradeDataSchema {
  data: EffectsOfIllicitTradeSchema;
}
