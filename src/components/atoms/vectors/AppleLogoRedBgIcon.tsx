import * as React from "react";
import { SVGProps } from "react";

const AppleLogoRedBgIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={93}
    height={92}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={49.22} cy={43.833} r={43.131} fill="url(#apple)" />
    <circle
      cx={44.619}
      cy={47.284}
      r={43.837}
      stroke="#3F1E4B"
      strokeWidth={1.413}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M51.613 31.092c-.488.262-1.181.772-1.54 1.134-.824.829-1.712 2.821-1.714 3.845-.002.653.08.78.501.776.748-.008 2.207-.792 2.945-1.584.772-.828 1.402-2.257 1.61-3.653.142-.953.12-1.012-.382-1.003-.293.006-.932.224-1.42.485Zm-8.455 5.861c-2.024.578-3.76 2.357-4.48 4.59-.486 1.51-.517 4.738-.065 6.796.614 2.8 2.7 6.559 4.375 7.886 1.104.875 2.032.979 3.53.395 2.182-.852 2.9-.88 4.779-.183.927.343 1.93.624 2.228.623.908-.002 2.258-1.07 3.387-2.681 1.273-1.815 2.577-4.358 2.289-4.463-1.414-.512-2.856-2.399-3.217-4.208-.417-2.09.175-4.016 1.713-5.575l.839-.85-.541-.619c-.298-.34-1.1-.912-1.781-1.27-1.509-.793-3.07-.816-5.037-.077-1.63.614-2.407.624-3.962.054-1.758-.645-2.864-.759-4.057-.418Z"
      fill="#fff"
    />
    <defs>
      <linearGradient
        id="apple"
        x1={17.155}
        y1={4.297}
        x2={92.65}
        y2={16.376}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#EB2525" />
        <stop offset={1} stopColor="#C0742E" />
      </linearGradient>
    </defs>
  </svg>
);

export default AppleLogoRedBgIcon;
