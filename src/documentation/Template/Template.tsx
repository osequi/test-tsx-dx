import React, { ReactNode } from "react";
import { mergeProps } from "@react-aria/utils";
import { Menu } from "../";
import { TData, TParams } from "../hooks";

/**
 * Defines the Template interface.
 */
export interface TTemplate {
  /**
   * The data received from `useData`.
   */
  data?: TData;
  /**
   * The params received from Nextjs when a single page is displayed.
   */
  params?: TParams;
  /**
   * The content of the template.
   */
  children?: ReactNode;
}

/**
 * Defines the Template default props.
 */
const defaultProps: TTemplate = {
  data: null,
  children: null,
  params: {
    slug: null,
  },
};

/**
 * Displays the Template.
 */
export function Template(props: TTemplate) {
  const mergedProps = mergeProps(defaultProps, props);
  const { data, params, children } = mergedProps;
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
