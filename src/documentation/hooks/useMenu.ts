import { compact, flattenDeep } from "lodash";
import { TMenuItem, TMenu } from "../";
import { useFolders, useTitle } from ".";

/**
 * Returns a menu following the folder structure.
 * @param  {[type]} data [description]
 * @return {[type]}      [description]
 */
export function useMenu(menu: TMenu, rootDir: string): TMenuItem[] {
  const { data, activeMenuItem } = menu;
  const foldersList = flattenDeep(useFolders(data));
  const foldersListSorted = foldersList.sort((a, b) => 0 - (a > b ? -1 : 1));
  return parseFolders(foldersListSorted, activeMenuItem, rootDir);
}

function parseFolders(
  folders: string[],
  activeMenuItem: string,
  rootDir: string
): TMenuItem[] {
  return compact(
    folders.reduce((result, item) => {
      return [...result, parseEntry(item, result, activeMenuItem, rootDir)];
    }, [])
  );
}

function parseEntry(
  item: string,
  result: TMenuItem[],
  activeMenuItem: string,
  rootDir: string
): TMenuItem | TMenuItem[] {
  const split = item.split("/");
  if (split.length === 1) {
    return parseItem(item, activeMenuItem, rootDir);
  } else {
    return parseSection(item, result, activeMenuItem, rootDir);
  }
}

function parseSection(
  item: string,
  result: TMenuItem[],
  activeMenuItem: string,
  rootDir: string
): TMenuItem | TMenuItem[] {
  const split = item.split("/");
  const title = split[0];
  const newItem = item.replace(`${title}/`, "");

  const newTitle = useTitle({ name: title, kindString: "Module" });
  const existing = result.find((item) => item?.title === newTitle);

  if (existing) {
    existing.children = compact([
      ...existing.children,
      parseEntry(newItem, existing.children, activeMenuItem, rootDir),
    ]);
  } else
    return {
      variant: "section",
      title: newTitle,
      children: [parseEntry(newItem, [], activeMenuItem, rootDir)],
      isActive: title === activeMenuItem,
    };
}

function parseItem(
  item: string,
  activeMenuItem: string,
  rootDir: string
): TMenuItem {
  const split = item.split(".");
  const title = split[0];
  const titleized = useTitle({ name: title, kindString: "Module" });

  return {
    variant: "item",
    title: titleized,
    isActive: title === activeMenuItem,
    children: title,
    href: `${rootDir}/${title}`,
  };
}
