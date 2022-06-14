import * as React from "react";
import { SVGProps } from "react";

const DebitRecieptCardIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={28}
    height={28}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M25.252 12.795c.47 0 .86-.39.86-.86v-1.147c0-5.057-1.537-6.594-6.594-6.594h-7.167v2.58c0 .47-.39.86-.86.86s-.86-.39-.86-.86v-2.58H8.05c-5.057 0-6.594 1.537-6.594 6.594v.573c0 .47.39.86.86.86 1.101 0 2.007.906 2.007 2.007s-.906 2.007-2.007 2.007c-.47 0-.86.39-.86.86v.574c0 5.057 1.537 6.593 6.594 6.593h2.58v-2.58c0-.47.39-.86.86-.86s.86.39.86.86v2.58h7.167c5.057 0 6.594-1.536 6.594-6.593 0-.47-.39-.86-.86-.86-1.101 0-2.007-.907-2.007-2.007 0-1.101.906-2.007 2.007-2.007Zm-12.9 3.922c0 .47-.39.86-.861.86-.47 0-.86-.39-.86-.86V11.74c0-.47.39-.86.86-.86s.86.39.86.86v4.977Z"
      fill="#7165E3"
    />
  </svg>
);

export default DebitRecieptCardIcon;