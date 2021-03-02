import { cx } from "@emotion/css";
import { useCss } from ".";

export type TTokenReturnTypeObject = Object;
export type TTokenReturnTypeString = String;
export type TTokenReturnTypes = Object | String;

export function useReturnTypes(
  style: Function,
  props: object,
  as: TTokenReturnTypes
): TTokenReturnTypes {
  switch (as) {
    case Object:
      return style(props);
    case String:
      return cx(useCss(style, props));
  }
}
