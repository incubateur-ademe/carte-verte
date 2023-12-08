import HeroBlocContent from "@__content/landing/hero_bloc.mdx";
import HeroTitleContent from "@__content/landing/hero_title.mdx";
import { fr } from "@codegouvfr/react-dsfr";
import { cx } from "@codegouvfr/react-dsfr/tools/cx";
import { type Metadata } from "next";
import { Fragment } from "react";

import { config } from "@/config";
import { Box, CenteredContainer, Container } from "@/dsfr";
import { CollapsedSectionDynamicGroup } from "@/dsfr/base/client/CollapsedSectionDynamicGroup";

import { Landing3AlternatedBloc } from "./_landing/blocs/3-alternated";
import { loadBlocs } from "./_landing/blocs/blocLoader";
import { LandingSingleImageBloc } from "./_landing/blocs/single-image";
import { LandingTextOnlyBloc } from "./_landing/blocs/text-only";
import { loadFaq } from "./_landing/faq/faqLoader";
import { LandingHero } from "./_landing/hero";
import styles from "./index.module.scss";

const url = "/";

export const metadata: Metadata = {
  openGraph: {
    url: "/",
  },
  alternates: {
    canonical: url,
  },
};

const Home = async () => {
  const [blocs, faqQuestions] = await Promise.all([loadBlocs(), loadFaq()]);
  if (config.env === "prod") {
    return (
      <Container my="2w">
        <h1>{config.name} est toujours en construction.</h1>
      </Container>
    );
  }

  return (
    <>
      <Box as="section" pb="4w" className={cx(styles.hero, fr.cx("fr-pt-md-9w", "fr-pt-2w", "fr-mb-0"))}>
        <LandingHero title={<HeroTitleContent />} bloc={<HeroBlocContent />} />
        <LandingHero mobile title={<HeroTitleContent />} bloc={<HeroBlocContent />} />
      </Box>
      {blocs.map(({ titleComponent, metadata, id }) => (
        <Container as="section" py="4w" className="fr-hr" key={id} fluid>
          {(() => {
            switch (metadata.type) {
              case "single-image":
                return (
                  <Fragment key={id}>
                    <LandingSingleImageBloc id={id} metadata={metadata} titleComponent={titleComponent} />
                    <LandingSingleImageBloc mobile id={id} metadata={metadata} titleComponent={titleComponent} />
                  </Fragment>
                );
              case "3-alternated":
                return (
                  <Fragment key={id}>
                    <Landing3AlternatedBloc id={id} metadata={metadata} titleComponent={titleComponent} />
                    <Landing3AlternatedBloc mobile id={id} metadata={metadata} titleComponent={titleComponent} />
                  </Fragment>
                );
              case "text-only":
                return <LandingTextOnlyBloc key={id} id={id} metadata={metadata} titleComponent={titleComponent} />;
              default:
                return null;
            }
          })()}
        </Container>
      ))}
      <Box as="section" className="fr-hr">
        <CenteredContainer className="fr-py-6w fr-py-md-12w">
          <h2>FAQ</h2>
          <CollapsedSectionDynamicGroup
            data={faqQuestions.map(({ id, metadata, questionComponent: Question }) => ({
              id,
              content: <Question />,
              title: metadata.question,
            }))}
          />
        </CenteredContainer>
      </Box>
    </>
  );
};
export default Home;
