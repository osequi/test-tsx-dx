# test-tsx-dx

Finding a good DX/UX for React and Typescript.

## A. Design decisions

1. Tokens and hooks go into separate files. Why?
   1. Either or both of them can become long.
   2. Users have nothing to do with the hook / logic. They just need to set up the tokens.

## B. Editor

1. `function F(props: TInterface)` isn't intuitive for autocomplete / intellisense => props must be expanded / destructured.
