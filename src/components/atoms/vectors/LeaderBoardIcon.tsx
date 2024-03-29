import * as React from "react";
import { SVGProps } from "react";
import { SvgIconProps } from "../../../types";

const LeaderBoardIcon = (props: SvgIconProps) => (
  <svg
    width={28}
    height={28}
    viewBox={"0 0 28 28"}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.116 26.542H2.334a.881.881 0 0 1-.875-.875v-7a3.207 3.207 0 0 1 3.208-3.209h5.449c.478 0 .875.397.875.875v9.334a.881.881 0 0 1-.875.875Zm-6.907-1.75h6.032v-7.584H4.667c-.805 0-1.458.654-1.458 1.459v6.125Z"
      fill={props.active ? "#FFFFFE" : "#7165E3"}
    />
    <path
      d="M17.885 26.542h-7.782a.881.881 0 0 1-.874-.875V14a3.207 3.207 0 0 1 3.208-3.208h3.115A3.207 3.207 0 0 1 18.76 14v11.667a.874.874 0 0 1-.875.875Zm-6.895-1.75h6.032V14c0-.805-.653-1.458-1.458-1.458h-3.116c-.805 0-1.458.653-1.458 1.458v10.792Z"
      fill={props.active ? "#FFFFFE" : "#7165E3"}
    />
    <path
      d="M25.666 26.542h-7.781a.881.881 0 0 1-.875-.875v-5.834c0-.478.396-.875.875-.875h5.448a3.207 3.207 0 0 1 3.208 3.209v3.5a.881.881 0 0 1-.875.875Zm-6.906-1.75h6.031v-2.625c0-.805-.653-1.459-1.458-1.459H18.76v4.084ZM15.983 9.742c-.28 0-.63-.082-1.026-.315L14 8.855l-.945.56c-.957.572-1.587.233-1.82.07-.233-.163-.735-.677-.49-1.75l.222-.968-.794-.794c-.49-.49-.665-1.073-.49-1.61.175-.536.654-.91 1.33-1.026l1.015-.175.572-1.144c.63-1.248 2.158-1.248 2.777 0l.571 1.144 1.015.175c.677.116 1.167.49 1.33 1.026.175.537-.011 1.12-.49 1.61l-.793.794.222.968c.245 1.085-.257 1.587-.49 1.762-.105.093-.374.245-.759.245ZM14 7.093c.28 0 .56.07.793.21l.654.385-.14-.63c-.117-.49.058-1.085.42-1.446l.595-.595-.735-.129a1.639 1.639 0 0 1-1.132-.84L14 3.173l-.443.875c-.21.42-.665.759-1.132.84l-.735.117.595.595c.362.362.525.957.42 1.447l-.14.63.653-.385c.222-.14.502-.199.782-.199Z"
      fill={props.active ? "#FFFFFE" : "#7165E3"}
    />
  </svg>
);

export default LeaderBoardIcon;
