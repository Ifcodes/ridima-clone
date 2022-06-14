import * as React from "react";
import { SVGProps } from "react";

const EcodeCardIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={28}
    height={28}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20.018 6.155v.023c-.287-.011-.574-.023-.883-.023h-8.83l1.227-1.215c1.123-1.136 2.362-2.18 3.795-2.18 1.445 0 2.684 1.044 3.808 2.18l.642.642c.16.149.24.355.24.573ZM24.202 15.57a.81.81 0 0 0 .803-.826v-1.009c0-4.507-1.376-5.871-5.871-5.871H8.996c-4.495 0-5.871 1.376-5.871 5.871v.493a.8.8 0 0 0 .803.814c.963 0 1.731.78 1.731 1.732a1.74 1.74 0 0 1-1.731 1.743.8.8 0 0 0-.803.814v.493c0 4.507 1.376 5.872 5.871 5.872H19.122c4.495 0 5.871-1.377 5.871-5.872a.808.808 0 0 0-.802-.814 1.72 1.72 0 0 1-1.732-1.72c.012-.952.78-1.72 1.743-1.72Zm-11.49 6.525a.817.817 0 0 1-.814.814.817.817 0 0 1-.815-.814v-3.073c0-.448.367-.815.815-.815.447 0 .814.367.814.814v3.074Zm0-7.557a.817.817 0 0 1-.814.814.817.817 0 0 1-.815-.814v-3.074c0-.447.367-.814.815-.814.447 0 .814.367.814.814v3.074Z"
      fill="#7165E3"
    />
  </svg>
);

export default EcodeCardIcon;