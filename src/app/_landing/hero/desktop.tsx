import { CTA } from "@/app/CTA";
import { ImgCard } from "@/components/img/ImgCard";
import { Container, Grid, GridCol } from "@/dsfr";

import { ctaString, type LandingHeroProps } from "./type";

export const LandingHeroDesktop = ({ bloc, title }: LandingHeroProps) => (
  <Container className="hidden md:flex">
    <Grid haveGutters>
      <GridCol base={7} className="fr-my-auto">
        {title}
        {bloc}
        <CTA source="hero" title={ctaString}>
          {ctaString}
        </CTA>
      </GridCol>
      <GridCol base={5} className="fr-mx-auto">
        <ImgCard />
      </GridCol>
    </Grid>
  </Container>
);
