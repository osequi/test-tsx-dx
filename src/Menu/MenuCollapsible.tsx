import React, { ReactNode } from "react";
import { Details, Summary } from "react-accessible-details";
import { TMenu, defaultMenu, TMenuItem, MenuItem } from ".";

export interface TMenuCollapsible extends TMenu {}

export function MenuCollapsible(props: TMenuCollapsible = defaultMenu) {
  const { items, activeMenuItem } = props;
  return <ul>{parseMenu(items, activeMenuItem)}</ul>;
}

function parseMenu(items: TMenuItem[], activeMenuItem: string): ReactNode {
  return items.map((item) => {
    if (!item) return null;
    const { variant, title, children } = item;
    switch (variant) {
      case "section":
        return (
          <li key={`section-${title}`}>
            <Details isOpenDefault={false}>
              <Summary>
                <MenuItem {...item} />
              </Summary>
              <ul>{parseMenu(children, activeMenuItem)}</ul>
            </Details>
          </li>
        );
      case "item":
        return (
          <li key={`item-${title}`}>
            <MenuItem {...item} />
          </li>
        );
    }
  });
}
