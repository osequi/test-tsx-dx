# test-tsx-dx

Finding a good DX/UX for React and Typescript.

## Tokens

### A. Design decisions

1. Tokens and hooks go into separate files. Why?
   1. Either or both of them can become long.
   2. Users have nothing to do with the hook / logic. They just need to set up the tokens.

### B. Editor

#### hover

It would be nice when hover a TS item it's complete type definition to show up in a tooltip. However this isn't supported by editors, they don't look up the inherited types. See 5.

#### autocomplete

Even if hover is not working, autocomplete always works. See 5.

1. `function useToken1(props: TToken1)` isn't intuitive for hover => props must be expanded / destructured.
2. `function useToken1(variant: TToken1Variants, name: string, phone?: string | string[])` displays well in hover. However:
   1. This new declaration has nothing to do with the `TToken1` type.
3. `function useToken1({variant, name, phone}:TToken1)` displays well in hover.
4. `function useToken1({variant = token1.variant, name = token1.name, phone = token1.phone}: TToken1)` works well with default props.
5. `function useToken2({ email = token2.email }: TToken2)` gives no TS errors, however:
   1. `token1` props are comletelly missing. We will get a TS error for that when trying to use token2: `const t2 = useToken2({ email: "xxx" });` => This approach is not ok. The editors (Atom, VSCode) don't look up properly the inherited types, therefore they don't display a proper lookup.
   2. To add `token1` props to `useToken2({variant = token1.variant, name = token1.name, phone = token1.phone, email: token2.email})` makes no sense. What if the inheritance is N levels deep?
6. Back to 1: `function useToken1(props: TToken1 = token1)`, `function useToken2(props: TToken2 = token2)`. Hover:
   1. It gives not much hover info, but autocomplete does.
   2. No code / props duplication is needed.
   3. default props don't work
7. The right syntax would be:

```ts
export function useToken1(props: TToken1): string {
  const mergedProps = { ...token1, ...props };
  const { variant, name, phone } = mergedProps;
  return ...;
}
```

#### typedoc

Hover in the editor shows the complete typedoc. It would be nice to offer great hints for devs.

We already saw props (param) type info is innacurate - it becomes accurate on autocomplete. What's left is the return type description. However this can go out of sync with the implementation, so we'll forget it.

```ts
/**
 * Displays the token2.
 *
 * Token2 is based on token1.
 * @param  props [description]
 * @return       [description]
 */
```

Some rules for typedoc:

1. The first paragraph is the short description.
2. The second paragraph is the long description.
   1. Long descriptions should use short sentences.
   2. Each sentence should be separated into a new line.
   3. The description supports markdown.

## Components

So far, the same rules applies as for tokens.
