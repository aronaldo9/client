import { useEffect, useState } from "react";
import { Container, Image } from "semantic-ui-react";
import { Product } from "@/api";
import Link from "next/link";
import { DateTime } from "luxon";
import styles from "./BannerLastProductPublished.module.css";
import { fn } from "@/utils";
import { Label } from "@/components/Shared";

const productCtrl = new Product();

export function BannerLastProductPublished() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await productCtrl.getLastPublished();
        setProduct(response.data[0]);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  if (!product) return null;

  const wallpaper = product.attributes.wallpaper;
  const createdDate = new Date(product.attributes.createdAt).toISOString();
  const price = fn.calcDiscount(
    product.attributes.price,
    product.attributes.discount
  );

  return (
    <div className={styles.container}>
      <Image src={wallpaper.data.attributes.url} className={styles.wallpaper} />
      <Link className={styles.infoContainer} href={product.attributes.slug}>
        <Container>
          <span className={styles.date}>
            {DateTime.fromISO(createdDate).minus({ days: 1 }).toRelative()}
          </span>
          <h2>{product.attributes.name}</h2>
          <p className={styles.price}>
            {product.attributes.discount && ( // Solo muestra el descuento si hay uno
              <Label.Discount>-{product.attributes.discount}%</Label.Discount>
            )}
            <span className={styles.finalPrice}>{price}€</span>
          </p>
        </Container>
      </Link>
    </div>
  );
}
