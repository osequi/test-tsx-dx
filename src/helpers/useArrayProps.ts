export function useArrayProps(
  props: any,
  callback: Function,
  options?: object
): object | object[] {
  return Array.isArray(props)
    ? //// NOTE: .map is not suitable here
      props.reduce((result, prop, index) => {
        const newResults = callback(prop, { index: index, ...options });
        return { ...result, ...newResults };
      }, {})
    : callback(props, options);
}
