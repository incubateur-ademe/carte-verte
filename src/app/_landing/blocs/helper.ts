import { type ColsNumberType } from "@/dsfr";

const BASE = 12;
type ImageSize = NonNullable<NonNullable<CarteVerteMDXImage["mobile"]>["size"]>;
const OFFSETS: Record<ImageSize, ColsNumberType> = {
  large: 0 as ColsNumberType,
  medium: 2,
  small: 4,
};

export const getGridImageOffset = (size = "medium" as ImageSize) => {
  const offset = OFFSETS[size] ?? OFFSETS.medium;
  return {
    base: (BASE - offset) as ColsNumberType,
    offset: (offset / 2) as ColsNumberType,
  };
};
