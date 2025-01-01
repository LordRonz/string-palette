import {
  stringToColor,
  generateRandomColor,
  isDarkColor,
  adjustBrightness,
} from ".";
import { describe, it, expect } from "vitest";

describe("stringToColor", () => {
  it("should generate a consistent hex color from a string", () => {
    expect(stringToColor("hello")).toBe("#d218e9");
    expect(stringToColor("world")).toBe("#921bc1");
    expect(stringToColor("typescript")).toBe("#858cde");
  });

  it("should throw an error for empty string", () => {
    expect(() => stringToColor("")).toThrow(
      "Input must be a non-empty string.",
    );
  });

  it("should throw an error for non-string input", () => {
    expect(() => stringToColor(null as any)).toThrow(
      "Input must be a non-empty string.",
    );
    expect(() => stringToColor(123 as any)).toThrow(
      "Input must be a non-empty string.",
    );
  });
});

describe("generateRandomColor", () => {
  it("should generate a valid hex color", () => {
    const color = generateRandomColor();
    expect(color).toMatch(/^#[0-9a-f]{6}$/);
  });

  it("should generate different colors on subsequent calls", () => {
    const color1 = generateRandomColor();
    const color2 = generateRandomColor();
    expect(color1).not.toBe(color2);
  });
});

describe("isDarkColor", () => {
  it("should return true for dark colors", () => {
    expect(isDarkColor("#000000")).toBe(true);
    expect(isDarkColor("#333333")).toBe(true);
    expect(isDarkColor("#1a2b3c")).toBe(true);
  });

  it("should return false for light colors", () => {
    expect(isDarkColor("#ffffff")).toBe(false);
    expect(isDarkColor("#cccccc")).toBe(false);
    expect(isDarkColor("#f0f0f0")).toBe(false);
  });

  it("should throw an error for invalid hex color", () => {
    expect(() => isDarkColor("not-a-color")).toThrow("Invalid hex color code.");
    expect(() => isDarkColor("#1234567")).toThrow("Invalid hex color code.");
  });
});

describe("adjustBrightness", () => {
  it("should increase brightness by 20%", () => {
    expect(adjustBrightness("#000000", 20)).toBe("#333333");
    expect(adjustBrightness("#333333", 20)).toBe("#666666");
  });

  it("should decrease brightness by 20%", () => {
    expect(adjustBrightness("#ffffff", -20)).toBe("#cccccc");
    expect(adjustBrightness("#cccccc", -20)).toBe("#999999");
  });

  it("should clamp brightness to valid range", () => {
    expect(adjustBrightness("#000000", -20)).toBe("#000000");
    expect(adjustBrightness("#ffffff", 20)).toBe("#ffffff");
  });

  it("should throw an error for invalid hex color", () => {
    expect(() => adjustBrightness("not-a-color", 20)).toThrow(
      "Invalid hex color code.",
    );
    expect(() => adjustBrightness("#1234567", 20)).toThrow(
      "Invalid hex color code.",
    );
  });
});
