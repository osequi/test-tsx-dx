import { promises as fs } from "fs";
import path from "path";
import { useData } from "../documentation/hooks";
import { Home, Template } from "../documentation";

export default function EdoDocumentation({ data }) {
  return (
    <Template data={data}>
      <Home />
    </Template>
  );
}

export async function getStaticProps() {
  const data = await useData("./", "docs.json", fs, path);
  return {
    props: {
      data: data,
    },
  };
}
