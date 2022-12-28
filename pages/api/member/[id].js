import { ethers } from "ethers";
import contractInfo from "../../../contract/index";

const provider = new ethers.providers.CloudflareProvider();
const tokenContract = new ethers.Contract(
  contractInfo.address,
  contractInfo.abi,
  provider
);

/**
 * TODO
 * 1. Get address of creator from id
 * 2. Get ENS name of creator from address if possible
 * 3. Return NFT JSON
 */
export default async function handler(req, res) {
  const { id } = req.query;
  // const ens = await provider.lookupAddress("0x5555763613a12D8F3e73be831DFf8598089d3dCa");
  // console.log(ens);
  if (Number(id) == NaN) {
    res.json({
      description:
        "Sponsoring a creator on sponsor.cat is a way to support them and their work.",
      external_url: `https://sponsor.cat`,
      image: `https://sponsor.cat/api/img/timqian.eth`,
      name: `Sponsor Cat`,
      // "attributes": [ ... ]
    });
    return;
  }

  const [creatorAddr] = await tokenContract.functions.creators(id);
  let ens = "";
  // ref: https://vercel.com/docs/concepts/functions/serverless-functions/edge-caching#cache-control
  res.setHeader("Cache-Control", "s-maxage=86400");
  try {
    ens = await provider.lookupAddress(creatorAddr);
  } catch (error) {
    console.log("no ens name found");
  }
  res.json({
    description:
      "Sponsoring a creator on sponsor.cat is a way to support them and their work.",
    external_url: `https://sponsor.cat/${ens || creatorAddr}`,
    image: `https://sponsor.cat/api/img/${ens || creatorAddr}`,
    name: `Sponsor of ${ens || creatorAddr}`,
    // "attributes": [ ... ]
  });
  // res.end(`Post: ${id}`);
}

const a = Number("{i}");
console.log(a == NaN);
