import { Container } from "@/dsfr";

import { StatsContent } from "./content";

const title = "Statistiques d'utilisation";

const Stats = () => {
  return (
    <>
      <Container py="6w">
        <h1>{title}</h1>
        <StatsContent />
      </Container>
    </>
  );
};

export default Stats;
