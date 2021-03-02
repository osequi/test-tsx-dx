import { TPage } from "../hooks";
import { Page } from "../";

export function References(props) {
  if (!props?.references) return <>No references</>;
  const { references } = props;

  const references2 = references?.map((item) => (
    <li>
      <Page {...item} />
    </li>
  ));

  return <ul>{references2}</ul>;
}
