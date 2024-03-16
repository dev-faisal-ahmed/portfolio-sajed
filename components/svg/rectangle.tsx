import { SvgProps } from "@/utils/types";

export function Rectangle({ className }: SvgProps) {
  return (
    <svg
      className={className}
      width="130"
      height="130"
      viewBox="0 0 130 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.60302 76.3137C-0.645372 70.0653 -0.645374 59.9347 5.60301 53.6863L53.6863 5.60303C59.9347 -0.645357 70.0653 -0.645357 76.3137 5.60303L124.397 53.6863C130.645 59.9347 130.645 70.0653 124.397 76.3137L76.3137 124.397C70.0653 130.645 59.9347 130.645 53.6863 124.397L5.60302 76.3137Z"
        fill="#0F1820"
      />
    </svg>
  );
}
