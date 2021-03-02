import { TPage } from "../hooks";
import { Type } from "../";

export function Props(props: TPage) {
  if (!props?.props) return <>No props</>;

  const { props: props2 } = props;
  const props3 = Array.isArray(props2) ? props2 : [props2];
  const props4 = props3.map((item) => {
    const { name, required, type } = item;
    const name2 = required ? `${name} * ` : name;
    return (
      <li>
        {name2}: <Type {...type} />
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
