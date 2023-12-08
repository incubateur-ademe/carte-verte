import { type MDXProps } from "mdx/types";

export interface MDXBlocProps {
  id: string;
  metadata: CarteVerteMDXLandingMetadata;
  titleComponent: (props: MDXProps) => JSX.Element;
}
