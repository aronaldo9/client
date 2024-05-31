import { Basket } from "./Basket";

export function StepOne(props) {
  const { products } = props;
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="w-full lg:w-2/3 px-4 lg:px-0">
        <Basket products={products} />
      </div>
      <div className="w-full lg:w-1/3 px-4 lg:px-0 mt-4 lg:mt-0">
        <p>Resume</p>
      </div>
    </div>
  );
}
