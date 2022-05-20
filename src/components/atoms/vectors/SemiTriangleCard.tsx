import * as React from "react"
import { SVGProps } from "react"

const SemiTriangleCard = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={562}
    height={215}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M561.534 168.973V63.046c0-23.478-17.671-43.194-41.01-45.753l-72.506-7.951a1534.251 1534.251 0 0 0-334.502 0L41.01 17.293C17.67 19.853 0 39.568 0 63.046v105.927C0 194.393 20.607 215 46.027 215h469.48c25.42 0 46.027-20.607 46.027-46.027Z"
      fill="#EBE9FB"
    />
  </svg>
)

export default SemiTriangleCard
