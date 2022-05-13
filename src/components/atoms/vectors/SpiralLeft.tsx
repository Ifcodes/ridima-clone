import * as React from "react"
import { SVGProps } from "react"
import { SpiralSvgLg } from "./SpiralLeftSm";

export type spiralProps ={
  bluespiral?: Boolean;
} & SVGProps<SVGSVGElement>;

const SpiralLeft = (props: spiralProps) => (
  <SpiralSvgLg>
    <svg
      width={238}
      height={301}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M231.494 193.788c7.733-32.99 7.167-65.982 2.92-94.528-3.977-27.485-11.047-55.306-24.036-71.873-14.487-18.203-37.695-22.446-57.413-25.26-33.958-4.902-75.436 2.256-106.748 55.101-32.574 54.977-24.3 115.466-3.741 152.827 21.086 38.49 56.132 59.98 95.204 27.732 17.08-14.189 34.229-39.471 39.813-69.086 5.399-28.924 1.41-57.401-6.602-77.573-9.404-23.754-25.44-42.372-45.567-41.592-17.041.619-38.325 18.62-48.224 47.82-9.405 27.357-4.94 58.183 10.132 65.431 13.646 6.373 33.179-7.159 41.703-32.777.185-.691-.331-.829-.584-.403-11.626 18.614-29.33 28.932-37.943 12.55-7.428-14.09-4.819-39.317 6.763-56.214 28.736-41.683 60.348.368 67.569 35.883 4.152 20.125 1.244 47.495-10.68 68.251-10.409 18.199-24.566 29.22-37.713 32.858-29.695 8.093-53.614-19.304-66.098-53.761-5.841-15.886-9.477-35.873-5.868-58.116 3.609-22.243 14.175-43.61 26.694-57.293C99.799 22.45 133.42 26.027 159.49 33.011c14.713 3.942 30.8 9.981 39.497 28.114 7.574 15.61 11.428 37.878 13.021 59.293 1.79 21.714 2.72 47.149-3.761 71.338-6.05 22.577-18.989 38.863-32.114 50.162-28.73 25.141-59.692 23.512-86.059 18.669-15.15-2.825-29.739-7.228-43.278-15.547-13.153-8.216-26.58-17.986-36.276-33.424-3.405-5.357-11.216 3.661-9.197 11.61 6.71 24.514 17.343 43.166 32.521 54.147 14.853 10.646 31.77 16.167 48.727 19.476 32.432 6.468 70.801 8.847 106.119-25.394 18.259-18.07 35.189-45.633 42.804-77.667Z"
        fill={props.bluespiral ? "#7165E3" : "#FFFFFE"}
      />
    </svg>
  </SpiralSvgLg>
)

export default SpiralLeft
