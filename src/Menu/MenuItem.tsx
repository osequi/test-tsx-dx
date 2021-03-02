import { Link } from "../Link";
export type TMenuItemVariants = "section" | "item";

export interface TMenuItem {
  variant: TMenuItemVariants;
  title: string;
  // NOTE: any is better. Otherwise it's either TMenuItem, TMenuItem[], or ReactNode
  children: any;
  isActive: boolean;
  href?: string;
}

export const defaultMenuItem: TMenuItem = {
  variant: "item",
  title: "Menu item",
  children: null,
  isActive: false,
  href: null,
};

export function MenuItem(props: TMenuItem = defaultMenuItem) {
  const { variant, title, children, isActive, href } = props;
  const className = isActive ? "MenuItem Active" : "MenuItem Inactive";
  switch (variant) {
    case "section":
      return <span className={className}>{title}</span>;
    case "item":
      switch (isActive) {
        case true:
          return <span className={className}>{children}</span>;
        default:
          return <Link title={children} href={href} />;
      }
  }
}
