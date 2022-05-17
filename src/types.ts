import { SVGProps } from "react";

export type SvgIconProps = {
  active?: boolean,
  color?: string,
  bgColor?: string;
} & SVGProps<SVGSVGElement>