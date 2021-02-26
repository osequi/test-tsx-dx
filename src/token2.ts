import { TToken1, token1 } from ".";

export interface TToken2 extends TToken1 {
  email: string | string[];
}

export const token2: TToken2 = {
  ...token1,
  email: "token2email",
};
