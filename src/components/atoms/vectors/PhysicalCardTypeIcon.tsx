import * as React from "react";
import { SVGProps } from "react";

const PhysicalCardTypeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={29}
    height={28}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19.59 4.894h-7.729v3.463a.805.805 0 0 1-.803.803.805.805 0 0 1-.803-.803V4.894h-1.33c-4.53 0-6.02 1.353-6.123 5.584a.778.778 0 0 0 .23.574c.148.16.343.24.572.24 1.606 0 2.925 1.33 2.925 2.936 0 1.606-1.32 2.936-2.925 2.936a.771.771 0 0 0-.573.24.778.778 0 0 0-.23.574c.104 4.232 1.595 5.585 6.124 5.585h1.33V20.1c0-.448.367-.803.803-.803.436 0 .803.355.803.803v3.463h7.729c4.702 0 6.135-1.434 6.135-6.135v-6.4c0-4.7-1.433-6.134-6.135-6.134Zm2.087 9.22-1.066 1.032c-.046.034-.058.103-.046.16l.252 1.457a.703.703 0 0 1-.287.7.702.702 0 0 1-.745.056l-1.319-.688a.195.195 0 0 0-.16 0l-1.32.688a.679.679 0 0 1-.332.08.688.688 0 0 1-.413-.137.717.717 0 0 1-.286-.7l.252-1.456a.206.206 0 0 0-.046-.16l-1.066-1.032a.706.706 0 0 1-.184-.723.678.678 0 0 1 .574-.482l1.468-.217a.228.228 0 0 0 .137-.092l.654-1.33a.717.717 0 0 1 .642-.39c.275 0 .516.149.63.39l.654 1.33c.023.057.07.092.126.092l1.468.217c.276.035.493.23.574.482a.659.659 0 0 1-.16.723Z"
      fill="#7165E3"
    />
  </svg>
);

export default PhysicalCardTypeIcon;
