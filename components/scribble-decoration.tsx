import React from "react";

import { cn } from "@/utils/cn";

type ScribbleVariant = 1 | 2 | 3 | 4;

interface ScribbleDecorationProps extends React.PropsWithChildren {
  variant?: ScribbleVariant;
  className?: string;
  svgClassName?: string;
}

const ScribbleSVG1 = ({ className }: { className: string }) => (
  <svg
    className={className}
    strokeLinejoin="round"
    strokeLinecap="round"
    stroke="currentColor"
    aria-hidden="true"
    viewBox="0 0 22 22"
    fill="none"
  >
    <path
      className="group-hover:animate-dash"
      strokeDasharray="16"
      strokeDashoffset="16"
      d="M3.693,9.52c.214-1.812.414-1.788.628-3.6s.154-1.819.368-3.631"
    />
    <path
      className="group-hover:animate-dash"
      strokeDasharray="16"
      strokeDashoffset="16"
      d="M11.02,11.4c1.24-1.452.966-1.686,2.205-3.139s1.206-1.485,2.448-2.94,1.426-1.3,2.668-2.752"
    />
    <path
      className="group-hover:animate-dash"
      strokeDasharray="16"
      strokeDashoffset="16"
      d="M15.6,17.185c2.183-.243,2.184-.232,4.367-.475"
    />
  </svg>
);

const ScribbleSVG2 = ({ className }: { className: string }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeMiterlimit="10"
    aria-hidden="true"
    viewBox="0 0 29 29"
  >
    <path
      className="group-hover:animate-dash"
      strokeDasharray="100"
      strokeDashoffset="100"
      d="M12.45 4.052C5.958 3.064.55 11.027 2.666 17.244s9.522 9.513 16.012 8.514c2.282-.352 4.643-1.245 5.953-3.146a9.979 9.979 0 0 0 1.262-3.065c1.225-4.469 1.619-9.786-1.487-13.225-3.473-3.843-9.5-3.5-14.635-2.855"
    />
    <path
      className="group-hover:animate-dash"
      strokeDasharray="20"
      strokeDashoffset="20"
      d="m20.779 10.559-5.857 7.015a32.613 32.613 0 0 0-5.45-6.441"
    />
  </svg>
);

const ScribbleSVG3 = ({ className }: { className: string }) => (
  <svg
    className={className}
    viewBox="0 0 40 16"
    aria-hidden="true"
    fill="none"
    stroke="currentColor"
    strokeMiterlimit="10"
  >
    <path
      className="group-hover:animate-dash"
      strokeDasharray="40"
      strokeDashoffset="40"
      d="M1.23,8.841A134.1,134.1,0,0,1,33.99,7.489"
    />
    <path
      className="group-hover:animate-dash"
      strokeDasharray="30"
      strokeDashoffset="30"
      d="M22.2,2.632A71.858,71.858,0,0,1,35.767,6.509a86.049,86.049,0,0,0-11.809,7.3"
    />
  </svg>
);

const ScribbleSVG4 = ({ className }: { className: string }) => (
  <svg
    className={className}
    viewBox="0 0 154 9"
    preserveAspectRatio="none"
    aria-hidden="true"
    fill="none"
    stroke="currentColor"
    strokeMiterlimit="10"
  >
    <path
      className="group-hover:animate-dash"
      strokeDasharray="150"
      strokeDashoffset="150"
      d="M1.664,5.5,150.332,2.91"
    />
    <path
      className="group-hover:animate-dash"
      strokeDasharray="150"
      strokeDashoffset="150"
      d="M5.984,2.632C53.832,5.236,105.081,5.928,153,6"
    />
  </svg>
);

const variantComponents = {
  1: ScribbleSVG1,
  2: ScribbleSVG2,
  3: ScribbleSVG3,
  4: ScribbleSVG4,
};

export const ScribbleDecoration: React.FC<ScribbleDecorationProps> = ({
  svgClassName = "",
  className = "",
  variant = 1,
  children,
}) => {
  const SVGComponent = variantComponents[variant];

  return (
    <div className={cn("group relative", className)}>
      {children}
      <SVGComponent className={cn("absolute", svgClassName)} />
    </div>
  );
};
