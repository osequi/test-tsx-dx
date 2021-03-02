import { TMenuItem, defaultMenuItem, MenuSimple, MenuCollapsible } from ".";

export type TMenuVariants = "simple" | "collapsible";

export interface TMenu {
  items: TMenuItem[];
  activeMenuItem: string;
  options?: {
    isSectionLink: boolean;
  };
}

export const defaultMenu: TMenu = {
  items: [defaultMenuItem],
  activeMenuItem: "",
  options: {
    isSectionLink: false,
  },
};

export function Menu(variant: TMenuVariants, props: TMenu = defaultMenu) {
  switch (variant) {
    case "simple":
      return MenuSimple(props);
    case "collapsible":
      return MenuCollapsible(props);
  }
}
