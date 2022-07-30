import { SvgIconProps } from "../../../types";

const TriangleDownIcon = (props: SvgIconProps) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.919 8.18H6.079c-.96 0-1.44 1.16-.76 1.84l5.18 5.18c.83.83 2.18.83 3.01 0l1.97-1.97 3.21-3.21c.67-.68.19-1.84-.77-1.84Z"
      fill={props.bgcolor || "#E81313"}
    />
  </svg>
);

export default TriangleDownIcon;
