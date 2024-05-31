import { Basket } from "./Basket";
import { Resume } from "./Resume";

export function StepOne(props) {
  const { products } = props;
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="w-full lg:w-2/3 lg:mr-2 px-4 lg:px-0">
        <Basket products={products} />
      </div>
      <div className="w-full lg:w-1/3 lg:ml-2 px-4 lg:px-0 mt-4 lg:mt-0">
        <Resume products={products} />
      </div>
    </div>
  );
}
