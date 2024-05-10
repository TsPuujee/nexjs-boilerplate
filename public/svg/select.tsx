import * as React from "react";
const SvgComponent = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <ellipse cx={11.647} cy={12.003} fill={props?.color} rx={5.491} ry={6} />
    <path
      stroke="#fff"
      strokeOpacity={0.2}
      strokeWidth={6}
      d="M11.647 21.003c4.934 0 8.49-4.286 8.49-9 0-4.715-3.556-9-8.49-9s-8.49 4.285-8.49 9c0 4.714 3.556 9 8.49 9Z"
    />
  </svg>
);
export default SvgComponent;
