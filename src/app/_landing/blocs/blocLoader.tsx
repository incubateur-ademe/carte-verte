import { readdir } from "fs/promises";

export type MDXTitle = typeof import("@__content/landing/blocs/*/title.mdx");
type Imported = MDXTitle & {
  id: string;
};

export const loadBlocs = async () => {
  const ids = (await readdir("content/landing/blocs", { withFileTypes: true }))
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  const imported = (
    await Promise.all(
      ids.map<Promise<Imported>>(async id => ({
        ...((await import(`@__content/landing/blocs/${id}/title.mdx`)) as MDXTitle),
        id,
      })),
    )
  )
    .map(({ default: titleComponent, metadata, id }) => ({
      titleComponent,
      metadata,
      id,
    }))
    .sort((a, b) => Number(a.id) - Number(b.id));

  return imported;
};
