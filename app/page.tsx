import { getProducts } from "@/features/data/api/getProducts";
import { ProductList } from "@/components/products/ProductList/ProductList";
import { getBrands } from "@/features/data/api/getBrands";
import { ProductNav } from "@/components/nav/products/ProductNav";

export default async function Home({
  searchParams,
}: {
  searchParams: {
    brand?: string;
  };
}) {
  const params = await searchParams;
  const products = await getProducts();
  const brands = await getBrands();
  const selectedBrand = params.brand;

  const filteredProducts = selectedBrand
    ? products.filter((p) => p.brandName.replace(/\s/g, '') === selectedBrand)
    : products;

    console.log(products[0])

  return (
    <div>
      <main>
        <ProductNav brands={brands} />
        <ProductList products={filteredProducts} />
      </main>
    </div>
  );
}