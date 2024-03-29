import * as React from "react"
import { SVGProps } from "react"

const ArrowUpDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={48}
    height={48}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={48} height={48} rx={15} fill="#F2F2F2" />
    <path
      d="M21.011 33.25c-.19 0-.38-.07-.53-.22l-5.01-5.01a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l5.01 5.01c.29.29.29.77 0 1.06-.15.14-.34.22-.53.22Z"
      fill="#7165E3"
    />
    <path
      d="M21.012 33.25c-.41 0-.75-.34-.75-.75v-17c0-.41.34-.75.75-.75s.75.34.75.75v17c0 .41-.34.75-.75.75ZM32.011 21.26c-.19 0-.38-.07-.53-.22l-5.01-5.01a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l5.01 5.01c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22Z"
      fill="#7165E3"
    />
    <path
      d="M26.988 33.25c-.41 0-.75-.34-.75-.75v-17c0-.41.34-.75.75-.75s.75.34.75.75v17c0 .41-.33.75-.75.75Z"
      fill="#7165E3"
    />
  </svg>
)

export default ArrowUpDown
