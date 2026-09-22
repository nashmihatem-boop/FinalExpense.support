import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0e5265",
        }}
      >
        <svg width="116" height="116" viewBox="0 0 32 32" fill="none">
          <path d="M16 25.5 C10 21 6 17 6 12.3 C6 9.2 8.5 7 11.6 7 C13.7 7 15.4 8.1 16 10 C16.6 8.1 18.3 7 20.4 7 C23.5 7 26 9.2 26 12.3 C26 17 22 21 16 25.5Z" fill="#eaf6f7" />
          <circle cx="20.5" cy="10.8" r="2" fill="#c99423" />
        </svg>
      </div>
    ),
    size
  );
}
