import { TType } from "../hooks";
import { References, TPageProps } from "../";

export interface TTypeProps extends TPageProps {
  type: TType;
}

export function Type(props: TTypeProps) {
  const { type } = props;
  if (!type) return <>No type</>;

  const { name, references } = type;

  return (
    <>
      {name}
      <References {...props} references={references} />
    </>
  );
}
