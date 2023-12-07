"use client";

import Button from "@codegouvfr/react-dsfr/Button";
import ButtonsGroup from "@codegouvfr/react-dsfr/ButtonsGroup";
import { push } from "@socialgouv/matomo-next";
import { type PropsWithChildren } from "react";

export interface CTAProps {
  asGroup?: boolean;
  source: string;
  title: string;
}
export const CTA = ({ source, title, children, asGroup }: PropsWithChildren<CTAProps>) => {
  const onClick = () => push(["trackEvent", "CTA", "Click", source]);
  return asGroup ? (
    <ButtonsGroup
      alignment="center"
      buttonsEquisized
      buttons={[
        {
          title,
          onClick,
          children,
        },
      ]}
    />
  ) : (
    <Button title={title} onClick={onClick}>
      {children}
    </Button>
  );
};
