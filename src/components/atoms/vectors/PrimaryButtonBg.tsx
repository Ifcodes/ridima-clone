import * as React from "react"
import { SVGProps } from "react"
import { SvgIconProps } from "../../../types"

const PrimaryButtonBg = (props: SvgIconProps) => (
 <svg
    viewBox="0 0 436 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 39.541C0 17.703 17.703 0 39.541 0H400.6C420.15 0 436 15.85 436 35.401c0 19.236-15.359 34.951-34.59 35.392l-360.962 8.28C18.261 79.58 0 61.733 0 39.54Z"
      fill={props.bgColor || "#F5CF48"}
    />
  </svg>
)

export default PrimaryButtonBg
