import { TToken1, TToken2, useToken1, useToken2 } from ".";

export type TTokenVariants = "token1" | "token2";

export interface TToken {
  variant: TTokenVariants;
  data: TToken1 | TToken2;
}

/**
 * Displays a token either via token1 or token2.
 */
export function Token(props: TToken) {
  const { variant, data } = props;
  switch (variant) {
    case "token1":
      return <>{useToken1(data as TToken1)}</>;
    case "token2":
      return <>{useToken2(data as TToken2)}</>;
  }
}
