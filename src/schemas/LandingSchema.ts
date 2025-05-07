import {
  ImageSchema,
  VideoSchema,
} from './GlobalSchema';


export interface LandingSchema {
  CTAText: string;
  goToSection: string;
  imageBanner: ImageSchema;
  videoPoster: ImageSchema;
  videoSrc: VideoSchema;
}