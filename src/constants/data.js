const DEFAULT_BAR_CONTAINER_WIDTH = 520;
const DEFAULT_BAR_WIDTH = 500;
const DEFAULT_WIDTH_MINUS = 20;

/** Progress bar's width(size calculated based on screen size) */
export const BAR_WIDTH = window.innerWidth < DEFAULT_BAR_CONTAINER_WIDTH ? 
  window.innerWidth - DEFAULT_WIDTH_MINUS : DEFAULT_BAR_WIDTH;