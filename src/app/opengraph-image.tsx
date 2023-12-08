import { ImageResponse } from "next/og";

import { ImgCard } from "@/components/img/ImgCard";
import { config } from "@/config";

export const alt = config.name;
export const size = {
  height: 385,
  width: 500,
};
export const contentType = "image/png";

const og = () => {
  return new ImageResponse(<ImgCard />, size);
};

export default og;
