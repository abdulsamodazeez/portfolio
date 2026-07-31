import { ImageResponse } from "next/og";
import { site } from "@/lib/data";

export const alt = `${site.name} — Machine Learning Engineer`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://abdulsamodazeez.vercel.app";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          backgroundColor: "#090e1a",
          backgroundImage:
            "radial-gradient(circle at 85% 10%, rgba(59,130,246,0.28), transparent 55%)",
          color: "#f8fafc",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 80,
            height: 80,
            borderRadius: 18,
            backgroundColor: "#3b82f6",
            color: "#ffffff",
            fontSize: 36,
            fontWeight: 700,
          }}
        >
          {site.initials}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 74, fontWeight: 800, letterSpacing: -2 }}>
            {site.name}
          </div>
          <div style={{ fontSize: 38, fontWeight: 600, color: "#60a5fa" }}>
            Machine Learning Engineer
          </div>
          <div style={{ fontSize: 27, color: "#94a3b8" }}>
            Production AI · LLM &amp; RAG pipelines · MLOps on AWS, Docker &amp;
            Kubernetes
          </div>
        </div>
        <div style={{ fontSize: 25, color: "#64748b" }}>
          {siteUrl.replace("https://", "")}
        </div>
      </div>
    ),
    size
  );
}
