import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 48 48",
  fill: "currentColor",
  "aria-hidden": true,
} as const;

// Heart + tube + drop
export function DonorIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M20 28 C20 28 7 20 7 12 A7 7 0 0 1 20 9 A7 7 0 0 1 33 12 C33 20 20 28 20 28 Z" />
      <path
        d="M17 27 V35 C17 41 27 41 27 35"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <path d="M37 31 C37 31 32 36.5 32 39.5 A5 5 0 0 0 42 39.5 C42 36.5 37 31 37 31 Z" />
    </svg>
  );
}

// Blood bag with + and -
export function RecipientIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        fillRule="evenodd"
        d="M20 3 h8 a1.5 1.5 0 0 1 1.5 1.5 V8 h-11 V4.5 A1.5 1.5 0 0 1 20 3 Z M24 4.3 a1.3 1.3 0 1 0 0.01 0 Z"
      />
      <path
        fillRule="evenodd"
        d="M18 9 h12 a7 7 0 0 1 7 7 V36 a7 7 0 0 1 -7 7 H18 a7 7 0 0 1 -7 -7 V16 a7 7 0 0 1 7 -7 Z M22.5 15 h3 v3.5 h3.5 v3 h-3.5 v3.5 h-3 v-3.5 H19 v-3 h3.5 Z M19 30 h10 v3.4 h-10 Z"
      />
    </svg>
  );
}

// Big drop with + and small drop
export function PostIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        fillRule="evenodd"
        d="M20 14 C20 14 8 27 8 34.5 A12 12 0 0 0 32 34.5 C32 27 20 14 20 14 Z M18.5 30 h3 v3.5 h3.5 v3 h-3.5 v3.5 h-3 v-3.5 H15 v-3 h3.5 Z"
      />
      <path d="M36 7 C36 7 30 14 30 18 A6 6 0 0 0 42 18 C42 14 36 7 36 7 Z" />
    </svg>
  );
}

// IV bag with drop and tube
export function GivenIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path
        fillRule="evenodd"
        d="M20 3 h8 a1.5 1.5 0 0 1 1.5 1.5 V8 h-11 V4.5 A1.5 1.5 0 0 1 20 3 Z M24 4.3 a1.3 1.3 0 1 0 0.01 0 Z"
      />
      <path
        fillRule="evenodd"
        d="M21 9 h6 a7 7 0 0 1 7 7 V28 a7 7 0 0 1 -7 7 H21 a7 7 0 0 1 -7 -7 V16 a7 7 0 0 1 7 -7 Z M24 14.5 C24 14.5 19 20 19 23 A5 5 0 0 0 29 23 C29 20 24 14.5 24 14.5 Z"
      />
      <path
        d="M24 35 V40 C24 44 19 44 19 41"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export const activityIcons = {
  donor: DonorIcon,
  recipient: RecipientIcon,
  post: PostIcon,
  given: GivenIcon,
} as const;

export type ActivityIconKey = keyof typeof activityIcons;
