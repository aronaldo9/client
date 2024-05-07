import Link from "next/link";
import { Icon, Image, Input } from "semantic-ui-react";
import { useState, useEffect } from "react";
import { Category } from "@/api";

const categoryCtrl = new Category();

export function MenuSmall({ isOpenSearch }) {
  const [categories, setCategories] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const openCloseSearch = () => setShowSearch((prevState) => !prevState);
  const toggleMenu = () => setMenuOpen((prevState) => !prevState);

  return (
    <div className="relative">
      <div
        className={`flex flex-col items-stretch ${
          menuOpen ? "text-white" : "text-black"
        } bg-black`}
      >
        {categories &&
          categories.map((category) => (
            <Link
              href={`/products/${category.attributes.slug}`}
              key={category.id}
            >
              <div
                className={`flex items-center cursor-pointer no-underline mx-4 my-2 px-4 py-2 rounded-md text-white`}
              >
                <Image
                  className="h-4 pr-2"
                  src={category.attributes.icon.data.attributes.url}
                />
                <span>{category.attributes.title}</span>
              </div>
            </Link>
          ))}
      </div>

      <div
        className={`${
          showSearch ? "block" : "hidden"
        } absolute top-0 left-0 w-full bg-black`}
      >
        <div className="container mx-auto flex items-center justify-between py-4">
          <Input
            id="search-products"
            placeholder="Buscador"
            className="bg-red-700 text-white placeholder-white"
          />
          <Icon
            name="close"
            className="text-white cursor-pointer"
            onClick={openCloseSearch}
          />
        </div>
      </div>

      {menuOpen && (
        <div className="absolute top-0 right-0 p-4">
          <button className="focus:outline-none" onClick={toggleMenu}>
            <Icon name="close" className="text-white" />
          </button>
        </div>
      )}
    </div>
  );
}
