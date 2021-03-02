import { flattenDeep, compact } from "lodash";
import { TData, TPageData } from ".";

// TPageData is defined in usePageData.types.ts

/**
 * Defines the interface for the `usePageData` props.
 */
export interface TPageDataProps {
  /**
   * The data received from `useData`.
   */
  data?: TData;
  /**
   * The params received from Nextjs when a single page is displayed.
   */
  params?: { slug: string };
}

/**
 * Returns data for a page for `getStaticProps` in `[slug].tsx`
 */
export function usePageData(props: TPageDataProps): TPageData | null {
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

  //// NOTE: Next.js needs an explicit `null` return type vs `undefined`. `undefined` is returned when the `?:` ternary operator is used instead of `if`s.
  return null;
}
