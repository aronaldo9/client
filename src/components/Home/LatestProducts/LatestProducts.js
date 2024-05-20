import { Product } from "@/api";
import { GridProducts } from "@/components/Shared";
import { useEffect, useState } from "react";

const productCtrl = new Product();

export function LatestProducts(props) {
  const { title, limit = 9, categoryId = null } = props;
  const [products, setProducts] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await productCtrl.getLatestPublished({
          limit,
          categoryId,
        });
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  if (!products) return null;

  return (
    <div>
      <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-center text-gray-800">
        {title}
      </h2>
      <GridProducts products={products} />
    </div>
  );
}
