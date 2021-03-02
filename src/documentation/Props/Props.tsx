import { TPage } from "../hooks";

export function Props(props: TPage) {
  if (!props?.props) return <>No props</>;

  const { props: props2 } = props;
  const props3 = Array.isArray(props2) ? props2 : [props2];
  const props4 = props3.map((item) => <li>{item.name}</li>);

  return <ul>{props4}</ul>;
}
