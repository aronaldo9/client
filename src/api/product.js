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
}
