/* eslint-disable import/no-default-export */
interface CarteVerteMDXImage {
  readonly alt: string;
  readonly mobile?: {
    readonly size?: "large" | "medium" | "small";
  };
  readonly src: string;
}

declare type CarteVerteMDXLandingMetadata = CarteVerteHeroMDXMetadata &
  (
    | {
        cards: Array<{
          readonly image: CarteVerteMDXImage;
          readonly title?: string;
        }>;
        type: "alternated";
      }
    | {
        image: CarteVerteMDXImage & {
          /** @default "left" */
          position?: "left" | "right";
        };
        type: "single-image";
      }
    | {
        type: "text-only";
      }
  );

declare type CarteVerteMDXLandingHighlightMetadata =
  | {
      readonly size?: "large" | "small";
    }
  | undefined;

declare type CarteVerteMDXCTAMetadata = {
  readonly priority?: "primary" | "secondary" | "tertiary no outline" | "tertiary";
  readonly source: string;
  readonly title?: string;
} & (
  | {
      readonly anchor: string;
      readonly href?: never;
    }
  | {
      readonly anchor?: never;
      readonly href?: string;
    }
);

declare type CarteVerteHeroMDXMetadata =
  | {
      readonly cta?: CarteVerteMDXCTAMetadata[];
    }
  | undefined;

declare type CarteVerteFAQMDXMetadata = CarteVerteHeroMDXMetadata & {
  readonly question: string;
};

declare type MDXContent = typeof import("*.mdx").default;

declare module "@__content/landing/blocs/*/title.mdx" {
  const MDXContent: MDXContent;
  export default MDXContent;
  export const metadata: CarteVerteMDXLandingMetadata;
}

declare module "@__content/landing/blocs/*/highlight.mdx" {
  const MDXContent: MDXContent;
  export default MDXContent;
  export const metadata: CarteVerteMDXLandingHighlightMetadata;
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
