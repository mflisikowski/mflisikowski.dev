import { getTailwindColor } from "@/utils/colors";

export const color = getTailwindColor({
  color: "zinc",
  shade: "950",
  alpha: 1,
});

export const Icon = ({ className }: { className?: string }) => {
  return (
    <svg viewBox="0 0 128 128" className={className}>
      <path fill={color} d="M64.002 8.576 128 119.424H0Zm0 0"></path>
    </svg>
  );
};
