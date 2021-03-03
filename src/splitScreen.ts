/**
 * Defines the Split Screen interface.
 */
export interface TSplitScreen {
  /**
   * The size of the first column.
   */
  column: string | string[];
  /**
   * The gap between the columns.
   */
  gap: number | number[];
}

export const splitScreen: TSplitScreen = {
  column: "25%",
  gap: 1,
};
