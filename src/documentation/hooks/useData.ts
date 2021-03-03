/**
 * Defines a minimal interface to Typedoc generated JSON data.
 *
 * This is a partial mapping of the data, good enough to create a menu structure.
 */
export interface TData {
  name: string;
  kindString?: string;
  children?: any;
  sources?: { fileName: string }[];
}

/**
 * Retrieves Typedoc generated JSON data.
 *
 * Note: When props are merged into a `props` type `fs` and `path` doesn't work at all.
 * @param  folder   The folder where the Typedoc generated JSON file is located.
 * @param  fileName The name of the Typedoc generated JSON file.
 * @param  fs       The `fs` package.
 * @param  path     The `path` package.
 * @return          Any. This async function doesn't accept `TData` as return type.
 */
export async function useData(folder: string, fileName: string, fs, path) {
  const dataDirectory = path.join(process.cwd(), folder);
  const filePath = path.join(dataDirectory, fileName);
  const fileContents = await fs.readFile(filePath, "utf8");
  return JSON.parse(fileContents);
}
