import { TToken2, token2 } from ".";

/**
 * Displays the token2.
 *
 * Token2 is based on token1.
 * @param  props [description]
 * @return       [description]
 */
export function useToken2({ email = token2.email }: TToken2): string {
  return `useToken2: ${email}`;
}
