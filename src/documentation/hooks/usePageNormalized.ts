import { TPageProps } from "../";
import {
  TPageData,
  useDescription,
  useTitle,
  useProps,
  useTypeFind,
  TProps,
  TData,
  TTypeReference,
} from ".";

/**
 * Defines the interface for a normalized page.
 */
export interface TPageNormalized {
  name: string;
  description: string;
  type: string;
  props: TProps | TProps[];
  raw?: any;
}

/**
 * Converts raw page data into a normalized one.
 */
export function usePageNormalized(props: TPageProps): TPageNormalized {
  const { pageData, data } = props;
  const normalizedPageData = useNormalizedPageData(pageData);
  const type = usePageType(pageData);
  const propsPageData = usePropsPageData(type, data, normalizedPageData);
  return {
    name: useTitle(pageData),
    description: useDescription(normalizedPageData),
    type: type,
    props: useProps({ ...props, pageData: propsPageData }),
    //raw: normalizedPageData,
  };
}

// in case of components when they have a single prop it is immediately destuctured
// ie: Image(props: TImage) => the TImage props will be shown
function usePropsPageData(
  type: string,
  data: TData,
  normalizedPageData: TPageData
): TPageData {
  if (type !== "Component") return normalizedPageData;

  const { kindString } = normalizedPageData;
  let props = null;
  switch (kindString) {
    case "Call signature":
      props = normalizedPageData.parameters;
      break;
    case "Namespace":
      props = normalizedPageData.children;
      break;
    default:
      break;
  }

  if (!props || props.length > 1) return normalizedPageData;

  // otherwise it should be a reference
  const { type: propType } = props[0];
  const { name, id } = propType as TTypeReference;
  const reference = useTypeFind(id, data);
  return reference ? reference : normalizedPageData;
}

function usePageType(pageData: TPageData): string {
  const { kindString, name } = pageData;

  switch (kindString) {
    case "Variable":
    case "Type alias":
      return "Token";
    case "Type literal":
      return "Component";
    default:
      return name.includes("use") ? "Token" : "Component";
  }
}

function useNormalizedPageData(pageData: TPageData): TPageData {
  const { kindString } = pageData;

  switch (kindString) {
    case "Function":
      return pageData.signatures[0];
    default:
      return pageData;
  }
}
