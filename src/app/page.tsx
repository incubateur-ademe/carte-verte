import HeroBlocContent from "@__content/landing/hero_bloc.mdx";
import HeroTitleContent from "@__content/landing/hero_title.mdx";
import { fr } from "@codegouvfr/react-dsfr";
import { cx } from "@codegouvfr/react-dsfr/tools/cx";
import { Fragment } from "react";

import { config } from "@/config";
import { Box, Container } from "@/dsfr";

import { Landing3AlternatedBloc } from "./_landing/blocs/3-alternated";
import { loadBlocs } from "./_landing/blocs/blocLoader";
import { LandingSingleImageBloc } from "./_landing/blocs/single-image";
import { LandingHero } from "./_landing/hero";
import style from "./index.module.scss";

const Home = async () => {
  const imported = await loadBlocs();
  if (config.env === "prod") {
    return (
      <Container my="2w">
        <h1>{config.name} est toujours en construction.</h1>
      </Container>
    );
  }

  return (
    <>
      <Box pb="4w" className={cx(style.hero, fr.cx("fr-pt-md-9w", "fr-pt-2w", "fr-mb-0"))}>
        <LandingHero title={<HeroTitleContent />} bloc={<HeroBlocContent />} />
        <LandingHero mobile title={<HeroTitleContent />} bloc={<HeroBlocContent />} />
      </Box>
      {imported.map(({ titleComponent, metadata, id }) => (
        <Container py="4w" className="fr-hr" key={id} fluid>
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
              default:
                return null;
            }
          })()}
        </Container>
      ))}
    </>
  );
};
export default Home;
