export type UserColorScheme = "light" | "dark" | "light dark";
export type ActiveColorScheme = "light" | "dark";

export interface ColorSchemeStatus {
  /** The user's selected preference ("light", "dark", or "light dark" for system) */
  user: UserColorScheme;

  /** The currently active color scheme on the page */
  current: ActiveColorScheme;
}

export interface ColorSchemeModule {
  /**
   * Initialize the module:
   * - Reads the user choice from localStorage (default: "light dark")
   * - Sets up system color scheme event listener
   */
  setup(): void;

  /**
   * Set a new user-selected color scheme preference.
   * Triggers the change event if the preference changes.
   */
  setUserChoice(newUserChoice: UserColorScheme): void;

  /** Get the currently stored user choice ("light", "dark", or "light dark") */
  getUserChoice(): UserColorScheme;

  /** Get the currently active color scheme on the page ("light" or "dark") */
  getCurrent(): ActiveColorScheme;

  /** Get full status: { user, current } */
  get(): ColorSchemeStatus;

  /**
   * Add a callback that will be called when the color scheme changes.
   * The callback receives an object with { user, current }.
   */
  addEventListenerOnChange(
    callback: (status: ColorSchemeStatus) => void
  ): void;

  /** Get the system color scheme preference ("light" or "dark") */
  getSystem(): ActiveColorScheme;
}

/** Default export: the color scheme module */
declare const colorScheme: ColorSchemeModule;
export default colorScheme;
