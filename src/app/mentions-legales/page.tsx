import MentionsLegalesContent from "@__content/mentions-legales.mdx";
import { type Metadata } from "next";

import { Container } from "@/dsfr";
import { anchorHeadingMDXComponents } from "@/mdx-components";

const title = "Mentions légales";
const url = "/mentions-legales";

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

const MentionsLegales = () => (
  <Container my="4w">
    <h1>{title}</h1>
    <MentionsLegalesContent components={anchorHeadingMDXComponents} />
  </Container>
);

export default MentionsLegales;
