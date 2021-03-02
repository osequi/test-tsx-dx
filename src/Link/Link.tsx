import React, { ReactNode } from "react";
import NextLink from "next/link";
import slugify from "slugify";
import { lowerCase } from "lodash";

/**
 * Defines the Link type.
 */
export interface TLink {
  /**
   * The title of the link.
   */
  title: string;
  /**
   * The URL of the link.
   * When not defined the `title` will be transformed into an URL and used as `href`.
   */
  href?: string;
  /**
   * The content of the link.
   * When not defined the `title` will be used as `content`.
   */
  children?: ReactNode;
  className?: string;
}

/**
 * Defines the Link default props.
 */
const defaultProps: TLink = {
  title: "Undefined",
  className: null,
};

/**
 * Displays a link.
 * @param 	props	The link properties.
 * @category Navigation
 */
export function Link(props: TLink = defaultProps) {
  const { title, href, children, className } = props;
  const url = href ? href : `/${slugify(lowerCase(title))}`;
  const content = children ? children : title;

  return (
    <NextLink href={url} passHref>
      <a title={title} className={className}>
        {content}
      </a>
    </NextLink>
  );
}
