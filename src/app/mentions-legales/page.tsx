import { LegalNotice } from "@incubateur-ademe/legal-pages-react";
import { type Metadata } from "next";

import { config } from "@/config";
import { Container } from "@/dsfr";

import { sharedMetadata } from "../shared-metadata";

const title = "Mentions légales";
const url = "/mentions-legales";

export const metadata: Metadata = {
  ...sharedMetadata,
  title,
  openGraph: {
    ...sharedMetadata.openGraph,
    title,
    url,
  },
  alternates: {
    canonical: url,
  },
};

const MentionsLegales = () => (
  <Container my="4w">
    <LegalNotice
      includeBetaGouv
      siteName={config.name}
      siteUrl={config.host}
      licenceUrl={`${config.repositoryUrl}/blob/${config.appVersionCommit}/LICENSE`}
      privacyPolicyUrl="/politique-de-confidentialite"
      siteHost={{
        name: "Vercel Inc.",
        address: "440 N Barranca Ave #4133<br/>Covina, CA 91723",
        country: "États-Unis",
        email: "privacy@vercel.com",
      }}
    />
  </Container>
);

export default MentionsLegales;
