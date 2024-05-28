import {
  GridProducts,
  NoResult,
  Pagination,
  Separator,
} from "@/components/Shared";
import { BasicLayout } from "@/layouts";
import { size } from "lodash";
import { useEffect } from "react";
import { Container } from "semantic-ui-react";

export default function searchPage(props) {
  const { products, pagination, searchText } = props;
  const hasProducts = size(products) > 0;

  useEffect(() => {
    document.getElementById("search-products").focus();
  }, []);

  return (
    <>
      <BasicLayout relative isOpenSearch={true}>
        <Container>
          <Separator height={50} />

          <h2>Buscando: {searchText}</h2>
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
            <NoResult text="No se han encontrado resultados" />
          )}

          <Separator height={100} />
        </Container>
      </BasicLayout>
    </>
  );
}
