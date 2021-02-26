import { TToken1, token1 } from ".";

/**
 * [useToken1 description]
 * @param  {variant [description]
 * @param  name     [description]
 * @param  phone}   [description]
 * @return          [description]
 */
export function useToken1({
  variant = token1.variant,
  name = token1.name,
  phone = token1.phone,
}: TToken1): string {
  return `useToken1: ${variant}, ${name}, ${phone}`;
}
