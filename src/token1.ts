export type TToken1Variants = "variant1" | "variant2";

export interface TToken1 {
  variant: TToken1Variants;
  name: string;
  phone?: string | string[];
}

export const token1: TToken1 = {
  variant: "variant1",
  name: null,
  phone: null,
};
