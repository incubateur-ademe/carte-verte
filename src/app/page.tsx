import HeroBlocContent from "@__content/landing/hero_bloc.mdx";
import HeroTitleContent from "@__content/landing/hero_title.mdx";

import { ImgCard } from "@/components/img/ImgCard";
import { config } from "@/config";
import { Box, Container, Grid, GridCol } from "@/dsfr";

import { CTA } from "./CTA";
import style from "./index.module.scss";

const Home = () => {
  if (config.env === "prod") {
    return (
      <Container my="2w">
        <h1>{config.name} est toujours en construction.</h1>
      </Container>
    );
  }

  return (
    <>
      <Box pt="9w" pb="4w" className={style.hero}>
        <Container>
          <Grid haveGutters className="hidden md:flex">
            <GridCol base={7} className="fr-my-auto">
              <HeroTitleContent />
              <HeroBlocContent />
              <CTA source="hero" title="Je veux recevoir ma Carte Verte">
                Je veux recevoir ma Carte Verte
              </CTA>
            </GridCol>
            <GridCol base={5} className="fr-mx-auto">
              <ImgCard />
            </GridCol>
          </Grid>
          <Box className="md:hidden">
            <Grid haveGutters>
              <GridCol>
                <HeroTitleContent />
              </GridCol>
              <GridCol base={10} offset={1}>
                <ImgCard />
              </GridCol>
              <GridCol>
                <HeroBlocContent />
              </GridCol>
            </Grid>
            <CTA source="hero" title="Je veux recevoir ma Carte Verte" asGroup>
              Je veux recevoir ma Carte Verte
            </CTA>
          </Box>
        </Container>
      </Box>
      <Container my="4w"></Container>
    </>
  );
};

export default Home;
