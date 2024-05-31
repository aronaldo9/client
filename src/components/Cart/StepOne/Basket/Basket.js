import { map } from "lodash";
import styles from "./Basket.module.css";
import { Dropdown, Icon } from "semantic-ui-react";
import { fn } from "@/utils";

export function Basket(props) {
  const { products } = props;
  return (
    <div className={styles.basket}>
      <h2>Basket</h2>

      <div className={styles.block}>
        {map(products, (product) => (
          <div key={product.id} className={styles.product}>
            <img
              src={product.attributes.img.data.attributes.url}
              alt={product.name}
            />
            <div>
              <div className={styles.info}>
                <div>
                  <p>{product.attributes.name}</p>
                  <p>{product.attributes.category.data.attributes.title}</p>
                </div>
                <Icon name="trash alternate online" link />
              </div>

              <div className={styles.quantity}>
                <Dropdown
                  className="number"
                  option={[]}
                  selection
                  value={null}
                  compact
                />
                <span>
                  {fn.calcDiscount(
                    product.attributes.price,
                    product.attributes.discount
                  )}
                  €
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
