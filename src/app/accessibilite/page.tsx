import AccessibiliteContent from "@__content/accessibilite.mdx";
import { type Metadata } from "next";

import { Container } from "@/dsfr";
import { anchorHeadingMDXComponents } from "@/mdx-components";

const title = "Déclaration d'accessibilité";
const url = "/accessibilite";
export const metadata: Metadata = {
  title,
  openGraph: {
    title,
    url,
  },
  alternates: {
    canonical: url,
  },
};

const Accessibilite = () => (
  <Container my="4w">
    <h1>{title}</h1>
    <AccessibiliteContent components={anchorHeadingMDXComponents} />
  </Container>
);

export default Accessibilite;
