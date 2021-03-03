import React from "react";
import { useSplitScreen } from "../../";

export function Home() {
  console.log(useSplitScreen())
  return <h1>Home</h1>;
}
