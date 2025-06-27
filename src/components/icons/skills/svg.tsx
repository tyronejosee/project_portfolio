import type { SVGProps } from "@/types";

export const SVG = (props: SVGProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="256"
      height="256"
      viewBox="0 0 300 300"
      {...props}
    >
      <g stroke="#000" strokeWidth="38.009">
        <g id="svgstar" transform="translate(150 150)">
          <path
            id="svgbar"
            fill="#ffb13b"
            d="M-84.149-15.851a22.417 22.417 0 1 0 0 31.702H84.15a22.417 22.417 0 1 0 0-31.702Z"
          />
          <use xlinkHref="#svgbar" transform="rotate(45)" />
          <use xlinkHref="#svgbar" transform="rotate(90)" />
          <use xlinkHref="#svgbar" transform="rotate(135)" />
        </g>
      </g>
      <use xlinkHref="#svgstar" />
    </svg>
  );
};
