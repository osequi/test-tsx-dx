import { Page, TPageProps } from "../";

export interface TReferences extends TPageProps {
  references: any;
}

export function References(props: TReferences) {
  const { references, data } = props;
  if (!props?.references) return <>No references</>;

  const references2 = references?.map((item) => {
    if (!item) return null;
    return (
      <li>
        <Page data={data} normalizedPageData={item} />
      </li>
    );
  });

  return <ul>{references2}</ul>;
}
