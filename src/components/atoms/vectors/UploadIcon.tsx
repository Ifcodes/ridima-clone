import * as React from "react";
import { SVGProps } from "react";

const FileUploadIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={25}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <mask
      id="a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={2}
      y={8}
      width={21}
      height={15}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.91 8.794h19.965v13.744H2.91V8.794Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.448 22.538H7.338a4.436 4.436 0 0 1-4.428-4.435v-4.875a4.436 4.436 0 0 1 4.427-4.434h.932a.75.75 0 0 1 0 1.5h-.932a2.935 2.935 0 0 0-2.93 2.934v4.875a2.935 2.935 0 0 0 2.93 2.935h11.11a2.936 2.936 0 0 0 2.93-2.935V13.22a2.925 2.925 0 0 0-2.918-2.925h-.942a.75.75 0 0 1 0-1.5h.942a4.426 4.426 0 0 1 4.416 4.425v4.884a4.436 4.436 0 0 1-4.427 4.435"
        fill="#7165E3"
      />
    </g>
    <mask
      id="b"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={12}
      y={2}
      width={2}
      height={14}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.145 2h1.497v13.541h-1.497V2.001Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#b)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.893 15.541a.75.75 0 0 1-.748-.75V2.75a.75.75 0 1 1 1.497 0v12.041a.75.75 0 0 1-.749.75"
        fill="#7165E3"
      />
    </g>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.983 6.429a.75.75 0 0 1-.53-1.279l2.91-2.928a.768.768 0 0 1 1.06 0l2.91 2.928a.75.75 0 0 1-.001 1.06.747.747 0 0 1-1.059-.002l-2.38-2.394-2.38 2.394a.741.741 0 0 1-.53.22"
      fill="#7165E3"
    />
  </svg>
);

export default FileUploadIcon;
