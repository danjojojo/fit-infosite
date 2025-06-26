interface TopBrandsSchema {
  id: string;
  name: string;
  image?: string;
}

interface TopItemsSchema {
  overline: string;
  description: string;
  brands: TopBrandsSchema[];
}

interface IllicitCigarettesSchema {
  headlineDescription: string;
  originalText: string;
  highlightedText: string[];
  topFakeBrands: TopItemsSchema;
  topIllicitWhites: TopItemsSchema;
}

interface IlegalNaYosiCardsSchema {
  id: string;
  image: string;
  imageTitleDesign: string;
  title: string;
  description: string;
  palatandaan: string[];
}

interface IllegalCigarettesSchema {
  originalText: string;
  highlightedText: string[];
  IlegalNaYosiCards: IlegalNaYosiCardsSchema[];
}

export interface ICigarettesDataSchema {
  illicitCigsData: IllicitCigarettesSchema;
  illegalCigsData: IllegalCigarettesSchema;
}

export interface IllegalCigarettesDataSchema {
  illegalCigsData: IllegalCigarettesSchema;
}
