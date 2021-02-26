# test-tsx-dx

Finding a good DX/UX for React and Typescript.

## A. Design decisions

1. Tokens and hooks go into separate files. Why?
   1. Either or both of them can become long.
   2. Users have nothing to do with the hook / logic. They just need to set up the tokens.

## B. Editor

1. `function useToken1(props: TToken1)` isn't intuitive for autocomplete / intellisense => props must be expanded / destructured.
2. `function useToken1(variant: TToken1Variants, name: string, phone?: string | string[])` displays well in autocomplete. However:
   1. This new declaration has nothing to do with the `TToken1` type.
3. `function useToken1({variant, name, phone}:TToken1)` displays well in autocomplete.
4. `function useToken1({variant = token1.variant, name = token1.name, phone = token1.phone}: TToken1)` works well with default props.
