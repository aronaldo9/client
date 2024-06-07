import { useEffect, useState } from "react";
import { map } from "lodash";
import { Category } from "@/api";
import Link from "next/link";
import { Icon, Image, Input } from "semantic-ui-react";
import { useRouter } from "next/router";

const categoryCtrl = new Category();

export function MenuMedium(props) {
  const { isOpenSearch } = props;
  const [categories, setCategories] = useState(null);
  const [showSearch, setShowSearch] = useState(isOpenSearch);
  const [searchText, setSearchText] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const openCloseSearch = () => setShowSearch((prevState) => !prevState);
  const toggleMenu = () => setIsMenuOpen((prevState) => !prevState);

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

  useEffect(() => {
    setSearchText(router.query.s || "");
  }, []);

  const onSearch = (text) => {
    setSearchText(text);
    router.replace(`/search?s=${text}`);
  };

  return (
    <div className="relative w-full z-50">
      <button
        className=" hover:bg-gray-200 flex items-center justify-center rounded-full h-12 w-12 border-none focus:outline-none transition duration-300 ease-in-out"
        onClick={toggleMenu}
      >
        <Icon name="bars" className="text-black text-l ml-0 px-1 mx-auto" />
      </button>

      <div
        className={`absolute left-0 w-full bg-gray-200 transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-screen" : "max-h-0"
        } overflow-hidden ${isMenuOpen ? "w-screen m-0" : ""}`}
      >
        <button
          className="bg-red-700 hover:bg-red-500 flex items-center justify-center rounded-full h-12 w-12 border-none focus:outline-none transition duration-300 ease-in-out mt-4 mx-auto"
          onClick={openCloseSearch}
        >
          <Icon name="search" className="text-white text-l ml-0 px-1 mx-auto" />
        </button>

        <div className={`${showSearch ? "flex" : "hidden"} `}>
          <input
            id="search-products"
            placeholder="Buscador"
            className="w-80 mx-auto bg-red-700 text-white placeholder-white rounded-full px-4 py-2 mt-2 focus:outline-none"
            value={searchText}
            onChange={(e) => onSearch(e.target.value)}
          />
          <Icon
            name="close"
            className="text-black cursor-pointer ml-2 px-6"
            onClick={openCloseSearch}
          />
        </div>

        <div className="flex flex-col items-start py-4 px-6">
          {map(categories, (category) => (
            <Link
              className="flex items-center justify-between text-black cursor-pointer no-underline hover:text-red-600 mb-2"
              key={category.id}
              href={`/products/${category.attributes.slug}`}
              onClick={toggleMenu} // close menu on click
            >
              <Image
                className="h-4 pr-2"
                src={category.attributes.icon.data.attributes.url}
              />
              {category.attributes.title}
            </Link>
          ))}

          <Link
            className="flex items-center justify-between text-black cursor-pointer no-underline hover:text-red-600"
            href="/about"
            onClick={toggleMenu} // close menu on click
          >
            <Icon name="percent" className="h-2 pr-6 pb-6" />
            <span>Rebajas</span>
          </Link>

          <Link
            className="flex items-center justify-between text-black cursor-pointer no-underline hover:text-red-600"
            href="/about"
            onClick={toggleMenu} // close menu on click
          >
            <Icon name="users" className="h-4 pr-6 pb-6" />
            <span>Nosotros</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
