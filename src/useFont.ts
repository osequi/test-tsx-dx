import { useArrayProps, useReturnTypes } from "./helpers";
import {
  fonts,
  fontDefaultReturnType,
  TFontVariants,
  TFont,
  TFontReturnType,
} from ".";

function style(props: { font: TFont }): object {
  return {
    ...props.font,
  };
}

export function useFont(
  variant: TFontVariants | TFontVariants[],
  as: TFontReturnType = fontDefaultReturnType
): TFontReturnType | TFontReturnType[] {
  return useArrayProps(variant, getFont, { as: as });
}

function getFont(
  variant: TFontVariants,
  options: { as: TFontReturnType }
): TFontReturnType {
  const { as } = options;

  const font = fonts.find((item) => item.variant === variant);
  const { variant: fontVariant, ...fontWithoutVariant } = font;

  const props = {
    font: fontWithoutVariant,
  };

  return useReturnTypes(style, props, as);
}
