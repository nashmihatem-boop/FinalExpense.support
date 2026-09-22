import { ImageResponse } from "next/og";

export const alt = "FinalExpense.support — Final Expense Insurance for Your Family";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Google's CSS2 endpoint always returns the currently-valid woff2 URL for a given family/weight,
// which is more reliable than hardcoding a versioned fonts.gstatic.com path (those change).
async function loadGoogleFont(text: string, weight: 400 | 700): Promise<ArrayBuffer> {
  const cssUrl = `https://fonts.googleapis.com/css2?family=Inter:wght@${weight}&text=${encodeURIComponent(text)}`;
  const css = await fetch(cssUrl, { headers: { "User-Agent": "Mozilla/5.0" } }).then((r) => r.text());
  const match = css.match(/src: url\(([^)]+)\) format\('(?:woff2|truetype|opentype)'\)/);
  if (!match) throw new Error("Could not find font URL in Google Fonts CSS response");
  const fontRes = await fetch(match[1]);
  return fontRes.arrayBuffer();
}

export default async function Image() {
  const HEADLINE = "FinalExpense.support One less thing for your family to carry.";
  const BODY = "No medical exam for most applicants Rate locked for life Caring, no-pressure guidance";
  const [interBold, interRegular] = await Promise.all([
    loadGoogleFont(HEADLINE, 700),
    loadGoogleFont(BODY, 400),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundImage: "linear-gradient(135deg, #082f3a 0%, #0e5265 65%, #16606f 100%)",
          fontFamily: "Inter",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <svg width="56" height="56" viewBox="0 0 32 32" fill="none">
            <path d="M16 25.5 C10 21 6 17 6 12.3 C6 9.2 8.5 7 11.6 7 C13.7 7 15.4 8.1 16 10 C16.6 8.1 18.3 7 20.4 7 C23.5 7 26 9.2 26 12.3 C26 17 22 21 16 25.5Z" fill="#eaf6f7" />
            <circle cx="20.5" cy="10.8" r="2" fill="#c99423" />
          </svg>
          <div style={{ display: "flex", fontSize: 34, fontWeight: 700, color: "#ffffff" }}>
            FinalExpense<span style={{ color: "#c99423" }}>.support</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 56,
            maxWidth: 920,
            fontSize: 60,
            lineHeight: 1.12,
            fontWeight: 700,
            color: "#ffffff",
          }}
        >
          One less thing for your family to carry.
        </div>

        <div style={{ display: "flex", marginTop: 32, gap: 28 }}>
          {["No medical exam for most applicants", "Rate locked for life", "Caring, no-pressure guidance"].map((item) => (
            <div key={item} style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div
                style={{
                  display: "flex",
                  width: 22,
                  height: 22,
                  borderRadius: 999,
                  backgroundColor: "rgba(127,203,176,0.35)",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8.5L6.2 11.5L13 4.5" stroke="#7fcbb0" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div style={{ display: "flex", fontSize: 22, color: "#cfe6ea" }}>{item}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Inter", data: interRegular, weight: 400, style: "normal" },
        { name: "Inter", data: interBold, weight: 700, style: "normal" },
      ],
    }
  );
}
