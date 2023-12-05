import AccessibiliteContent from "@__content/accessibilite.mdx";
import { type Metadata } from "next";

import { Container } from "@/dsfr";

const title = "Déclaration d'accessibilité";
export const metadata: Metadata = {
  title,
  openGraph: {
    title,
  },
};

const Accessibilite = () => (
  <Container my="4w">
    <h1>{title}</h1>
    <AccessibiliteContent />
  </Container>
);

export default Accessibilite;
