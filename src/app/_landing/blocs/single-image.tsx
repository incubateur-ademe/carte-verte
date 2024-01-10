import Highlight from "@codegouvfr/react-dsfr/Highlight";
import { cx } from "@codegouvfr/react-dsfr/tools/cx";
import Image from "next/image";
import { type ReactNode } from "react";

import { CTA } from "@/app/CTA";
import { Box, Container, Grid, GridCol } from "@/dsfr";

import { getGridImageOffset } from "./helper";
import { type MDXBlocProps } from "./type";

export const LandingSingleImageBloc = async ({
  metadata,
  id,
  titleComponent: TitleComponent,
  mobile,
}: MDXBlocProps & { mobile?: boolean }) => {
  if (metadata.type !== "single-image") {
    throw new Error("SingleImageBloc cannot be used with metadata.type !== single-image");
  }

  const Content = ((await import(`@__content/landing/blocs/${id}/bloc.mdx`)) as typeof import("*.mdx")).default;

  const subProps = {
    content: <Content />,
    image: <Image className="!relative" src={metadata.image.src} alt={metadata.image.alt} fill />,
    title: <TitleComponent />,
    metadata,
  };

  return mobile ? <LandingSingleImageBlocMobile {...subProps} /> : <LandingSingleImageBlocDesktop {...subProps} />;
};

interface SubProps {
  content: ReactNode;
  image: ReactNode;
  metadata: Extract<MDXBlocProps["metadata"], { type: "single-image" }>;
  title: ReactNode;
}

const LandingSingleImageBlocMobile = ({ content, title, image, metadata }: SubProps) => (
  <Container className="md:hidden">
    <Grid haveGutters>
      <GridCol>{title}</GridCol>
      <GridCol {...getGridImageOffset(metadata.image.mobile?.size)}>{image}</GridCol>
      <GridCol>{content}</GridCol>
      <GridCol>
        <Highlight size="lg">
          Retrouvez la liste des commerces éligibles Carte Verte sur cette carte interactive :{" "}
          <a href="toto" target="_blank">
            lien
          </a>
        </Highlight>
      </GridCol>
      {metadata.cta && (
        <GridCol>
          <CTA source={metadata.cta.source} title={metadata.cta.title} asGroup href={metadata.cta.href}>
            {metadata.cta.title}
          </CTA>
        </GridCol>
      )}
    </Grid>
  </Container>
);

const LandingSingleImageBlocDesktop = ({ content, title, image, metadata }: SubProps) => (
  <Container className="hidden md:flex">
    <Grid haveGutters className={cx(metadata.image.position === "right" && "flex-row-reverse")}>
      <GridCol base={5}>{image}</GridCol>
      <GridCol base={7}>
        {title}
        <Box className="fr-py-4w">{content}</Box>
        {metadata.cta && (
          <CTA source={metadata.cta.source} title={metadata.cta.title} href={metadata.cta.href}>
            {metadata.cta.title}
          </CTA>
        )}
      </GridCol>
    </Grid>
  </Container>
);
