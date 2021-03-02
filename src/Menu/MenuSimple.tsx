import React, { ReactNode } from "react";
import { TMenu, defaultMenu, TMenuItem } from ".";

export interface TMenuSimple extends TMenu {}

export function MenuSimple(props: TMenuSimple = defaultMenu) {
  const { items } = props;
  return <ul>{parseMenu(items)}</ul>;
}

function parseMenu(items: TMenuItem[]): ReactNode {
  return items.map((item) => {
    if (!item) return null;
    const { variant, title, children } = item;
    switch (variant) {
      case "section":
        return (
          <li key={`section-${title}`}>
            <span>{title}</span>
            <ul>{parseMenu(children)}</ul>
          </li>
        );
      case "item":
        return <li key={`item-${title}`}>{children}</li>;
    }
  });
}
