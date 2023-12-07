import { readdir } from "fs/promises";

export const loadBlocs = async () => {
  const contents = (await readdir("content/landing/content", { withFileTypes: true }))
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  const imported = (
    await Promise.all(
      contents.map(
        async contentFolder =>
          import(`@__content/landing/content/${contentFolder}/title.mdx`) as Promise<
            typeof import("@__content/landing/content/*/title.mdx")
          >,
      ),
    )
  ).map(({ default: titleComponent, metadata }) => ({
    titleComponent,
    metadata,
  }));

  console.log(imported);
};
