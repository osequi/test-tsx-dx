import { TType } from "../hooks";
import { References, TPageProps } from "../";

export interface TTypeProps {
  pageProps: TPageProps;
  type: TType;
}

export function Type(props: TTypeProps) {
  const { pageProps, type } = props;
  if (!type) return <>No type</>;

  const { name, references } = type;

  return (
    <>
      {name}
      <References pageProps={pageProps} references={references} />
    </>
  );
}
