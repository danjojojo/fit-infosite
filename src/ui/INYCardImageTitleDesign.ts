import Vector1 from "@/ui/img/iny-vector-1.svg";
import Vector2 from "@/ui/img/iny-vector-2.svg";
import Vector3 from "@/ui/img/iny-vector-3.svg";
import Vector4 from "@/ui/img/iny-vector-4.svg";

import { ImageSchema } from "@/schemas/GlobalSchema";

export type INYCard = {
  vector: ImageSchema;
  titleRotation: string;
};

export type INYCardDesignMap = {
  [key : string]: INYCard;
}

export const INYCardDesign: INYCardDesignMap = {
  d1: {
    vector: Vector1,
    titleRotation: "2.668deg",
  },
  d2: {
    vector: Vector2,
    titleRotation: "-5.13deg",
  },
  d3: {
    vector: Vector3,
    titleRotation: "2.668deg",
  },
  d4: {
    vector: Vector4,
    titleRotation: "-5.13deg",
  },
};