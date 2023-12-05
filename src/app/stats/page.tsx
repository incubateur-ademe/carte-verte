import { type Metadata } from "next";

import { Container } from "@/dsfr";

import { StatsContent } from "./content";

const title = "Statistiques d'utilisation";
const description = "Statistiques d'utilisation de la plateforme";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
};

const Stats = () => (
  <Container py="6w">
    <h1>{title}</h1>
    <StatsContent />
  </Container>
);

export default Stats;
