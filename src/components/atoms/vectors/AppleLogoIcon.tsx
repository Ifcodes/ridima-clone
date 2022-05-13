import * as React from "react"
import { SVGProps } from "react"

const AppleLogoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={48}
    height={48}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M.429 24C.429 37.018 10.982 47.571 24 47.571S47.571 37.018 47.571 24 37.018.429 24 .429.429 10.982.429 24Z"
      fill="#000"
    />
    <path
      d="M24.238 15.84c.892 0 2.01-.62 2.675-1.449.603-.75 1.042-1.799 1.042-2.847 0-.142-.012-.285-.038-.401-.992.039-2.184.686-2.9 1.553-.565.66-1.08 1.695-1.08 2.756 0 .156.025.311.038.363.063.013.163.026.263.026ZM21.1 31.5c1.217 0 1.757-.841 3.277-.841 1.544 0 1.883.815 3.24.815 1.33 0 2.221-1.268 3.063-2.51.941-1.424 1.33-2.822 1.356-2.886-.088-.026-2.637-1.1-2.637-4.116 0-2.614 2.009-3.792 2.122-3.882-1.331-1.968-3.352-2.02-3.905-2.02-1.494 0-2.712.933-3.478.933-.829 0-1.92-.88-3.214-.88-2.461 0-4.96 2.096-4.96 6.056 0 2.459.93 5.06 2.072 6.743.98 1.423 1.833 2.588 3.064 2.588Z"
      fill="#fff"
    />
  </svg>
)

export default AppleLogoIcon
