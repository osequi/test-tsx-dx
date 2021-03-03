import { TSplitScreen, splitScreen } from "./";

export function useSplitScreen(props: TSplitScreen = splitScreen) {
  const { column, gap } = props;
  console.log({ column });
  console.log({ gap });
}
