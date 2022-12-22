/**
 * TODO
 * 1. Get address of creator from id
 * 2. Get ENS name of creator from address if possible
 * 3. Return NFT JSON
 */
export default function handler(req, res) {
  const { id } = req.query;
  // ref: https://vercel.com/docs/concepts/functions/serverless-functions/edge-caching#cache-control
  res.setHeader("Cache-Control", "s-maxage=86400");
  res.json({
    description:
      "Sponsor",
    external_url: `https://sponsor.cat/`,
    image:
      "https://sponsor.cat/logo.png",
    name: `Sponsor of ${id}`,
    // "attributes": [ ... ]
  });
  // res.end(`Post: ${id}`);
}
