import { ENV } from "@/utils";

export class Product {
  async getLastPublished() {
    try {
      const sort = "sort=publishedAt:desc";
      const pagination = "pagination[limit]=1";
      const populate = "populate=*";
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.PRODUCT}?${sort}&${pagination}&${populate}`;

      const response = await fetch(url);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }

  async getLatestPublished({ limit = 9, categoryId = null }) {
    try {
      const filterCategory =
        categoryId && `filters[category][id][$eq]=${categoryId}`; // si la categoría existe, filtra por categoría y por su id
      const paginationLimit = `pagination[limit]=${limit}`; // limita la cantidad de productos a mostrar
      const sort = `sort[0]=publishedAt:desc`; // ordena los productos por fecha de publicación
      const populate = `populate=*`; // trae todos los datos de la categoría

      const urlParams = `${sort}&${paginationLimit}&${filterCategory}&${populate}`; // trae todos los datos de la categoría
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.PRODUCT}?${urlParams}`; // construye la url con los parámetros

      const response = await fetch(url); // hace la petición a la API
      const result = await response.json(); // convierte la respuesta en JSON

      if (response.status !== 200) throw result; // si la respuesta no es 200, lanza un error

      return result; // retorna la respuesta
    } catch (error) {
      throw error;
    }
  }

  async getProductsByCategorySlug(slug, page) {
    try {
      const filters = `filters[category][slug][$eq]=${slug}`;
      const pagination = `pagination[page]=${page}&pagination[pageSize]=30`;
      const populate = "populate=*";
      const urlParams = `${filters}&${pagination}&${populate}`;

      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.PRODUCT}?${urlParams}`;

      const response = await fetch(url);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }

  async searchProducts(text, page) {
    try {
      const filters = `filters[$or][0][name][$contains]=${text}&filters[$or][1][brand][$contains]=${text}`;
      const pagination = `pagination[page]=${page}&pagination[pageSize]=30`;
      const populate = "populate=*";
      const urlParams = `${filters}&${pagination}&${populate}`;

      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.PRODUCT}?${urlParams}`;

      const response = await fetch(url);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }

  async getBySlug(slug) {
    try {
      const filter = `filters[slug][$eq]=${slug}`;
      const populateProduct =
        "populate[0]=wallpaper&populate[1]=img&populate[2]=gallery&populate[3]=category";
      const populateCategory = "populate[6]=category.icon";
      const populates = `${populateProduct}&${populateCategory}`;

      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.PRODUCT}?${filter}&${populates}`;

      const response = await fetch(url);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result.data[0];
    } catch (error) {
      throw error;
    }
  }

  async getProductById(id) {
    try {
      const populate = `populate[0]=img&populate[1]=category`;

      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.PRODUCT}/${id}?${populate}`;
      const response = await fetch(url);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }

  async getProductsOnSale({ limit = 30 }) {
    try {
      const filterDiscount = `filters[discount][$gt]=0`; // Filtrar productos con descuento mayor que 0
      const paginationLimit = `pagination[limit]=${limit}`;
      const sort = `sort=publishedAt:desc`;
      const populate = `populate=*`;

      const urlParams = `${filterDiscount}&${paginationLimit}&${sort}&${populate}`;
      const url = `${ENV.API_URL}/${ENV.ENDPOINTS.PRODUCT}?${urlParams}`;

      const response = await fetch(url);
      const result = await response.json();

      if (response.status !== 200) throw result;

      return result;
    } catch (error) {
      throw error;
    }
  }
}
