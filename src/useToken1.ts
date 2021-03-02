import { TToken1, token1 } from ".";

/**
 * Displays a token1.
 *
 * Usage: `useToken1(variant: "variant1", name: "token1Name", phone: "token1Phone")`
 */
export function useToken1(props: TToken1): string {
  const mergedProps = { ...token1, ...props };
  const { variant, name, phone } = mergedProps;
  return `useToken1: ${variant}, ${name}, ${phone}`;
}
