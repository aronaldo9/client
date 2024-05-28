import { BasicLayout } from "@/layouts";
import { Product } from "@/components/Product";
import { Separator } from "@/components/Shared";

export default function ProductPage(props) {
  const { product } = props;

  const wallpaper = product.attributes.wallpaper;
  const gallery = product.attributes.gallery;

  return (
    <>
      <BasicLayout>
        <Product.HeaderWallpaper image={wallpaper.data.attributes.url} />

        <Product.Panel productId={product.id} product={product.attributes} />

        <Separator height={50} />

        <Product.Info product={product.attributes} />

        <Separator height={30} />

        <Product.Media gallery={gallery} />

        <Separator height={50} />
      </BasicLayout>
    </>
  );
}
