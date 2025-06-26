interface ImageSchema {
  src: string;
  alt: string;
}

interface VideoSchema {
  src: string;
}

interface LandingSchema {
  CTAText: string;
  goToSection: string;
  imageBanner: ImageSchema;
  videoPoster: ImageSchema;
  videoSrc: VideoSchema;
}

export interface LandingDataSchema {
  landingData: LandingSchema;
}