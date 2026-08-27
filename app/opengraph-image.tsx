import { ImageResponse } from "next/og";
import { profile } from "@/data/portfolio";

export const runtime = "edge";
export const alt = `${profile.name}, ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 72,
        color: "#151316",
        background: "#f7f5f1",
        fontFamily: "sans-serif"
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 26, color: "#861f41" }}>
        <div style={{ width: 18, height: 18, borderRadius: 99, background: "#e87722" }} />
        Virginia Tech · Electrical & Computer Engineering
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -3 }}>{profile.name}</div>
        <div style={{ maxWidth: 940, fontSize: 34, lineHeight: 1.25, color: "#514b50" }}>{profile.tagline}</div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "#6d686d" }}>
        <span>Hardware · Firmware · Software</span>
        <span>{profile.graduation}</span>
      </div>
    </div>,
    size
  );
}
