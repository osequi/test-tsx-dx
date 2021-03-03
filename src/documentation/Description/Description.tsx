import { TPageNormalized } from "../hooks";

export function Description(props: TPageNormalized) {
  if (!props?.description) return <>No description</>;

  const { description } = props;
  return <p>{description}</p>;
}
