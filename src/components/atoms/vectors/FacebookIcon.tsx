import * as React from "react"
import { SVGProps } from "react"

const FacebookIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={48}
    height={48}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect y={0.857} width={47.143} height={47.143} rx={23.571} fill="#1877F2" />
    <g clipPath="url(#a)">
      <path
        d="M31.714 24.429a8.143 8.143 0 1 0-9.415 8.043v-5.69h-2.067V24.43h2.067v-1.794c0-2.041 1.216-3.169 3.076-3.169.89 0 1.823.16 1.823.16v2.003H26.17c-1.012 0-1.327.628-1.327 1.272v1.528h2.258l-.36 2.353h-1.898v5.69a8.145 8.145 0 0 0 6.87-8.043Z"
        fill="#1877F2"
      />
      <path
        d="m26.741 26.782.361-2.353h-2.258V22.9c0-.644.315-1.271 1.327-1.271h1.027v-2.004s-.932-.16-1.823-.16c-1.86 0-3.076 1.128-3.076 3.169v1.794h-2.067v2.353h2.067v5.69a8.198 8.198 0 0 0 2.545 0v-5.69h1.897Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path
          fill="#fff"
          transform="translate(15.429 16.286)"
          d="M0 0h16.286v16.286H0z"
        />
      </clipPath>
    </defs>
  </svg>
)

export default FacebookIcon
