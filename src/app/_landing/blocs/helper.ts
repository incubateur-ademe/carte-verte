import { type ColsNumberType } from "@/dsfr";

const BASE = 12;
type ImageSize = NonNullable<NonNullable<CarteVerteMDXImage["mobile"]>["size"]>;
const OFFSETS: Record<ImageSize, ColsNumberType> = {
  lg: 0 as ColsNumberType,
  md: 2,
  sm: 4,
};

export const getGridImageOffset = (size = "md" as ImageSize) => {
  const offset = OFFSETS[size] ?? OFFSETS.md;
  return {
    base: (BASE - offset) as ColsNumberType,
    offset: (offset / 2) as ColsNumberType,
  };
};
