import { Separator } from "@/components/Shared";
import { Gallery } from "./Gallery";

export function Media(props) {
  const { gallery } = props;

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 text-center">Imágenes</h2>
      <Separator height={10} />
      <Gallery gallery={gallery} />
    </div>
  );
}
