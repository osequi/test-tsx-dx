import { TPageData } from ".";

export function useDescription(item: TPageData): string | null {
  if (!item?.comment) return null;
  return Object.values(item.comment)
    .map((item) => item)
    .join("\n");
}
