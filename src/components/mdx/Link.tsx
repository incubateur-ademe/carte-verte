import NextLink, { type LinkRestProps } from "next/link";

export const MdxLink = (props: LinkRestProps & { href?: string }) => {
  const href = props.href;
  const isInternalLink = href?.startsWith("/") ?? false;

  if (isInternalLink) {
    return <NextLink href={href as __next_route_internal_types__.RouteImpl<string>}>{props.children}</NextLink>;
  }

  return (
    <a target="_blank" rel="nofollow noopener noreferrer" {...props} href={href}>
      {props.children}
    </a>
  );
};
