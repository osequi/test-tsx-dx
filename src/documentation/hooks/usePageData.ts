import { flattenDeep, compact } from "lodash";
import { TData, TPageData, TTemplate } from ".";

export interface TParams {
  slug: string;
}

/**
 * Returns data for a page for `getStaticProps` in `[slug].tsx`
 */
export function usePageData(props: TTemplate): TPageData | null {
  const { data, params } = props;
  const { children } = data;
  const { slug } = params;

  const found = children?.find((item) => item.name === slug);
  if (found) return found;

  const tryToFind = compact(
    flattenDeep(
      children?.map((item) => usePageData({ data: item, params: params }))
    )
  ).pop();
  if (tryToFind) return tryToFind;

  // TODO: 'reset' returns null. There is no entry named 'reset'. The `reset.ts` file should be found and the contents loaded.

  //// NOTE: Next.js needs an explicit `null` return type vs `undefined`. `undefined` is returned when the `?:` ternary operator is used instead of `if`s.
  return null;
}
