import { type ReactNode } from "react";

import { CTA } from "@/app/CTA";
import { ImgCard } from "@/components/img/ImgCard";
import { Container, Grid, GridCol } from "@/dsfr";

export interface LandingHeroProps {
  bloc: ReactNode;
  title: ReactNode;
}

export const ctaString = "Je veux recevoir ma Carte Verte";
export const LandingHero = ({ bloc, title, mobile }: LandingHeroProps & { mobile?: boolean }) => (
  <>{mobile ? <LandingHeroMobile bloc={bloc} title={title} /> : <LandingHeroDesktop bloc={bloc} title={title} />}</>
);

const LandingHeroDesktop = ({ bloc, title }: LandingHeroProps) => (
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

const LandingHeroMobile = ({ bloc, title }: LandingHeroProps) => (
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
