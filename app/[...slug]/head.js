export default function Head({ params }) {
  const {
    slug: [creator, tabName],
  } = params;
  return (
    <>
      <title>{`${creator} - Sponsor Cat`}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="A decentralized funding platform. Powered by NFTs." />
      <meta name="og:description" content="A decentralized funding platform. Powered by NFTs." />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:image" content={`https://effigy.im/a/${address}.png`} />
      <meta name="twitter:site:domain" content="sponsor.cat" />
      <meta name="twitter:url" content="https://sponsor.cat" />
      <meta name="og:title" content={`${creator} - Sponsor Cat`} />
      <meta name="og:image" content={`https://effigy.im/a/${address}.png`} />
      <meta name="apple-mobile-web-app-title" content="Sponsor.Cat" />
    </>
  );
}
