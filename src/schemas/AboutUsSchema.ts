interface TobaccoCompaniesSchema {
  name: string;
  image: string;
}

interface AboutUsSchema {
  headlineText: string;
  aboutUsTextPTI: string;
  aboutUsTextFIT: string;
  tobaccoCompanies: TobaccoCompaniesSchema[];
}

export interface TobaccoCompaniesDataSchema {
  tobaccoCompanies: TobaccoCompaniesSchema[];
}

export interface AboutUsDataSchema {
  data: AboutUsSchema;
}
