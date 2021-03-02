import { promises as fs } from "fs";
import path from "path";
import {
  useData,
  usePageData,
  usePaths,
  TPageData,
} from "../documentation/hooks";
import { Page, Template } from "../documentation";

export default function SlugPage({ data, pageData, params }) {
  return (
    <Template data={data} params={params}>
      <Page data={data} pageData={pageData} />
    </Template>
  );
}

export async function getStaticProps({ params }) {
  const data = await useData("./", "docs.json", fs, path);
  const page: TPageData = usePageData({ data: data, params: params });
  return {
    props: { data: data, pageData: page, params: params },
  };
}

export async function getStaticPaths() {
  const data = await useData("./", "docs.json", fs, path);
  const paths = usePaths(data, "");
  return { paths, fallback: false };
}
