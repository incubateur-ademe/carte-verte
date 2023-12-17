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
        images: CarteVerteMDXImage[];
        type: "alternated";
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

declare module "@__content/landing/blocs/*/title.mdx" {
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

declare module "@codegouvfr/react-dsfr/*.svg" {
  export interface SVG {
    height: number;
    src: string;
    width: number;
  }

  const content: SVG;

  export = content;
}
