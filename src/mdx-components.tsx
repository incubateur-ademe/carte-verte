import { type MDXComponents } from "mdx/types";

import { MdxLink } from "@/components/mdx/Link";
import { slugify } from "@/utils/string";

import { AnchorLink } from "./dsfr/client";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    a: MdxLink,
    h1: props => <AnchorLink as="h1" anchor={slugify(props.children as string)} {...props} />,
    h2: props => <AnchorLink as="h2" anchor={slugify(props.children as string)} {...props} />,
    h3: props => <AnchorLink as="h3" anchor={slugify(props.children as string)} {...props} />,
  };
}
