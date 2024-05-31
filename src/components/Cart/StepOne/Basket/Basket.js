import { map } from "lodash";
import styles from "./Basket.module.css";
import { Dropdown, Icon } from "semantic-ui-react";
import { fn } from "@/utils";
import { useCart } from "@/hooks";

export function Basket(props) {
  const { products } = props;
  const { changeQuantityItem, deleteItem } = useCart();

  const getOptionsForProduct = (product) => {
    const options = [];
    for (let i = 1; i <= product.attributes.stock; i++) {
      options.push({
        key: i,
        text: String(i),
        value: i,
      });
    }
    return options;
  };

  return (
    <div className={styles.basket}>
      <h2>Cesta</h2>

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
                <Icon
                  name="trash alternate online"
                  link
                  onClick={() => deleteItem(product.id)}
                />
              </div>

              <div className={styles.quantity}>
                <Dropdown
                  className="number"
                  options={getOptionsForProduct(product)}
                  selection
                  value={product.quantity}
                  compact
                  onChange={(_, data) =>
                    changeQuantityItem(product.id, data.value)
                  }
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
