import { Alert } from "@codegouvfr/react-dsfr/Alert";
import { type Metadata } from "next";

import { config } from "@/config";
import { Container } from "@/dsfr";

import { CTA } from "./CTA";

export const metadata: Metadata = {
  title: "Accueil",
};

const Home = () => {
  return (
    <Container my="2w">
      <Alert closable description="Everything went well" severity="success" title="Message successfully sent" />
      <div className="fr-grid-row fr-grid-row--center fr-grid-row--middle fr-mb-8w fr-mt-8w">
        <div className="fr-col-12 fr-col-md-6">
          <h1>
            {config.name}
            <span className="fr-text--lead d-block fr-mt-3w">
              <p>{config.tagline}</p>
            </span>
          </h1>
          <p className="fr-mt-10w">{config.tagline}</p>
        </div>
        <div className="fr-col-12 fr-col-offset-md-1 fr-col-md-4">
          {}
          {/* eslint-disable-next-line @next/next/no-img-element*/}
          <img
            className="fr-mt-2w"
            src="https://dummyimage.com/300x300/188cf2/fff.png&amp;text=logo+1"
            alt="My description"
          />
        </div>
      </div>
      <CTA />
    </Container>
  );
};

export default Home;
