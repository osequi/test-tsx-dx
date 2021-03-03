# test-tsx-dx

Finding a good DX/UX for React, Typescript and Typedoc.

## Props;

1. No matter the approach, code is duplicated.

```ts
interface Type {
   prop1: string,
   prop2: string
}

// Duplication in function signature
function ({prop1, prop2}: Type)

// Duplication in destructuring
function (props: Type) {
   const {prop1, prop2} = props
   // If not all props are destructuring this approach contains less duplication
   const {prop1} = props
}
```

2. No matter the approach, hover on a function never gives full info on props, their type and default value. In VSCode `ctrl+hover` gives better info. In Atom there is no `ctrl+hover`

```ts
// splitScreen.ts
export interface TSplitScreen {
  column: string | string[];
  gap: number | number[];
}
export const splitScreen: TSplitScreen = {
  column: "25%",
  gap: 1,
};

// useSplitScreen.ts
function useSplitScreen({ column, gap }: TSplitScreen = splitScreen);
// hover: useSplitScreen({ column, gap }?: TSplitScreen)
// ctrl+hover: the same
// no info on types, default props

function useSplitScreen({ column = "25%", gap = 1 }: TSplitScreen);
// hover: useSplitScreen({ column, gap }: TSplitScreen)  ALMOST THE SAME!!
// ctrl+hover: function useSplitScreen({ column = "25%", gap = 1 }
// no info on types
// useSplitScreen() is not possible with the error: Expected 1 arguments, but got 0.ts(2554)

function useSplitScreen({
  column: string | string[] = "25%",
  gap: number | number[] = 1,
}: TSplitScreen)
// Gives an error on `string | string[]`: Duplicate identifier 'string'.ts(2300)
```

=> The best approach combining 1, 2 is:

```ts
function useSplitScreen(props: TSplitScreen = splitScreen);
```

In order to get more info one should:
a. `ctrl+click` over `useSplitScreen`
b. `ctrl+hover` on `TSplitScreen` to get the props and types
c. `ctrl+hover` on `splitScreen` to get default values
