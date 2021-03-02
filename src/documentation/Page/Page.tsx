import React from "react";
import { TData, TPageData, usePage, useTitle } from "../hooks";
import { Props, Description } from "../";

/**
 * Defines the Page template.
 */
export interface TPageProps {
  /**
   * The data received from `useData`.
   */
  data: TData;
  /**
   * The data received from `usePageData`.
   */
  pageData: TPageData;
}

export function Page(props: TPageProps) {
  if (!props?.pageData) return <Undefined {...props} />;

  const page = usePage(props);
  const { name } = page;
  const title = useTitle({ name: name, kindString: "Module" });

  return (
    <div>
      <h1>{title}</h1>
      <Description {...page} />
      <Props {...page} />
      <div>
        <pre>{JSON.stringify(page, null, 2)}</pre>
      </div>
      <hr />
      <p>
        <pre>{JSON.stringify(props.pageData, null, 2)}</pre>
      </p>
      {/*<hr />
      <p>
        <pre>{JSON.stringify(props.data, null, 2)}</pre>
      </p>*/}
    </div>
  );
}

function Undefined(props: TPageProps) {
  const debug = props?.data ? props.data : {};
  return (
    <div>
      <h1>Undefined</h1>
      <p>Something went wrong ...</p>
      <p>
        <pre>{JSON.stringify(debug, null, 2)}</pre>
      </p>
    </div>
  );
}
