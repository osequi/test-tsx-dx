import { useToken1, useToken2 } from "../";

export default function Home() {
  const t1 = useToken1({ variant: "variant1", name: "xxx", phone: "phone" });
  const t2 = useToken2();
  return (
    <ul>
      <li>t1: {t1}</li>
      <li>t2: {t2}</li>
    </ul>
  );
}
