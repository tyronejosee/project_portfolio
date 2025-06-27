import type { SVGProps } from "@/types";

export const Markdown = (props: SVGProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="256"
      height="256"
      viewBox="0 0 208 128"
      {...props}
    >
      <path
        fill="none"
        stroke="CurrentColor"
        strokeWidth="10"
        d="M15 5h178a10 10 0 0 1 10 10v98a10 10 0 0 1-10 10H15a10 10 0 0 1-10-10V15A10 10 0 0 1 15 5z"
      />
      <path
        fill="CurrentColor"
        d="M30 98V30h20l20 25 20-25h20v68H90V59L70 84 50 59v39H30zm125 0-30-33h20V30h20v35h20l-30 33z"
      />
    </svg>
  );
};
