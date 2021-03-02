import { TPage } from "../hooks";
import { Props } from "../";

export function References(props) {
  if (!props?.references) return <>No references</>;
  const { references } = props;

  const references2 = references?.map((item) => (
    <li>
      <Props {...item} />
    </li>
  ));

  return <ul>{references2}</ul>;
}
