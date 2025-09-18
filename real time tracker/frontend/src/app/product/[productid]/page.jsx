export default async function Page({ params }) {
  const { productid } = params;

  return (
    <div>
      Product page {productid}
    </div>
  );
}