/* eslint-disable import/no-default-export */
interface CarteVerteMDXImage {
  readonly alt: string;
  readonly src: string;
}

declare type CarteVerteMDXLandingMetadata = { cta?: string } & (
  | {
      image: CarteVerteMDXImage & {
        /** @default "left" */
        position?: "left" | "right";
      };
      type: "single-image";
    }
  | {
      images: {
        first: CarteVerteMDXImage;
        second: CarteVerteMDXImage;
        third: CarteVerteMDXImage;
      };
      type: "3-alternated";
    }
  | {
      type: "text-only";
    }
);

declare module "@__content/landing/content/*/title.mdx" {
  const MDXComponent: typeof import("*.mdx").default;
  export default MDXComponent;
  export const metadata: CarteVerteMDXLandingMetadata;
}
