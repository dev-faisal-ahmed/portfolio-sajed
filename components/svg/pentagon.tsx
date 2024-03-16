import { SvgProps } from "@/utils/types";

export function Pentagon({ className }: SvgProps) {
  return (
    <svg
      className={className}
      width="90"
      height="88"
      viewBox="0 0 90 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M35.5954 3.83281C41.2032 -0.241494 48.7968 -0.241489 54.4046 3.83282L83.1483 24.7163C88.7561 28.7906 91.1026 36.0125 88.9606 42.6049L77.9815 76.3951C75.8395 82.9875 69.6962 87.4509 62.7646 87.4509H27.2354C20.3038 87.4509 14.1605 82.9875 12.0185 76.3951L1.03939 42.6049C-1.10259 36.0125 1.24394 28.7906 6.85174 24.7163L35.5954 3.83281Z"
        fill="#0F1820"
      />
    </svg>
  );
}
