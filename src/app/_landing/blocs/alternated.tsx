import Image from "next/image";
import { Fragment, type ReactNode } from "react";

import { CTA } from "@/app/CTA";
import { Container, Grid, GridCol, type GridColProps } from "@/dsfr";

import { getGridImageOffset } from "./helper";
import { type MDXBlocProps } from "./type";

export const LandingAlternatedBloc = async ({
  metadata,
  id,
  titleComponent: TitleComponent,
  mobile,
}: MDXBlocProps & { mobile?: boolean }) => {
  if (metadata.type !== "alternated") {
    throw new Error("AlternatedBloc cannot be used with metadata.type !== alternated");
  }

  // import(`@__content/landing/blocs/${id}/bloc_01.mdx`),
  const contents = (
    (await Promise.all(
      metadata.images.map(
        (_, index) => import(`@__content/landing/blocs/${id}/bloc_${index < 9 ? "0" : ""}${index + 1}.mdx`),
      ),
    )) as Array<typeof import("*.mdx")>
  ).map(({ default: Content }, index) => <Content key={`bloc_${index}`} />);

  // first: <Image className="!relative" src={metadata.images.first.src} alt={metadata.images.first.alt} fill />,
  const subProps = {
    contents,
    images: metadata.images.map(({ src, alt }) => <Image key={src} className="!relative" src={src} alt={alt} fill />),
    title: <TitleComponent />,
    metadata,
  };

  return mobile ? <LandingAlternatedBlocsMobile {...subProps} /> : <LandingAlternatedBlocsDesktop {...subProps} />;
};

interface SubProps {
  contents: ReactNode[];
  images: ReactNode[];
  metadata: Extract<MDXBlocProps["metadata"], { type: "alternated" }>;
  title: ReactNode;
}

const LandingAlternatedBlocsMobile = ({ contents, title, images, metadata }: SubProps) => (
  <Container className="md:hidden">
    <Grid haveGutters>
      <GridCol>{title}</GridCol>
      {images.map((image, index) => (
        <Fragment key={index}>
          <GridCol {...getGridImageOffset(metadata.images[index].mobile?.size)}>{image}</GridCol>
          <GridCol>{contents[index]}</GridCol>
        </Fragment>
      ))}
    </Grid>
    {metadata.cta && (
      <CTA source={metadata.cta.source} title={metadata.cta.title} href={metadata.cta.href} asGroup>
        {metadata.cta.title}
      </CTA>
    )}
  </Container>
);

// based on 12 columns grid
const colSizeMap: Array<GridColProps["base"]> = [6, 5, 4, 3, 2, 2, 1, 1, 1, 1, 1, 1];

const LandingAlternatedBlocsDesktop = ({ contents, title, images, metadata }: SubProps) => {
  const base = colSizeMap[metadata.images.length - 1];
  return (
    <Container className="hidden md:flex">
      <Grid haveGutters align="center">
        <GridCol>{title}</GridCol>
        {images.map((image, index) => (
          <GridCol key={index} base={base}>
            {image}
          </GridCol>
        ))}
        <GridCol p="0" m="0"></GridCol>
        {contents.map((content, index) => (
          <GridCol key={index} base={base}>
            {content}
          </GridCol>
        ))}
        {metadata.cta && (
          <GridCol>
            <CTA source={metadata.cta.source} title={metadata.cta.title} href={metadata.cta.href} asGroup>
              {metadata.cta.title}
            </CTA>
          </GridCol>
        )}
      </Grid>
    </Container>
  );
};
