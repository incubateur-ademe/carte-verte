import { cx } from "@codegouvfr/react-dsfr/tools/cx";
import Image from "next/image";
import { type ReactNode } from "react";

import { Box, Container, Grid, GridCol } from "@/dsfr";

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

  const Content = ((await import(`@__content/landing/content/${id}/bloc.mdx`)) as typeof import("*.mdx")).default;

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

const LandingSingleImageBlocMobile = ({ content, title, image }: SubProps) => (
  <Container my="4w" className="md:hidden">
    <Grid haveGutters>
      <GridCol>{title}</GridCol>
      <GridCol>{image}</GridCol>
      <GridCol>{content}</GridCol>
    </Grid>
  </Container>
);

const LandingSingleImageBlocDesktop = ({ content, title, image, metadata }: SubProps) => (
  <Container my="4w" className="hidden md:flex">
    <Grid haveGutters className={cx(metadata.image.position === "right" && "flex-row-reverse")}>
      <GridCol base={5}>{image}</GridCol>
      <GridCol base={7}>
        {title}
        <Box className="fr-py-4w">{content}</Box>
      </GridCol>
    </Grid>
  </Container>
);
