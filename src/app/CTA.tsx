"use client";

import Button from "@codegouvfr/react-dsfr/Button";
import { push } from "@socialgouv/matomo-next";

export const CTA = () => (
  <Button
    title="Trigger matomo event"
    onClick={() => {
      push(["click", "button", "homepage"]);
    }}
  >
    Trigger matomo event
  </Button>
);
