/**
 * Converts a string to a consistent hex color code.
 * @param str - The input string to convert.
 * @returns A hex color code (e.g., "#1a2b3c").
 */
const stringToColor = (str: string): string => {
  if (!str || typeof str !== "string") {
    throw new Error("Input must be a non-empty string.");
  }

  const hash = str
    .split("")
    .reduce((acc, char) => char.charCodeAt(0) + ((acc << 5) - acc), 0);

  const color = [0, 1, 2]
    .map((i) => ((hash >> (i * 8)) & 0xff).toString(16).padStart(2, "0"))
    .join("");

  return `#${color}`;
};

/**
 * Generates a random hex color code.
 * @returns A random hex color code (e.g., "#1a2b3c").
 */
const generateRandomColor = (): string => {
  return `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padStart(6, "0")}`;
};

/**
 * Checks if a color is dark (useful for determining text contrast).
 * @param color - The hex color code to check.
 * @returns `true` if the color is dark, `false` otherwise.
 */
const isDarkColor = (color: string): boolean => {
  if (!/^#([0-9a-f]{6}|[0-9a-f]{3})$/i.test(color)) {
    throw new Error("Invalid hex color code.");
  }

  const hex = color.replace("#", "");
  const r = parseInt(
    hex.length === 3 ? hex[0] + hex[0] : hex.substring(0, 2),
    16,
  );
  const g = parseInt(
    hex.length === 3 ? hex[1] + hex[1] : hex.substring(2, 4),
    16,
  );
  const b = parseInt(
    hex.length === 3 ? hex[2] + hex[2] : hex.substring(4, 6),
    16,
  );
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  return brightness < 128;
};

/**
 * Adjusts the brightness of a hex color.
 * @param color - The hex color code to adjust.
 * @param percent - The percentage to adjust the brightness by (e.g., 20 for 20% brighter, -20 for 20% darker).
 * @returns The adjusted hex color code.
 */
const adjustBrightness = (color: string, percent: number): string => {
  if (!/^#([0-9a-f]{6}|[0-9a-f]{3})$/i.test(color)) {
    throw new Error("Invalid hex color code.");
  }

  const hex = color.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  const clamp = (value: number): number => Math.max(0, Math.min(255, value));

  const adjust = (value: number) => clamp(value + (255 * percent) / 100);

  const adjustedR = adjust(r);
  const adjustedG = adjust(g);
  const adjustedB = adjust(b);

  return `#${Math.round(adjustedR).toString(16).padStart(2, "0")}${Math.round(adjustedG).toString(16).padStart(2, "0")}${Math.round(adjustedB).toString(16).padStart(2, "0")}`;
};

export { stringToColor, generateRandomColor, isDarkColor, adjustBrightness };
