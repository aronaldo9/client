import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { data } from "./BarInfo.data.js";

export function BarInfo() {
  return (
    <div className="bg-gray-200 text-black">
      <div className="max-w-screen-lg mx-auto flex flex-wrap justify-center py-10">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex items-center px-4 py-2 border-r border-gray-400 last:border-r-0"
          >
            <FontAwesomeIcon
              icon={item.icon}
              className="text-red-500 text-3xl mr-2"
            />
            <h5 className="text-lg">{item.title}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}
