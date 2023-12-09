import Image from "next/image";
import { type ReactNode } from "react";

import { CTA } from "@/app/CTA";
import { Container, Grid, GridCol } from "@/dsfr";

import { type MDXBlocProps } from "./type";

export const Landing3AlternatedBloc = async ({
  metadata,
  id,
  titleComponent: TitleComponent,
  mobile,
}: MDXBlocProps & { mobile?: boolean }) => {
  if (metadata.type !== "3-alternated") {
    throw new Error("3AlternatedBloc cannot be used with metadata.type !== 3-alternated");
  }

  const [First, Second, Third] = (
    (await Promise.all([
      import(`@__content/landing/content/${id}/bloc_01.mdx`),
      import(`@__content/landing/content/${id}/bloc_02.mdx`),
      import(`@__content/landing/content/${id}/bloc_03.mdx`),
    ])) as Array<typeof import("*.mdx")>
  ).map(({ default: content }) => content);

  const subProps = {
    contents: {
      first: <First />,
      second: <Second />,
      third: <Third />,
    },
    images: {
      first: <Image className="!relative" src={metadata.images.first.src} alt={metadata.images.first.alt} fill />,
      second: <Image className="!relative" src={metadata.images.second.src} alt={metadata.images.second.alt} fill />,
      third: <Image className="!relative" src={metadata.images.third.src} alt={metadata.images.third.alt} fill />,
    },
    title: <TitleComponent />,
    metadata,
  };

  return mobile ? <Landing3AlternatedBlocMobile {...subProps} /> : <Landing3AlternatedBlocDesktop {...subProps} />;
};

interface SubProps {
  contents: {
    first: ReactNode;
    second: ReactNode;
    third: ReactNode;
  };
  images: {
    first: ReactNode;
    second: ReactNode;
    third: ReactNode;
  };
  metadata: Extract<MDXBlocProps["metadata"], { type: "3-alternated" }>;
  title: ReactNode;
}

const Landing3AlternatedBlocMobile = ({ contents, title, images, metadata }: SubProps) => (
  <Container className="md:hidden">
    <Grid haveGutters>
      <GridCol>{title}</GridCol>
      <GridCol>{images.first}</GridCol>
      <GridCol>{contents.first}</GridCol>
      <GridCol>{images.second}</GridCol>
      <GridCol>{contents.second}</GridCol>
      <GridCol>{images.third}</GridCol>
      <GridCol>{contents.third}</GridCol>
    </Grid>
    {metadata.cta && (
      <CTA source={metadata.cta} title={metadata.cta} asGroup>
        {metadata.cta}
      </CTA>
    )}
  </Container>
);

const Landing3AlternatedBlocDesktop = ({ contents, title, images, metadata }: SubProps) => (
  <Container className="hidden md:flex">
    <Grid haveGutters>
      <GridCol>{title}</GridCol>
      <GridCol base={4}>{images.first}</GridCol>
      <GridCol base={4}>{images.second}</GridCol>
      <GridCol base={4}>{images.third}</GridCol>
      <GridCol base={4}>{contents.first}</GridCol>
      <GridCol base={4}>{contents.second}</GridCol>
      <GridCol base={4}>{contents.third}</GridCol>
      {metadata.cta && (
        <GridCol>
          <CTA source={metadata.cta} title={metadata.cta} asGroup>
            {metadata.cta}
          </CTA>
        </GridCol>
      )}
    </Grid>
  </Container>
);
