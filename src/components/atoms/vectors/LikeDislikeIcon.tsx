import * as React from "react";
import { SVGProps } from "react";

const LikeDislikeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m6.555 27.04 2.36 1.827c.306.306.986.453 1.453.453h2.893c.92 0 1.907-.68 2.134-1.6l1.826-5.56c.387-1.067-.306-1.987-1.453-1.987h-3.053c-.454 0-.84-.386-.76-.92l.386-2.44c.147-.68-.306-1.453-.986-1.68-.614-.226-1.374.08-1.68.534l-3.12 4.653"
      stroke="#7165E3"
      strokeWidth={1.5}
      strokeMiterlimit={10}
    />
    <path
      d="M2.664 27.04v-7.467c0-1.066.453-1.453 1.52-1.453h.76c1.067 0 1.52.387 1.52 1.453v7.467c0 1.067-.453 1.453-1.52 1.453h-.76c-1.067 0-1.52-.373-1.52-1.453Z"
      stroke="#7165E3"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m25.439 4.96-2.36-1.827c-.307-.306-.987-.453-1.454-.453h-2.893c-.92 0-1.907.68-2.133 1.6l-1.827 5.56c-.387 1.067.306 1.987 1.453 1.987h3.053c.454 0 .84.386.76.92l-.386 2.44c-.147.68.306 1.453.986 1.68.614.226 1.374-.08 1.68-.534l3.12-4.653"
      stroke="#7165E3"
      strokeWidth={1.5}
      strokeMiterlimit={10}
    />
    <path
      d="M29.331 4.96v7.467c0 1.066-.453 1.453-1.52 1.453h-.76c-1.066 0-1.52-.387-1.52-1.453V4.96c0-1.067.454-1.453 1.52-1.453h.76c1.067 0 1.52.373 1.52 1.453Z"
      stroke="#7165E3"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default LikeDislikeIcon;
