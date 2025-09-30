import * as React from "react";

export type IconProps = React.SVGProps<SVGSVGElement> & {
  size?: number | string;
  strokeWidth?: number | string;
};

const GreensparkLabsIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 48, strokeWidth = 2, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* flask neck */}
      <rect x="10.5" y="2" width="3" height="5" rx="0.8" fill="none" />

      {/* flask bulb (outline) */}
      <path d="M6 7c0 4 2.5 7 6 7s6-3 6-7V7H6z" />

      {/* liquid line */}
      <path d="M9.5 12.2c1-.5 2-.7 3.5-.3 1.7.5 3 0 4-1" strokeLinecap="butt" />

      {/* leaf shaped spark emerging from liquid */}
      <path d="M12 9.2c1.6-1.6 3.2-1.7 4.2-0.7 1 1-0.1 2.8-1.6 4.2C13.6 13.9 12.6 13.6 11.8 12.8 11 12 11.3 10.8 12 9.2z" />

      {/* small spark star to the right (outline) */}
      <g>
        <line x1="17.5" y1="6" x2="17.5" y2="8" />
        <line x1="16.2" y1="7" x2="18.8" y2="7" />
        <line x1="16.1" y1="6.1" x2="18.9" y2="7.9" />
        <line x1="16.1" y1="7.9" x2="18.9" y2="6.1" />
      </g>
    </svg>
  )
);

GreensparkLabsIcon.displayName = "GreensparkLabsIcon";

export default GreensparkLabsIcon;
