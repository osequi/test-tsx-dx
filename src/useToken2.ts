import { TToken2, token2 } from ".";

/**
 * Displays the token2.
 *
 * Token2 is based on token1.
 *
 * It inherits also token1's default props.
 * Trying to make this a long paragraph entry, to see if complicates the hover in the editor.
 * And yes it does.
 * Long lines are not truncated, the hover box goes to the edge of the screen.
 * A workaround is to break sentences into a new line.
 */
export function useToken2(props: TToken2 = token2): string {
  const { email } = props;
  return `useToken2: ${email}`;
}
