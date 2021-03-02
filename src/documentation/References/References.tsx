import { Page, TPageProps } from "../";

export interface TReferences {
  pageProps: TPageProps;
  references: any;
}

export function References(props: TReferences) {
  const { pageProps, references } = props;
  if (!props?.references) return <>No references</>;

  const references2 = references?.map((item) => {
    if (!item) return null;
    return (
      <li>
        <Page data={pageProps.data} normalizedPageData={item} />
      </li>
    );
  });

  return <ul>{references2}</ul>;
}
