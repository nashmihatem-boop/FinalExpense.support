type HorizonMarkProps = {
  className?: string;
};

/** The site's signature mark: a heart, formed gently — the shape of looking after someone. */
export function HorizonMark({ className }: HorizonMarkProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M24 39.5 C15 32.5 9 26.5 9 18.9 C9 14 12.7 10.5 17.3 10.5 C20.4 10.5 22.7 12.2 24 15.3 C25.3 12.2 27.6 10.5 30.7 10.5 C35.3 10.5 39 14 39 18.9 C39 26.5 33 32.5 24 39.5Z"
        fill="currentColor"
        className="text-harbor"
      />
      <path
        d="M17.3 10.5 C12.7 10.5 9 14 9 18.9 C9 22.8 11.3 26.7 15 30.4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        className="text-mist"
        opacity="0.55"
      />
      <circle cx="30.5" cy="16.2" r="3.1" fill="currentColor" className="text-brass" />
    </svg>
  );
}
