import { CTA } from "@/app/CTA";
import { Container, Grid, GridCol } from "@/dsfr";

import { type MDXBlocProps } from "./type";

export const LandingTextOnlyBloc = async ({
  metadata,
  id,
  titleComponent: TitleComponent,
}: MDXBlocProps & { mobile?: boolean }) => {
  if (metadata.type !== "text-only") {
    throw new Error("SingleImageBloc cannot be used with metadata.type !== text-only");
  }

  const Content = ((await import(`@__content/landing/content/${id}/bloc.mdx`)) as typeof import("*.mdx")).default;

  return (
    <Container>
      <Grid haveGutters>
        <GridCol>
          <TitleComponent />
        </GridCol>
        <GridCol className="fr-px-md-4w fr-px-2w">
          <Content />
        </GridCol>
        {metadata.cta && (
          <GridCol>
            <CTA source={metadata.cta} title={metadata.cta} asGroup>
              {metadata.cta}
            </CTA>
          </GridCol>
        )}
      </Grid>
    </Container>
  );
};
