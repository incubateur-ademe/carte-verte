import HeroBlocContent from "@__content/landing/hero_bloc.mdx";
import HeroTitleContent from "@__content/landing/hero_title.mdx";

import { config } from "@/config";
import { Box, Container } from "@/dsfr";

import { loadBlocs } from "./_landing/blocs/blocLoader";
import { LandingHeroDesktop } from "./_landing/hero/desktop";
import { LandingHeroMobile } from "./_landing/hero/mobile";
import style from "./index.module.scss";

const Home = async () => {
  await loadBlocs();
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
        <LandingHeroDesktop title={<HeroTitleContent />} bloc={<HeroBlocContent />} />
        <LandingHeroMobile title={<HeroTitleContent />} bloc={<HeroBlocContent />} />
      </Box>
      <Container my="4w"></Container>
    </>
  );
};

export default Home;
