import CguContent from "@__content/cgu.md";
import { type Metadata } from "next";

import { config } from "@/config";
import { Container } from "@/dsfr";

const title = "Conditions générales d'utilisation";
const description = `Les présentes conditions générales d’utilisation (dites «CGU») fixent le cadre juridique du Site Web "${config.name}" et définissent les conditions d’accès et d’utilisation des services par l’Utilisateur.`;

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
};

const Cgu = () => (
  <Container my="4w">
    <h1>{title}</h1>
    <CguContent />
  </Container>
);

export default Cgu;
