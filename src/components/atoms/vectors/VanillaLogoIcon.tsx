import * as React from "react";
import { SVGProps } from "react";

const VanillaLogoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    // width={93}
    // height={92}
    viewBox="0 0 93 92"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={49.732} cy={43.131} r={43.131} fill="url(#vanilla-logo-a)" />
    <circle
      cx={45.131}
      cy={46.581}
      r={43.837}
      stroke="#3F1E4B"
      strokeWidth={1.413}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M28.494 28.732c-3.026 1.073-4.982 3.813-4.982 6.98 0 2.68-.044 2.643 3.109 2.643h2.753v-2.38h-1.759c-1.738 0-1.758-.01-1.758-.849 0-1.82 2.862-4.484 4.836-4.5 3.229-.028 6.148 3.698 5.158 6.582-.177.517-.322.986-.322 1.043 0 .058.579.105 1.285.105H38.1l.191-1.295c.386-2.607-.79-5.568-2.844-7.158-2.082-1.613-4.54-2.026-6.953-1.17Zm32.096 7.893c-.092.379-.13 3.635-.084 7.237l.083 6.548 1.916.187-.157-14.474-.796-.093c-.627-.073-.831.053-.962.595Zm3.566-.452c-.108.109-.196 3.39-.196 7.292v7.093h1.759V35.974h-.684c-.376 0-.772.09-.88.199Zm-40.193 3.95c-.078.127.913 4.034 2.202 8.682 2.559 9.227 2.69 9.492 4.707 9.492 1.46 0 2.126-.673 2.696-2.723 4.093-14.744 4.256-15.405 3.793-15.457l-.87-.099c-.356-.04-.767.004-.911.1-.144.094-1.207 3.713-2.361 8.041-1.155 4.328-2.165 7.936-2.245 8.017-.35.356-.746-.853-2.618-7.999-1.094-4.174-2.103-7.715-2.242-7.87-.32-.354-1.962-.495-2.151-.184Zm15.89-.074c-.312.083-.514.42-.514.86 0 .716.025.722 2.014.535 1.804-.17 2.078-.124 2.638.444.343.349.623 1.003.622 1.453-.003.794-.056.82-1.777.895-3.148.136-4.251 1.166-4.007 3.743.224 2.373 2.039 3.365 4.55 2.486.68-.238 1.236-.314 1.236-.17 0 .145.396.263.88.263h.879v-4.152c0-4.55-.225-5.464-1.508-6.138-.763-.4-3.825-.534-5.014-.22Zm7.889-.007c-.108.11-.196 2.529-.196 5.376v5.178l1.905-.186.053-4.137c.037-2.95.157-4.202.42-4.367.852-.534 2.367-.606 3.06-.144.675.449.704.615.782 4.557l.082 4.09 1.905.187-.002-3.665c-.001-4.219-.298-5.625-1.366-6.479-.867-.692-2.84-.818-4.048-.26-.578.268-.836.268-1.099 0-.376-.382-1.188-.463-1.496-.15Zm9.477 10.516h1.772l-.16-10.566-1.612-.188v10.754Zm10.771-10.51c-.311.084-.513.422-.513.861 0 .716.025.722 2.014.535 1.804-.17 2.078-.124 2.638.444.343.349.624.949.624 1.333 0 .644-.174.724-2.225 1.016-2.92.416-3.637 1.044-3.637 3.182 0 2.726 1.643 3.865 4.395 3.046.807-.24 1.467-.317 1.467-.171 0 .145.396.264.88.264h.879v-4.047c0-4.653-.337-5.821-1.826-6.349-.884-.313-3.689-.38-4.696-.113Zm-23.375 6.928c0 1.682-.418 2.084-2.237 2.153-1.28.049-1.934-.67-1.806-1.986.106-1.084 1.043-1.634 2.797-1.64l1.246-.004v1.477Zm28.138 0c0 1.67-.42 2.084-2.182 2.15-1.319.051-1.921-.486-1.921-1.712 0-1.298.87-1.915 2.703-1.915h1.4v1.477Z"
      fill="#fff"
    />
    <path d="m58.83 36.16.08 2.586-1.691-.094v-2.68l1.612.188Z" fill="#fff" />
    <defs>
      <linearGradient
        id="vanilla-logo-a"
        x1={17.666}
        y1={3.594}
        x2={93.162}
        y2={15.673}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#A5A1A2" />
        <stop offset={1} stopColor="#767676" />
      </linearGradient>
    </defs>
  </svg>
);

export default VanillaLogoIcon;