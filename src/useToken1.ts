import { TToken1 } from ".";

/**
 * [useToken1 description]
 * @param  {variant [description]
 * @param  name     [description]
 * @param  phone}   [description]
 * @return          [description]
 */
export function useToken1({ variant, name, phone }: TToken1): string {
  return `useToken1: ${variant}, ${name}, ${phone}`;
}
