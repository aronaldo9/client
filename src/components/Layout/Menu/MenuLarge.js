import { useEffect, useState } from "react";
import { map } from "lodash";
import { Category } from "@/api";
import Link from "next/link";
import { Icon, Image, Input } from "semantic-ui-react";
import { useRouter } from "next/router";

const categoryCtrl = new Category();

export function MenuLarge(props) {
  const { isOpenSearch } = props;
  const [categories, setCategories] = useState(null);
  const [showSearch, setShowSearch] = useState(isOpenSearch);
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  const openCloseSearch = () => setShowSearch((prevState) => !prevState);

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
    <div className="relative flex justify-end items-end px-20 py-4 rounded-l-full">
      {map(categories, (category) => (
        <Link
          className="flex items-center justify-between text-black cursor-pointer no-underline hover:text-red-600 mx-4"
          key={category.id}
          href={`/products/${category.attributes.slug}`}
        >
          <Image
            className="h-4 pr-2"
            src={category.attributes.icon.data.attributes.url}
          />
          {category.attributes.title}
        </Link>
      ))}

      <Link
        className="flex items-center justify-between text-black cursor-pointer no-underline hover:text-red-600 mx-4"
        href="/about"
      >
        <Icon name="users" className="h-4 pr-6 pb-6" />
        <span>Nosotros</span>
      </Link>

      <button
        className="absolute top-0 right-0 bg-red-700 hover:bg-red-500 flex items-center justify-center rounded-full h-12 w-12 border-none focus:outline-none transition duration-300 ease-in-out"
        onClick={openCloseSearch}
      >
        <Icon name="search" className="text-white text-l ml-0 px-1 mx-auto" />
      </button>

      <div
        className={`inputContainer ${
          showSearch ? "active" : ""
        } absolute top-0 right-0 bg-red-700 bg-opacity-50 backdrop-blur-lg rounded-l-full`}
      >
        <Input
          id="search-products"
          placeholder="Buscador"
          className="input bg-red-700 text-white placeholder-white"
          focus={true}
          value={searchText}
          onChange={(_, data) => onSearch(data.value)}
        />
        <Icon
          name="close"
          className="closeInput text-black cursor-pointer"
          onClick={openCloseSearch}
        />
      </div>
    </div>
  );
}
