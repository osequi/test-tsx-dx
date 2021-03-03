import { Type, TPageProps, Description } from "../";
import { TPageNormalized } from "../hooks";

export function Props(props: TPageProps) {
  if (!props?.normalizedPageData?.props) return <>No props</>;

  const { props: props2 } = props?.normalizedPageData;
  const props3 = Array.isArray(props2) ? props2 : [props2];
  const props4 = props3.map((item) => {
    const { name, required, type, description } = item;
    const name2 = required ? `${name} * ` : name;
    return (
      <li>
        {name2}
        <ul>
          <li>{description}</li>
          <li>
            <Type {...props} type={type} />
          </li>
        </ul>
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
