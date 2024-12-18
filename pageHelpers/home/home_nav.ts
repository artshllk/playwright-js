/**
 * Interface for Navigation Items
 * Defines the structure of navigation keys and their display values.
 */
export interface NavigationItems {
  mattresses: string;
  bundles: string;
  pillows: string;
  furniture: string;
}

/**
 * Navigation object containing display names for navigation items.
 */
export const navigation: NavigationItems = {
  mattresses: "Mattresses",
  bundles: "Bundles",
  pillows: "Pillows",
  furniture: "Furniture",
};

/**
 * Array of navigation keys for dynamic iteration.
 */
export const navigationKeys = Object.keys(
  navigation
) as (keyof NavigationItems)[];
