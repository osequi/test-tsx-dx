import React, { ReactNode } from "react";
import { mergeProps } from "@react-aria/utils";
import { Menu } from "../";
import { TPageDataProps } from "../hooks";

/**
 * Defines the Template interface.
 */
export interface TTemplate extends TPageDataProps {
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
