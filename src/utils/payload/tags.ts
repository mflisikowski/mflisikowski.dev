export const GLOBAL_KEYS = {
  navigation: "navigation",
} as const satisfies Record<string, string>;

export type GlobalKeys = (typeof GLOBAL_KEYS)[keyof typeof GLOBAL_KEYS];

export const NAVIGATION_KEY = GLOBAL_KEYS.navigation;
export const NAVIGATION_TAG = `global_${NAVIGATION_KEY}`;
