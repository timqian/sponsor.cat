export default function Head({ params }) {
  const {
    slug: [creator, tabName],
  } = params;
  return (
    <>
      <title>{`${creator} - Sponsor Cat`}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </>
  );
}
