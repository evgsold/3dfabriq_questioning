import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Тест: Какая вы лампа по «Отчаянным домохозяйкам»? | 3D FABRIQ";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#FAF7F2",
          color: "#2C2416",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "70px 80px",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            borderBottom: "1px solid #E6DFD5",
            paddingBottom: "24px",
          }}
        >
          <span
            style={{
              fontSize: 18,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              fontFamily: "sans-serif",
            }}
          >
            3D FABRIQ
          </span>
          <span
            style={{
              fontSize: 14,
              letterSpacing: "0.15em",
              color: "#8A7E70",
              fontFamily: "monospace",
            }}
          >
            INTERACTIVE TEST
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: 54,
              lineHeight: 1.15,
              fontWeight: 300,
              maxWidth: "950px",
            }}
          >
            Какая вы лампа по вопросам из «Отчаянных домохозяек»?
          </div>
          <div
            style={{
              fontSize: 22,
              color: "#756857",
              fontFamily: "sans-serif",
              fontWeight: 300,
              lineHeight: 1.4,
              maxWidth: "800px",
            }}
          >
            5 дилемм тихого пригорода. Алгоритм определит вашу форму, светотень и авторский объект в коллекции.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #E6DFD5",
            paddingTop: "24px",
            fontSize: 15,
            fontFamily: "monospace",
            color: "#8A7E70",
          }}
        >
          <span>3dfabriq.store</span>
          <span>ПАРАМЕТРИЧЕСКИЙ ДИЗАЙН & ИНТЕРЬЕР</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}