import { MouseEventHandler, SVGProps } from "react";

export type SvgIconProps = {
  active?: boolean,
  color?: string,
  bgColor?: string;
  width?: string;
} & SVGProps<SVGSVGElement>

export type CardProps = {
  title?: string;
  value?: string;
  btnText?: string;
  currency?: string;
  btnColor?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>
}