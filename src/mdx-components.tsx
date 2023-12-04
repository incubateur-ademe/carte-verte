import { type MDXComponents } from "mdx/types";

import { MdxLink } from "@/components/mdx/Link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    a: MdxLink,
  };
}
