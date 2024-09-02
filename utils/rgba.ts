type RGB = [number, number, number];

interface RGBAOptions {
  alpha?: number;
}

const HEX_COLOR_REGEX = /^#?[0-9A-Fa-f]{6}$/;

export function rgba(hex: string, { alpha = 1 }: RGBAOptions = {}): string {
  if (!HEX_COLOR_REGEX.test(hex)) {
    throw new Error("Invalid hex color format. Expected format: #RRGGBB");
  }

  if (typeof alpha !== "number" || alpha < 0 || alpha > 1) {
    throw new Error("Alpha must be a number between 0 and 1");
  }

  const cleanHex = hex.replace(/^#/, "");
  const rgb = hexToRgb(cleanHex);

  return `rgba(${rgb.join(", ")}, ${alpha})`;
}

function hexToRgb(hex: string): RGB {
  return (hex.match(/.{2}/g) ?? []).map((val) => parseInt(val, 16)) as RGB;
}
