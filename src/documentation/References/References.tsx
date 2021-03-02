import { TPage } from "../hooks";
import { Page, TPageProps } from "../";

export interface TReferences {
  pageProps: TPageProps;
  references: any;
}

export function References(props: TReferences) {
  const { pageProps, references } = props;
  if (!props?.references) return <>No references</>;
  const { data } = pageProps;

  const references2 = references?.map((item) => (
    <li>
      <Page data={data} pageData={item} />
    </li>
  ));

  return <ul>{references2}</ul>;
}
