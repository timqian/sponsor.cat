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
          display: "flex",
          // fontSize: 60,
          color: "black",
          background: "#f6f6f6",
          width: "100%",
          height: "100%",
          // paddingTop: 50,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          width="100"
          height="100"
          src={`https://sponsor.cat/cat-paw.svg`}
          style={{
            marginRight: 30,
          }}
        />
        <img
          width="100"
          height="100"
          src={`https://effigy.im/a/${addr}.svg`}
          style={{
            borderRadius: 100,
          }}
        />
        {/* <p style={{fontSize: 20}}>Sponsor of {addr}</p> */}
      </div>
    ),
    {
      width: 600,
      height: 600,
    }
  );
}
