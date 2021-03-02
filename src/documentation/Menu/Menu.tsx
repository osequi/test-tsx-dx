import React from "react";
import { useMenu, TData } from "../hooks";
import { MenuCollapsible, TMenuItem as TMenuItemEdo } from "../../Menu";

export interface TMenuItem extends TMenuItemEdo {}

export interface TMenu {
  data: TData;
  activeMenuItem: string;
}

export const defaultMenu: TMenu = {
  data: null,
  activeMenuItem: "",
};

export function Menu(props: TMenu) {
  const { activeMenuItem } = props;
  const menu = useMenu(props, "");
  return (
    <nav>
      <MenuCollapsible items={menu} activeMenuItem={activeMenuItem} />
    </nav>
  );
}

Menu.defaultProps = defaultMenu;
