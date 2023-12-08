import { readdir } from "fs/promises";

export type MDXTitle = typeof import("@__content/landing/content/*/title.mdx");
type Imported = MDXTitle & {
  id: string;
};

export const loadBlocs = async () => {
  const contents = (await readdir("content/landing/content", { withFileTypes: true }))
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  const imported = (
    await Promise.all(
      contents.map<Promise<Imported>>(async contentFolder => ({
        ...((await import(`@__content/landing/content/${contentFolder}/title.mdx`)) as MDXTitle),
        id: contentFolder,
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
