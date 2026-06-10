import { getStoreData } from "@/src/features/products/api/getStoreData";
import { ProductDetailsView } from "@/src/features/products/components/ProductDetailsView/ProductDetailsView";

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { products } = await getStoreData();
  const { slug } = await params;

  const product = products.find((p) => p.slug === slug);

  if (!product) return <div>{slug} not founded</div>;

  return <ProductDetailsView product={product} />;
}
