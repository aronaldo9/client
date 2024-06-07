import { BasicLayout } from "@/layouts";
import { useState, useEffect } from "react";
import { Product } from "@/api"; // Asegúrate de ajustar esta ruta de acuerdo a tu estructura de archivos
import { Container } from "semantic-ui-react";
import {
  GridProducts,
  NoResult,
  Pagination,
  Seo,
  Separator,
} from "@/components/Shared";

export default function OutletPage() {
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState({ page: 1, pageCount: 1 });

  useEffect(() => {
    const fetchProductsOnSale = async () => {
      const productApi = new Product();
      try {
        const result = await productApi.getProductsOnSale({ limit: 30 });
        setProducts(result.data);
      } catch (error) {
        console.error("Error fetching products on sale:", error);
      }
    };

    fetchProductsOnSale();
  }, []);

  const hasProducts = products.length > 0;

  return (
    <>
      <Seo title="Rebajas Rosant" />
      <BasicLayout relative>
        <Container>
          <Separator height={50} />

          <h2 className="text-3xl text-center text-black mb-12">Rebajas</h2>

          {hasProducts ? (
            <>
              <GridProducts products={products} />
              <Separator height={30} />
              <Pagination
                currentPage={pagination.page}
                totalPages={pagination.pageCount}
              />
            </>
          ) : (
            <NoResult
              text={`La página de Rebajas todavía no tiene productos`}
            />
          )}

          <Separator height={100} />
        </Container>
      </BasicLayout>
    </>
  );
}
