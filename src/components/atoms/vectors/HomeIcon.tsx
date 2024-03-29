import * as React from "react";
import { SVGProps } from "react";
import { SvgIconProps } from "../../../types";

const HomeIcon = (props: SvgIconProps) => (
  <svg
    width={28}
    height={28}
    viewBox="0 0 28 28"
    fill="white"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20.53 26.32H7.464c-2.124 0-4.06-1.633-4.41-3.733L1.502 13.3c-.245-1.447.455-3.302 1.61-4.223l8.085-6.475c1.563-1.26 4.025-1.249 5.6.011l8.085 6.464c1.143.921 1.843 2.776 1.61 4.223l-1.552 9.287c-.35 2.065-2.321 3.733-4.41 3.733ZM13.985 3.43c-.618 0-1.236.187-1.691.548l-8.085 6.475c-.665.537-1.12 1.727-.98 2.567l1.551 9.287c.21 1.225 1.435 2.263 2.684 2.263H20.53c1.249 0 2.474-1.038 2.684-2.275l1.551-9.287c.14-.84-.326-2.041-.98-2.566L15.7 3.978c-.466-.361-1.085-.548-1.715-.548Z"
      fill={props.active ? "#FFFFFE" : "#7165E3"}
    />
    <path
      d="M14.003 18.958a3.8 3.8 0 0 1-3.792-3.791 3.8 3.8 0 0 1 3.792-3.792 3.8 3.8 0 0 1 3.791 3.792 3.8 3.8 0 0 1-3.791 3.791Zm0-5.833c-1.12 0-2.042.922-2.042 2.042 0 1.12.922 2.041 2.042 2.041 1.12 0 2.041-.921 2.041-2.041 0-1.12-.921-2.042-2.041-2.042Z"
      fill={props.active ? "#FFFFFE" : "#7165E3"}
    />
  </svg>
);

export default HomeIcon;
