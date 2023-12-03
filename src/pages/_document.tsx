import { type DocumentProps, Head, Html, Main, NextScript } from "next/document";

import { augmentDocumentWithEmotionCache, dsfrDocumentApi } from "./_app";

const { getColorSchemeHtmlAttributes, augmentDocumentForDsfr } = dsfrDocumentApi;

export default function Document(props: DocumentProps) {
  return (
    <Html
      {...getColorSchemeHtmlAttributes(props)}
      //NOTE: Always show vertical scrollbar to avoid layout shift when modals are opened.
      style={{
        overflow: "-moz-scrollbars-vertical",
        overflowY: "scroll",
      }}
    >
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

augmentDocumentForDsfr(Document);

augmentDocumentWithEmotionCache(Document);
