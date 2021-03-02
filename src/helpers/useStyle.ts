import { cx } from "@emotion/css";

export type TStyle = string[];

/**
 * Transforms Emotion classNames into a final style object attachable to a component
 */
export function useStyle(...classNames: string[]): {} {
  return { className: cx(classNames) };
}
