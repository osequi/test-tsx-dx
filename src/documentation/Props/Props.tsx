import { TPage } from "../hooks";
import { Type, TPageProps, Description } from "../";

export interface TProps {
  pageProps: TPageProps;
  page: TPage;
}

export function Props(props: TProps) {
  const { pageProps, page } = props;
  if (!page?.props) return <>No props</>;

  const { props: props2 } = page;
  const props3 = Array.isArray(props2) ? props2 : [props2];
  const props4 = props3.map((item) => {
    const { name, required, type } = item;
    const name2 = required ? `${name} * ` : name;
    return (
      <li>
        {name2}: <Type pageProps={pageProps} type={type} />
        <Description {...item} />
      </li>
    );
  });

  return (
    <>
      <h2>Props</h2>
      <ul>{props4}</ul>
    </>
  );
}
