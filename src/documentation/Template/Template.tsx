import React, { ReactNode } from "react";
import { Menu } from "../";
import { TData } from "../hooks";

export interface TTemplate {
  data?: TData;
  children?: ReactNode;
  params?: {
    slug: string;
  };
}

const defaultProps: TTemplate = {
  data: null,
  children: null,
  params: {
    slug: null,
  },
};

export function Template(props: TTemplate = defaultProps) {
  const { data, params, children } = props;
  const { name } = data;
  const { slug } = params;

  return (
    <div>
      <header>
        <h1>{name}</h1>
        <Menu data={data} activeMenuItem={slug} />
      </header>
      {children}
    </div>
  );
}

Template.defaultProps = defaultProps;
