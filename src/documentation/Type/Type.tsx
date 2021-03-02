import { TType } from "../hooks";
import { References } from "../";

export function Type(props: TType) {
  if (!props) return <>No type</>;

  const { name, references } = props;

  return (
    <>
      {name}
      <References references={references} />
    </>
  );
}
