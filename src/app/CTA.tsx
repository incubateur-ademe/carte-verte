"use client";

import { type ButtonProps } from "@codegouvfr/react-dsfr/Button";
import ButtonsGroup from "@codegouvfr/react-dsfr/ButtonsGroup";
import { push } from "@socialgouv/matomo-next";

import { config } from "@/config";

const DEFAULT_CTA_HREF = config.formUrl;
const DEFAULT_CTA_TITLE = "Je souhaite recevoir ma Carte Verte";

export interface CTAProps {
  buttons: CarteVerteMDXCTAMetadata[];
}
export const CTA = ({ buttons }: CTAProps) => {
  return (
    <ButtonsGroup
      alignment="center"
      buttonsSize="large"
      inlineLayoutWhen="always"
      buttons={
        buttons.map(
          ({ source, priority, title = DEFAULT_CTA_TITLE, anchor, href }) =>
            ({
              children: title,
              title,
              linkProps: {
                onClick: () => push(["trackEvent", "CTA", "Click", source]),
                href: href ?? (anchor ? `#${anchor}` : DEFAULT_CTA_HREF),
              },
              priority,
            }) as ButtonProps,
        ) as [ButtonProps, ...ButtonProps[]]
      }
    />
  );
  // return asGroup ? (
  //   <ButtonsGroup
  //     alignment="center"
  //     buttonsSize="large"
  //     inlineLayoutWhen="always"
  //     buttons={[
  //       {
  //         title,
  //         children,
  //         linkProps: {
  //           onClick,
  //           href: href as never,
  //         },
  //       },
  //     ]}
  //   />
  // ) : (
  //   <Button
  //     title={title}
  //     linkProps={{
  //       onClick,
  //       href: href as never,
  //     }}
  //   >
  //     {children}
  //   </Button>
  // );
};
