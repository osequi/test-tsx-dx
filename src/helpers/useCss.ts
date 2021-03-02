import { css } from "@emotion/css";

/**
 * Transforms CSS style functions and objects into classNames for Emotion.
 *
 * // NOTE:  Neither the style function nor the style object should have a return type. When type set (to object, TemplateStringsArray) no styling will be returned.
 *
 * @category Hooks
 * @example
 * const styleFunction = (props: ...) => { return {...}}
 * const klass = useStyles(styleFunction, props)
 * @example
 * const klass2 = {label: 'klass2', ...}
 * const [klass1, klass2] = useStyles([styleFunction, styleObject], props)
 */
export function useCss(styles?: [] | {}, props?: {}) {
  const styles2 = styles ? styles : {};
  const props2 = props ? props : {};

  return Array.isArray(styles2)
    ? styles2 &&
        styles2.reduce((result, item) => {
          return [...result, transformStyle(item, props2)];
        }, [])
    : transformStyle(styles2, props2);
}

/**
 * Tranforms a style object / function to a class name with Emotion's `css()` function.
 * @ignore
 * @see useStyles.md for TS warnings
 */
function transformStyle(style, props) {
  /**
   * Checks if this is a style object or function.
   */
  const isFunction = style.hasOwnProperty("name");
  /**
   * Checks if this is a style object with a label.
   */
  const isObjectWithLabel = style.hasOwnProperty("label");
  /**
   * Logs a warning message if a style object without a label is passed.
   */
  if (!isFunction && !isObjectWithLabel) {
    // NOTE: Remove in production.
    //console.log("A style object without label was received:", style);
  }
  /**
   * Returns CSS for style objects.
   */
  if (!isFunction) return css(style);

  /**
   * Checks for falsy values. They make Emotion's `css` function break.
   * @example
   * width: 'undefined',
   */
  const values = JSON.stringify(style(props));
  if (values === "{}" || values.includes("undefined")) return null;

  /**
   * Returns CSS for style functions.
   */
  return css(style(props));
}
