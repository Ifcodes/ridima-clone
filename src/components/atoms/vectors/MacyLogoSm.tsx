import * as React from "react";
import { SVGProps } from "react";

const MacyLogoSm = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={54}
    height={54}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={27} cy={27} r={27} fill="#C4C4C4" />
    <circle cx={27} cy={27} r={27} fill="url(#macy-logo-sm1)" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M35.507 38.988c-2.166 1.884-5.304 2.89-8.006 2.89-3.79 0-7.2-1.655-9.78-4.407-.204-.216-.022-.511.221-.343 2.785 1.913 6.229 3.064 9.786 3.064 2.398 0 5.037-.586 7.464-1.802.366-.184.673.284.315.598Z"
      fill="#fff"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M36.497 38.105c-.269-.371-1.78-.175-2.46-.088-.206.027-.237-.167-.051-.307 1.204-.916 3.18-.652 3.41-.345.23.309-.06 2.45-1.191 3.471-.174.157-.34.074-.262-.134.254-.686.824-2.223.554-2.596ZM29.65 24.993c0 1.57.037 2.88-.706 4.275-.6 1.134-1.55 1.831-2.61 1.831-1.449 0-2.293-1.18-2.293-2.92 0-3.436 2.881-4.06 5.608-4.06v.874Zm3.803 9.826a.748.748 0 0 1-.891.096c-1.252-1.111-1.475-1.627-2.165-2.688-2.069 2.257-3.533 2.932-6.218 2.932-3.172 0-5.644-2.093-5.644-6.282 0-3.272 1.66-5.5 4.021-6.589 2.048-.963 4.907-1.134 7.093-1.4v-.522c0-.958.07-2.092-.456-2.92-.462-.742-1.342-1.049-2.117-1.049-1.438 0-2.721.789-3.035 2.421-.063.363-.313.72-.652.737l-3.66-.42c-.308-.073-.648-.34-.563-.844.843-4.74 4.849-6.168 8.435-6.168 1.836 0 4.234.521 5.682 2.007 1.836 1.83 1.661 4.274 1.661 6.934v6.282c0 1.888.732 2.716 1.422 3.736.244.363.297.8-.01 1.072a163.52 163.52 0 0 0-2.892 2.676l-.01-.011Z"
      fill="#fff"
    />
    <circle cx={27} cy={27} r={27} fill="url(#macy-logo-sm2)" />
    <path
      d="m27.586 14.625-3.042 9.863h-9.919l8.007 6.1-3.007 9.912 7.96-6.1 7.996 6.1-3.042-9.912 7.961-6.1h-9.872l-3.042-9.863Z"
      fill="#E22130"
    />
    <defs>
      <linearGradient
        id="macy-logo-sm1"
        x1={6.927}
        y1={2.25}
        x2={54.187}
        y2={9.811}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F4C24F" />
        <stop offset={1} stopColor="#F29F3A" />
      </linearGradient>
      <linearGradient
        id="macy-logo-sm2"
        x1={6.927}
        y1={2.25}
        x2={54.187}
        y2={9.811}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FDD" />
        <stop offset={1} stopColor="#FFE6E6" />
      </linearGradient>
    </defs>
  </svg>
);

export default MacyLogoSm;