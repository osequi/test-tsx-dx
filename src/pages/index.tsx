import { useToken1, useToken2 } from "../";

export default function Home() {
  const t1 = useToken1({ variant: "variant1", name: "xxx" });
  const t1a = useToken1({ variant: "variant1", name: "xxx", phone: "xxx" });
  const t2 = useToken2({ variant: "variant2", name: "ccc", email: "xxx" });
  return (
    <ul>
      <li>t1: {t1}</li>
      <li>t1a: {t1a}</li>
      <li>t2: {t2}</li>
    </ul>
  );
}
