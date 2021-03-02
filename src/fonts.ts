/**
 * Defines the font variants.
 */
export type TFontVariants =
  | "Default"
  | "Nimbus Sans Light"
  | "Nimbus Sans Regular"
  | "Nimbus Sans Medium"
  | "Nimbus Sans Bold";

/**
 * Defines the font type.
 */
export interface TFont {
  /**
   * Which font variant to use?
   */
  variant: TFontVariants;
  /**
   * The font family.
   */
  fontFamily?: string;
  /**
   * The font weight.
   */
  fontWeight?: string | number;
  /**
   * The font style.
   */
  fontStyle?: string;
  /**
   * The letter spacing.
   */
  letterSpacing?: string;
}

/**
 * Defines the default font.
 */
const defaultFont: TFont = {
  variant: "Default",
  fontFamily: "inherit",
  fontWeight: "normal",
  fontStyle: "normal",
  letterSpacing: "normal",
};

/**
 * Defines the Nimbus Sans Light font.
 */
const nimbusSansLight: TFont = {
  variant: "Nimbus Sans Light",
  fontFamily: "nimbus-sans",
  fontWeight: 300,
  fontStyle: "normal",
  letterSpacing: "1.5px",
};

/**
 * Defines the Nimbus Sans Regular font.
 */
const nimbusSansRegular: TFont = {
  variant: "Nimbus Sans Regular",
  fontFamily: "nimbus-sans",
  fontWeight: 400,
  fontStyle: "normal",
  letterSpacing: "1.5px",
};

/**
 * Defines the Nimbus Sans Medium font.
 */
const nimbusSansMedium: TFont = {
  variant: "Nimbus Sans Medium",
  fontFamily: "nimbus-sans",
  fontWeight: 500,
  fontStyle: "normal",
  letterSpacing: "1.5px",
};

/**
 * Defines the Nimbus Sans Bold font.
 */
const nimbusSansBold: TFont = {
  variant: "Nimbus Sans Bold",
  fontFamily: "nimbus-sans",
  fontWeight: 700,
  fontStyle: "normal",
  letterSpacing: "1.5px",
};

/**
 * Defines the available fonts.
 */
export const fonts: TFont[] = [
  defaultFont,
  nimbusSansLight,
  nimbusSansRegular,
  nimbusSansMedium,
  nimbusSansBold,
];
