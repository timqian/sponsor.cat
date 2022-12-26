import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "edge",
};

export default function handler(req, res) {
  const addr = req.nextUrl.searchParams.get("addr");
  // const { addr } = req.query;
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Sponsor of {addr}
      </div>
    ),
    {
      width: 1200,
      height: 600,
    }
  );
}
