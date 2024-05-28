import { Product } from "@/api/product.js";

export { default } from "./product.js";

export async function getServerSideProps(context) {
  const {
    params: { product },
  } = context;

  const productCtrl = new Product();
  const response = await productCtrl.getBySlug(product);
  return {
    props: {
      product: response,
    },
  };
}
