import * as React from "react";
import { SVGProps } from "react";

const AmazonCardImage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={292}
    height={144}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      width={292}
      height={143.419}
      rx={14.271}
      fill="url(#amazon-card-img)"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M99.969 56.378c-1.364.1-2.582.39-3.517.84-.648.312-1.022.56-1.494.992a5.125 5.125 0 0 0-1.424 2.16c-.325.927-.302 1.247.102 1.448.103.051 2.982.375 3.336.375.34 0 .5-.188.71-.83.329-1.018 1.25-1.607 2.516-1.608 1.207-.001 1.978.557 2.182 1.578.069.343.09 1.893.026 1.893-.124 0-2.174.213-2.707.281-2.606.335-4.168.929-5.321 2.023-1.079 1.023-1.62 2.34-1.62 3.947 0 1.517.434 2.686 1.327 3.573.728.723 1.633 1.14 2.824 1.3.464.063 1.85.026 2.374-.063 1.263-.214 2.168-.68 3.372-1.735l.485-.425.198.286c.471.68.999 1.258 1.529 1.673.333.261.645.265.975.013.199-.152 2.238-1.837 2.486-2.054.335-.294.291-.503-.258-1.236-.496-.662-.743-1.137-.85-1.632-.075-.349-.08-.572-.081-3.767 0-1.867-.019-3.684-.042-4.037-.103-1.626-.503-2.58-1.437-3.428-.845-.767-2.062-1.266-3.634-1.49-.429-.06-1.65-.107-2.057-.077Zm42.957.018c-3.065.26-5.182 1.53-6.069 3.643-.216.516-.392 1.192-.357 1.373.035.179.17.34.344.41.131.051 2.995.371 3.329.37.311 0 .537-.226.633-.635a2.21 2.21 0 0 1 .64-1.093c.513-.485 1.101-.703 1.916-.71.511-.004.788.048 1.17.22.359.16.639.415.822.748.221.403.274.69.302 1.66.022.745.018.844-.039.844-.105 0-2.008.194-2.546.26-2.269.276-3.793.75-4.846 1.506-.445.32-1.039.906-1.32 1.303-.418.592-.702 1.274-.865 2.075-.101.497-.101 1.717 0 2.244.304 1.58 1.159 2.698 2.537 3.318.719.324 1.428.455 2.459.455 2.07 0 3.387-.517 4.931-1.938l.361-.331.217.31c.389.555.73.945 1.2 1.372.734.667.873.665 1.697-.026.291-.244.884-.734 1.319-1.09.434-.354.832-.7.883-.767.185-.243.109-.475-.349-1.068a6.858 6.858 0 0 1-.574-.89c-.397-.777-.368-.409-.398-4.966-.023-3.533-.035-4.06-.098-4.421-.202-1.157-.577-1.885-1.329-2.58-.553-.511-1.058-.81-1.858-1.102a10.423 10.423 0 0 0-1.826-.437 14.155 14.155 0 0 0-2.286-.057Zm-24.004.16c-.75.096-1.572.418-2.108.825-.552.42-.973.948-1.346 1.69l-.221.441-.002-1.089c-.001-1.084-.001-1.09-.104-1.256-.183-.3-.164-.296-2.09-.296-1.696 0-1.702 0-1.839.089-.076.05-.177.14-.225.201l-.087.113-.011 8.17c-.013 9.168-.039 8.408.293 8.618l.17.107h1.811c1.736 0 1.817-.004 1.952-.08a.9.9 0 0 0 .228-.191l.088-.112.023-5.31c.021-4.738.031-5.352.093-5.707.244-1.377.789-2.032 1.806-2.173.422-.058.907-.002 1.241.144.612.268.975.935 1.096 2.017.027.247.043 2.292.043 5.673 0 5.704-.012 5.39.214 5.584a.823.823 0 0 0 .239.13c.18.057 3.407.062 3.622.005.194-.052.411-.27.458-.462.022-.09.037-2.271.035-5.198-.003-5.253.006-5.578.175-6.217.265-1.004 1.109-1.67 2.113-1.667.805.002 1.397.301 1.677.847.269.525.252.138.277 6.52l.022 5.8.097.13c.204.272.161.267 2.169.267 1.739 0 1.813-.003 1.953-.08a.676.676 0 0 0 .24-.259l.095-.178-.014-6.613c-.016-7.264.001-6.79-.264-7.625-.457-1.44-1.689-2.448-3.433-2.807-.499-.103-1.496-.096-2.027.014-1.518.316-2.626 1.146-3.302 2.474l-.183.358-.226-.414c-.35-.64-.591-.962-1.046-1.398-.606-.582-1.238-.9-2.081-1.049-.347-.06-1.271-.082-1.621-.037Zm56.196-.017c-1.48.16-2.413.477-3.43 1.16-.616.416-1.416 1.25-1.874 1.954-1.309 2.014-1.831 4.988-1.385 7.882.197 1.272.662 2.617 1.239 3.576.693 1.154 1.704 2.118 2.796 2.667a7.83 7.83 0 0 0 1.856.618c.611.117 2.032.13 2.626.022 1.459-.263 2.653-.867 3.682-1.86 1.448-1.397 2.344-3.404 2.576-5.77.065-.652.029-2.344-.063-2.966-.626-4.276-3.047-6.914-6.667-7.267-.402-.04-1.073-.047-1.356-.016Zm18.724.015c-1.678.191-2.802 1.072-3.643 2.853l-.18.383v-1.203c-.001-1.318-.007-1.361-.248-1.577l-.132-.12-1.733-.01c-1.935-.012-1.922-.014-2.116.265l-.094.134v8.219c0 8.88-.014 8.32.214 8.516a.823.823 0 0 0 .239.13c.196.062 3.403.062 3.623 0a.841.841 0 0 0 .296-.182l.137-.135.026-5.033c.018-3.58.039-5.124.075-5.35.237-1.523.708-2.342 1.569-2.729.868-.39 1.905-.117 2.358.62.147.24.307.715.386 1.147.058.322.068 1.024.081 5.808.016 6.067-.008 5.605.303 5.79.146.087.173.089 1.874.1 1.906.014 1.983.006 2.209-.216l.139-.137.012-5.867c.015-6.728.002-7.081-.302-8.233-.288-1.09-.878-1.926-1.762-2.497-.87-.56-2.118-.814-3.331-.676Zm-39.226.342a.664.664 0 0 0-.228.208c-.093.142-.094.162-.094 1.482 0 1.289.003 1.341.085 1.447.048.06.138.146.201.191.113.08.167.083 3.043.102l2.927.02-3.276 4.493c-1.802 2.47-3.317 4.583-3.367 4.693-.199.443-.215.605-.215 2.253-.001 1.477.003 1.556.082 1.679.099.154.312.287.462.287.059 0 .324-.098.588-.217 1.755-.798 3.379-1.145 5.351-1.146 1.992 0 3.636.346 5.373 1.132.448.203.554.236.676.214.191-.034.419-.255.478-.463.031-.11.042-.6.033-1.48-.013-1.286-.016-1.321-.112-1.525-.138-.291-.344-.45-.93-.721-1.478-.681-2.814-.962-5.088-1.068l-.589-.028 2.971-4.052c1.635-2.228 3.047-4.17 3.138-4.317.272-.434.285-.51.285-1.698 0-1.019-.004-1.064-.094-1.232-.186-.348.352-.32-5.974-.318-5.039 0-5.604.007-5.726.064Zm21.883 3.066c1.012.301 1.474 1.157 1.743 3.224.063.48.075.884.076 2.423 0 1.27-.016 1.965-.053 2.224-.235 1.684-.727 2.666-1.536 3.07-.374.185-.66.24-1.143.22-.356-.014-.429-.031-.71-.164-.956-.452-1.487-1.719-1.652-3.945-.067-.894-.029-3.583.058-4.156.271-1.778.895-2.72 1.956-2.952.327-.072.921-.045 1.261.056ZM102.43 66.97c-.022 1.254-.051 1.498-.243 2.055-.362 1.05-1.124 1.844-2.005 2.087-.182.05-.36.064-.707.053-.429-.013-.485-.024-.752-.15a1.752 1.752 0 0 1-.83-.793c-.219-.415-.285-.728-.282-1.335.004-.619.09-.983.342-1.441.59-1.075 1.983-1.628 4.213-1.671l.285-.006-.021 1.201Zm43.238-.496c-.002.878-.056 1.641-.145 2.055-.159.736-.546 1.465-1.021 1.922-.514.493-1.044.717-1.704.719-.644.001-1.015-.14-1.408-.537-.431-.436-.608-1.017-.573-1.885.032-.798.222-1.298.676-1.78.713-.758 2.012-1.159 3.875-1.194l.301-.005-.001.705Zm13.618 8.433c-2.095.143-4.25.811-5.336 1.654-.314.243-.394.531-.191.684.138.104.271.104 1.201.003 2.021-.221 3.943-.3 4.886-.2.823.087 1.368.279 1.553.548.461.667.055 2.519-1.256 5.73-.457 1.118-.502 1.326-.319 1.463.251.189.562.043 1.192-.557 1.548-1.477 2.677-3.74 3.135-6.289.089-.498.104-1.819.024-2.073a.797.797 0 0 0-.174-.282c-.529-.506-2.695-.819-4.715-.68Zm-51.343 1.107c-.292.17-.274.552.04.844.259.241 1.181.994 1.795 1.467 5.842 4.495 12.927 7.404 20.348 8.355 5.482.702 10.739.411 16.146-.892 4.391-1.059 8.218-2.628 11.492-4.71 1.193-.76 1.424-.957 1.502-1.29.108-.461-.319-.909-.87-.91-.184-.001-.413.072-1.413.452a58.048 58.048 0 0 1-18.006 3.757c-1.051.05-3.769.05-4.884 0-8.778-.4-17.285-2.683-24.71-6.63-1.06-.564-1.173-.599-1.44-.443Z"
      fill="#fff"
    />
    <defs>
      <linearGradient
        id="amazon-card-img"
        x1={37.456}
        y1={0}
        x2={58.569}
        y2={140.24}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F4C24F" />
        <stop offset={1} stopColor="#F29F3A" />
      </linearGradient>
    </defs>
  </svg>
);

export default AmazonCardImage;
