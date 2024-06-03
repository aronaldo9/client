import {
  GridProducts,
  NoResult,
  Pagination,
  Separator,
  Seo,
} from "@/components/Shared";
import { BasicLayout } from "@/layouts";
import { size } from "lodash";
import { Container } from "semantic-ui-react";

export default function CategoryPage(props) {
  const { products, category, pagination } = props;
  const hasProducts = size(products) > 0;

  return (
    <>
      <Seo title={category.attributes.title} />
      <BasicLayout relative>
        <Container>
          <Separator height={50} />

          <h2>{category.attributes.title}</h2>

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
              text={`La categoría ${category.attributes.title} todavía no tiene productos`}
            />
          )}

          <Separator height={100} />
        </Container>
      </BasicLayout>
    </>
  );
}
