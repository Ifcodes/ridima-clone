import * as React from "react";
import { SvgIconProps } from "../../../types";

const ReferralIcon = (props: SvgIconProps) => (
  <svg
    width={28}
    height={28}
    viewBox={"0 0 28 28"}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.63 26.542H9.299c-3.99 0-5.542-1.552-5.542-5.542v-9.333c0-.479.397-.875.875-.875h18.666c.479 0 .875.396.875.875V21c0 3.99-1.551 5.542-5.541 5.542Zm-13.124-14V21c0 3.01.782 3.792 3.792 3.792h9.333c3.01 0 3.791-.782 3.791-3.792v-8.458H5.506Z"
      fill={props.active ? "#FFFFFE" : "#7165E3"}
    />
    <path
      d="M22.75 12.542H5.25c-2.042 0-3.209-1.167-3.209-3.209V8.167c0-2.042 1.167-3.209 3.208-3.209h17.5c1.984 0 3.209 1.225 3.209 3.209v1.166c0 1.984-1.225 3.209-3.209 3.209ZM5.25 6.708c-1.062 0-1.459.397-1.459 1.459v1.166c0 1.062.397 1.459 1.458 1.459h17.5c1.027 0 1.459-.432 1.459-1.459V8.167c0-1.027-.432-1.459-1.459-1.459H5.25Z"
      fill={props.active ? "#FFFFFE" : "#7165E3"}
    />
    <path
      d="M13.58 6.708H7.14a.882.882 0 0 1-.641-.28 1.977 1.977 0 0 1 .058-2.73l1.657-1.656a2 2 0 0 1 2.811 0L14.2 5.215c.245.245.326.63.186.957a.853.853 0 0 1-.805.536Zm-5.798-1.75h3.698L9.79 3.278a.24.24 0 0 0-.339 0L7.794 4.935c0 .012-.012.012-.012.023Z"
      fill={props.active ? "#FFFFFE" : "#7165E3"}
    />
    <path
      d="M20.848 6.708h-6.44a.864.864 0 0 1-.805-.536.883.883 0 0 1 .187-.957l3.173-3.173a2 2 0 0 1 2.812 0l1.657 1.656c.746.747.781 1.949.058 2.73a.882.882 0 0 1-.642.28Zm-4.316-1.75h3.698l-.023-.023-1.657-1.657a.24.24 0 0 0-.338 0l-1.68 1.68ZM11.596 19.717a2.044 2.044 0 0 1-2.042-2.042v-6.008c0-.479.397-.875.876-.875h7.046c.479 0 .875.396.875.875v5.985c0 .758-.408 1.446-1.073 1.796a2.03 2.03 0 0 1-2.1-.105l-1.038-.7a.28.28 0 0 0-.327 0l-1.097.724c-.338.233-.735.35-1.12.35Zm-.291-7.175v5.121c0 .152.093.222.151.257.059.035.175.07.304-.012l1.096-.723a2.028 2.028 0 0 1 2.252 0l1.038.7a.283.283 0 0 0 .304.012.284.284 0 0 0 .151-.257v-5.11h-5.296v.012Z"
      fill={props.active ? "#FFFFFE" : "#7165E3"}
    />
  </svg>
);

export default ReferralIcon;
