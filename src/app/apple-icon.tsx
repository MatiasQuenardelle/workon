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
          background: "linear-gradient(135deg, #111 0%, #0a0a0a 100%)",
          borderRadius: 38,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontSize: 120,
              fontWeight: 200,
              color: "white",
              lineHeight: 1,
              letterSpacing: -4,
            }}
          >
            W
          </span>
          <div
            style={{
              width: 80,
              height: 3,
              borderRadius: 2,
              background: "linear-gradient(90deg, #e94560, #ff6b81)",
              marginTop: -8,
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
