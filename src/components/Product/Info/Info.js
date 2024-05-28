export function Info(props) {
  const { product } = props;

  return (
    <div className="flex flex-col md:flex-row w-[80%] mx-auto">
      <div className="md:w-1/2 p-5">
        <p className="text-gray-500 leading-6">{product.description}</p>
      </div>

      <div className="md:w-1/2 py-5 px-10">
        <ul className="list-none p-0 m-0">
          <li className="pb-2">
            <span className="text-gray-500 pr-2">Fabricante:</span>
            {product.brand}
          </li>
          <li className="pb-2">
            <span className="text-gray-500 pr-2">Modelo:</span>
            {product.name}
          </li>
          <li className="pb-2">
            <span className="text-gray-500 pr-2">Diámetro:</span>
            {product.size}
          </li>
          <li className="pb-2">
            <span className="text-gray-500 pr-2">Movimiento:</span>
            {product.movement}
          </li>
          <li className="pb-2">
            <span className="text-gray-500 pr-2">Resistencia al agua:</span>
            {product.waterResistant}
          </li>
          <li className="pb-2">
            <span className="text-gray-500 pr-2">Cristal:</span>
            {product.glass}
          </li>
        </ul>
      </div>
    </div>
  );
}
