/* eslint-disable import/no-default-export */
interface CarteVerteMDXImage {
  readonly alt: string;
  readonly src: string;
}

declare type CarteVerteMDXLandingMetadata = CarteVerteHeroMDXMetadata &
  (
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

declare type CarteVerteHeroMDXMetadata = {
  readonly cta?: {
    readonly href?: string;
    readonly source: string;
    readonly title?: string;
  };
};

declare type CarteVerteFAQMDXMetadata = CarteVerteHeroMDXMetadata & {
  readonly question: string;
};

declare type MDXContent = typeof import("*.mdx").default;

declare module "@__content/landing/content/*/title.mdx" {
  const MDXContent: MDXContent;
  export default MDXContent;
  export const metadata: CarteVerteMDXLandingMetadata;
}

declare module "@__content/landing/faq/*.mdx" {
  const MDXContent: MDXContent;
  export default MDXContent;
  export const metadata: CarteVerteFAQMDXMetadata;
}

declare module "@__content/landing/hero_title.mdx" {
  const MDXContent: MDXContent;
  export default MDXContent;
  export const metadata: CarteVerteHeroMDXMetadata;
}
