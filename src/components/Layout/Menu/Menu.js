import { useEffect, useState } from "react";
import { Category } from "@/api";

const categoryCtrl = new Category();

export function Menu(props) {
  const { isOpenSearch } = props;
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await categoryCtrl.getAll();
        setCategories(response.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div>
      <h2>MENU</h2>
    </div>
  );
}
