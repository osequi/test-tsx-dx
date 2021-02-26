import { TToken1, token1 } from ".";

/**
 * Displays a token1.
 */
export function useToken1(props: TToken1 = token1): string {
  const { variant, name, phone } = props;
  return `useToken1: ${variant}, ${name}, ${phone}`;
}
