import { CTA } from "@/app/CTA";
import { ImgCard } from "@/components/img/ImgCard";
import { Container, Grid, GridCol } from "@/dsfr";

import { ctaString, type LandingHeroProps } from "./type";

export const LandingHeroMobile = ({ bloc, title }: LandingHeroProps) => (
  <Container className="md:hidden">
    <Grid haveGutters>
      <GridCol>{title}</GridCol>
      <GridCol base={10} offset={1}>
        <ImgCard />
      </GridCol>
      <GridCol>{bloc}</GridCol>
    </Grid>
    <CTA source="hero" title={ctaString} asGroup>
      {ctaString}
    </CTA>
  </Container>
);
