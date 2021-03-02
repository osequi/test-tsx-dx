import { TPage } from "../hooks";

export function Description(props: TPage) {
  if (!props?.description) return <>No description</>;

  const { description } = props;
  return <p>{description}</p>;
}
