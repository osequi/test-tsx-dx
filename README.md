# test-tsx-dx

Finding a good DX/UX for React and Typescript.

## A. Design decisions

1. Tokens and hooks go into separate files. Why?
   1. Either or both of them can become long.
   2. Users have nothing to do with the hook / logic. They just need to set up the tokens.

## B. Editor

### hover

It would be nice when hover a TS item it's complete type definition to show up in a tooltip. However this isn't supported by editors, they don't look up the inherited types. See 5.

### autocomplete

Even if hover is not relevant, autocomplete always works. See 5.

1. `function useToken1(props: TToken1)` isn't intuitive for hover => props must be expanded / destructured.
2. `function useToken1(variant: TToken1Variants, name: string, phone?: string | string[])` displays well in hover. However:
   1. This new declaration has nothing to do with the `TToken1` type.
3. `function useToken1({variant, name, phone}:TToken1)` displays well in hover.
4. `function useToken1({variant = token1.variant, name = token1.name, phone = token1.phone}: TToken1)` works well with default props.
5. `function useToken2({ email = token2.email }: TToken2)` gives no TS errors, however:
   1. `token1` props are comletelly missing. We will get a TS error for that when trying to use token2: `const t2 = useToken2({ email: "xxx" });` => This approach is not ok. The editors (Atom, VSCode) don't look up properly the inherited types, therefore they don't display a proper lookup.
   2. To add `token1` props to `useToken2({variant = token1.variant, name = token1.name, phone = token1.phone, email: token2.email})` makes no sense. What if the inheritance is N levels deep?
