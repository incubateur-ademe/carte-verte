import { PrivacyPolicy } from "@incubateur-ademe/legal-pages-react";
import { type Metadata } from "next";

import { config } from "@/config";
import { Container } from "@/dsfr";

import { FooterConsentManagementItem } from "../../consentManagement";
import { sharedMetadata } from "../shared-metadata";

const title = "Politique de confidentialité";
const url = "/politique-de-confidentialite";

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

const PolitiqueConfidentialite = () => {
  return (
    <Container my="4w">
      <PrivacyPolicy
        includeBetaGouv
        cookieConsentButton={<FooterConsentManagementItem />}
        siteName={config.name}
        cookies={[
          {
            category: "Mesure d’audience anonymisée",
            name: "Matomo",
            expiration: "13 mois",
            finalities: "Mesure d’audience",
            editor: "Matomo & ADEME",
            destination: "France",
          },
        ]}
        thirdParties={[
          {
            name: "Vercel",
            country: "États-Unis",
            hostingCountry: "France (AWS cdg1)",
            serviceType: "Hébergement",
            policyUrl: "https://vercel.com/legal/privacy-policy",
          },
        ]}
      />
    </Container>
  );
};

export default PolitiqueConfidentialite;
