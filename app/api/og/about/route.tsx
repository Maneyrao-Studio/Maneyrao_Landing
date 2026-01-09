import { ImageResponse } from "next/og"

export const runtime = "edge"

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000",
          backgroundImage: "radial-gradient(circle at 25px 25px, #333 2%, transparent 0%), radial-gradient(circle at 75px 75px, #333 2%, transparent 0%)",
          backgroundSize: "100px 100px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.15), transparent 70%)",
          }}
        />
        
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "32px",
            padding: "80px",
            zIndex: 10,
          }}
        >
          <h1
            style={{
              fontSize: "72px",
              fontWeight: "bold",
              background: "linear-gradient(to right, #fff, #a855f7)",
              backgroundClip: "text",
              color: "transparent",
              margin: 0,
              textAlign: "center",
            }}
          >
            Nosotros
          </h1>
          
          <p
            style={{
              fontSize: "28px",
              color: "rgba(255, 255, 255, 0.7)",
              margin: 0,
              textAlign: "center",
              maxWidth: "900px",
              lineHeight: 1.4,
            }}
          >
            Tecnología pensada para personas reales. Sistemas que se adaptan a tu forma de trabajar.
          </p>
          
          <div
            style={{
              fontSize: "20px",
              color: "rgba(255, 255, 255, 0.5)",
              marginTop: "20px",
            }}
          >
            Maneyrao Studio
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}