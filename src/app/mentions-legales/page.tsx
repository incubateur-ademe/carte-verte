import MentionsLegalesContent from "@__content/mentions-legales.mdx";
import { type Metadata } from "next";

import { Container } from "@/dsfr";

const title = "Mentions légales";
export const metadata: Metadata = {
  title,
  openGraph: {
    title,
  },
};

const MentionsLegales = () => (
  <Container my="4w">
    <h1>{title}</h1>
    <MentionsLegalesContent />
  </Container>
);

export default MentionsLegales;
