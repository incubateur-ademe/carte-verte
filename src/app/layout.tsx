import "./global.css";

import { headerFooterDisplayItem } from "@codegouvfr/react-dsfr/Display";
import { Footer } from "@codegouvfr/react-dsfr/Footer";
import { Header, type HeaderProps } from "@codegouvfr/react-dsfr/Header";
import { DsfrHead } from "@codegouvfr/react-dsfr/next-appdir/DsfrHead";
import { DsfrProvider } from "@codegouvfr/react-dsfr/next-appdir/DsfrProvider";
import { getHtmlAttributes } from "@codegouvfr/react-dsfr/next-appdir/getHtmlAttributes";
import { SkipLinks } from "@codegouvfr/react-dsfr/SkipLinks";
import { cx } from "@codegouvfr/react-dsfr/tools/cx";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import Link from "next/link";
import { type PropsWithChildren, Suspense } from "react";

import { Brand } from "@/components/Brand";
import { Matomo } from "@/components/utils/Matomo";
import { config } from "@/config";

import {
  ConsentBannerAndConsentManagement,
  FooterConsentManagementItem,
  FooterPersonalDataPolicyItem,
} from "../consentManagement";
import { defaultColorScheme } from "../defaultColorScheme";
import { StartDsfr } from "../StartDsfr";
import style from "./root.module.scss";

const contentId = "content";
const footerId = "footer";
const description =
  "Carte Verte s’inscrit dans un objectif de politique publique de réduction de l’empreinte environnementale des français et pose le constat suivant : l’empreinte environnementale de la consommation (“je mange”, “j’achète”) des citoyens est trop élevée et peu de dispositifs existent pour l’abaisser (contrairement aux champs des transports et du logement).";

const operatorLogo: HeaderProps["operatorLogo"] = {
  imgUrl: "https://raw.githubusercontent.com/incubateur-ademe/.github/main/ademe-logo-2022-1.svg",
  alt: "ADEME",
  orientation: "vertical",
};

export const metadata: Metadata = {
  metadataBase: new URL(config.host),
  description,
  title: {
    template: `${config.name} - %s`,
    default: config.name,
  },
  openGraph: {
    title: {
      template: `${config.name} - %s`,
      default: config.name,
    },
    description,
  },
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html
      lang="fr"
      {...getHtmlAttributes({ defaultColorScheme, lang: "fr" })}
      className={cx(GeistSans.variable, style.app)}
    >
      <head>
        <StartDsfr />
        <DsfrHead
          Link={Link}
          preloadFonts={[
            "Marianne-Light",
            "Marianne-Light_Italic",
            "Marianne-Regular",
            "Marianne-Regular_Italic",
            "Marianne-Medium",
            "Marianne-Medium_Italic",
            "Marianne-Bold",
            "Marianne-Bold_Italic",
            //"Spectral-Regular",
            //"Spectral-ExtraBold"
          ]}
        />
        <Suspense>
          <Matomo env={config.env} />
        </Suspense>
      </head>
      <body>
        <DsfrProvider lang="fr">
          <ConsentBannerAndConsentManagement />
          <SkipLinks
            links={[
              {
                anchor: `#${contentId}`,
                label: "Contenu",
              },
              {
                anchor: `#${footerId}`,
                label: "Pied de page",
              },
            ]}
          />
          <div className={style.app}>
            <Header
              brandTop={<Brand />}
              homeLinkProps={{
                href: "/",
                title: `Accueil - ${config.name}`,
              }}
              serviceTitle={config.name}
              serviceTagline={config.tagline}
              operatorLogo={operatorLogo}
            />
            <main role="main" id={contentId} className={style.content}>
              {children}
            </main>
            <Footer
              id={footerId}
              accessibility="non compliant"
              contentDescription={`${config.name} est un service développé par l'accélérateur de la transition écologique de l'ADEME.`}
              operatorLogo={operatorLogo}
              bottomItems={[
                {
                  text: "CGU",
                  linkProps: { href: "/cgu" },
                },
                <FooterPersonalDataPolicyItem key="FooterPersonalDataPolicyItem" />,
                {
                  ...headerFooterDisplayItem,
                  iconId: "fr-icon-theme-fill",
                },
                <FooterConsentManagementItem key="FooterConsentManagementItem" />,
                {
                  text: "▲ Propulsé par Vercel",
                  linkProps: {
                    href: "https://vercel.com/?utm_source=ademe&utm_campaign=oss",
                    className: "font-geist-sans",
                  },
                },
                {
                  text: `Version ${config.appVersion}.${config.appVersionCommit.slice(0, 7)}`,
                  linkProps: {
                    href: `${config.repositoryUrl}/commit/${config.appVersionCommit}` as never,
                  },
                },
              ]}
              termsLinkProps={{ href: "/mentions-legales" }}
              license={
                <>
                  Sauf mention contraire, tous les contenus de ce site sont sous{" "}
                  <a href={`${config.repositoryUrl}/main/LICENSE`} target="_blank" rel="noreferrer">
                    licence Apache 2.0
                  </a>
                </>
              }
            />
          </div>
        </DsfrProvider>
      </body>
    </html>
  );
};

export default RootLayout;
