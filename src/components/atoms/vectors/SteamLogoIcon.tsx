import * as React from "react";
import { SVGProps } from "react";

const SteamLogoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    // width={93}
    // height={93}
    viewBox="0 0 93 92"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={49.338} cy={44.049} r={43.131} fill="#1A293B" />
    <circle
      cx={44.736}
      cy={47.5}
      r={43.837}
      stroke="#3F1E4B"
      strokeWidth={1.413}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M53.178 23.165c4.679.849 8.59 3.015 11.887 6.584 7.399 8.007 7.399 20.614 0 28.621-7.133 7.72-18.35 9.181-27.25 3.55-3.585-2.27-7.013-6.473-8.332-10.22-.265-.752-.43-1.417-.369-1.48.062-.061 1.805.59 3.875 1.45 3.45 1.432 3.813 1.663 4.38 2.791.836 1.66 1.44 2.302 2.837 3.016 1.305.667 3.54.787 4.921.265 1.853-.701 3.892-3.462 3.91-5.294.01-.936 6.875-5.837 8.182-5.842 1.404-.005 3.96-1.37 5.249-2.802 3.538-3.933 2.267-10.202-2.536-12.51-2.03-.977-5.116-1.005-6.93-.063-2.525 1.31-4.571 4.124-4.587 6.308-.005.682-.763 2.068-2.572 4.7-2.103 3.062-2.705 3.733-3.35 3.733-.43 0-1.311.22-1.955.49-1.17.49-1.18.487-6.826-1.832l-5.653-2.323.179-1.115c1.477-9.18 8.116-16.215 16.99-18.005 2.709-.547 5.024-.553 7.95-.022Zm5.737 10.794c1.565.83 2.85 2.861 2.85 4.507 0 1.45-1.26 3.721-2.544 4.584-.932.625-1.426.728-3.035.628-3.148-.194-4.969-2.093-4.969-5.184 0-4.065 4.065-6.46 7.698-4.535Zm-4.562 1.135c-3.108 2.053-2.429 6.56 1.108 7.345 4.438.987 6.897-4.951 3.029-7.314-1.28-.783-2.98-.796-4.137-.031Zm-9.466 13.03c3.131 1.599 3.33 5.661.373 7.64-1.434.96-3.402.962-4.81.006-1.742-1.182-1.55-1.617.376-.856 2.165.855 3.784.488 4.734-1.073 1.277-2.098.49-4.035-2.104-5.184-.95-.421-1.727-.839-1.727-.929 0-.386 2.159-.116 3.158.395Z"
      fill="#fff"
    />
    <defs>
      <linearGradient
        id="a"
        x1={21.675}
        y1={87.18}
        x2={-7.9}
        y2={12.655}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#1A293B" />
        <stop offset={1} stopColor="#183F5A" />
      </linearGradient>
    </defs>
  </svg>
);

export default SteamLogoIcon;
