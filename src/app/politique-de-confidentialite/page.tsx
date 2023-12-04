import PolitiqueConfidentialiteCookiesContent from "@__content/politique-de-confidentialite/cookies.mdx";
import PolitiqueConfidentialiteTraitementContent from "@__content/politique-de-confidentialite/traitement.mdx";
import Table from "@codegouvfr/react-dsfr/Table";
import { type Metadata } from "next";

import { MdxLink } from "@/components/mdx/Link";
import { Container } from "@/dsfr";

import { FooterConsentManagementItem } from "../../consentManagement";

const title = "Politique de confidentialité";

export const metadata: Metadata = {
  title,
  openGraph: {
    title,
  },
};

const PolitiqueConfidentialite = () => {
  return (
    <Container my="2w">
      <h1>{title}</h1>
      <PolitiqueConfidentialiteTraitementContent />
      <h2>Hébergement</h2>
      <Table
        bordered
        headers={["Partenaire", "Pays destinataire", "Traitement réalisé", "Garantie"]}
        data={[
          [
            "Microsoft Azure",
            "France",
            "Hébergement",
            <MdxLink
              key="microsoft-azure"
              title="Déclaration de confidentialité Microsoft"
              href="https://privacy.microsoft.com/fr-fr/privacystatement"
            >
              Déclaration de confidentialité Microsoft
            </MdxLink>,
          ],
        ]}
      />
      <PolitiqueConfidentialiteCookiesContent
        components={{
          CookiesTable: () => (
            <Table
              bordered
              headers={[
                "Catégorie de cookie",
                "Nom du cookie",
                "Durée de conservation",
                "Finalités",
                "Éditeur",
                "Destination",
              ]}
              data={[
                ["Mesure d’audience anonymisée", "Matomo", "13 mois", "Mesure d’audience", "Matomo & ADEME", "France"],
              ]}
            />
          ),
          CookiesButton: () => <FooterConsentManagementItem />,
        }}
      />
    </Container>
  );
};

export default PolitiqueConfidentialite;
