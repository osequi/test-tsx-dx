import { useToken1, useToken2, Token, TToken1, TToken2 } from "../";

export default function Home() {
  const t1: TToken1 = { variant: "variant1", name: "xxx" };
  const t1a: TToken1 = { variant: "variant1", name: "xxx", phone: "xxx" };
  const t2: TToken2 = { variant: "variant2", name: "ccc", email: "xxx" };

  const h1 = useToken1(t1);
  const h1a = useToken1(t1a);
  const h2 = useToken2(t2);

  return (
    <>
      <p>Raw display using hooks:</p>
      <ul>
        <li>h1: {h1}</li>
        <li>h1a: {h1a}</li>
        <li>h2: {h2}</li>
      </ul>
      <p>Display using components:</p>
      <ul>
        <li>
          Token1: <Token variant="token1" data={t1} />
        </li>
        <li>
          Token1a: <Token variant="token1" data={t1a} />
        </li>
        <li>
          Token2: <Token variant="token2" data={t2} />
        </li>
      </ul>
    </>
  );
}
