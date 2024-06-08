export const ENV = {
  SERVER_HOST:
    process.env.NEXT_PUBLIC_STRAPI_RAILWAY_URL ||
    process.env.NEXT_PUBLIC_STRAPI_URL ||
    "http://localhost:1337",
  API_URL: `${
    process.env.NEXT_PUBLIC_STRAPI_RAILWAY_URL ||
    process.env.NEXT_PUBLIC_STRAPI_URL ||
    "http://localhost:1337"
  }/api`,
  ENDPOINTS: {
    AUTH: {
      REGISTER: "auth/local/register",
      LOGIN: "auth/local",
    },
    USERS_ME: "users/me",
    USERS: "users",
    CATEGORY: "categories",
    ADDRESS: "addresses",
    PRODUCT: "products",
    WISHLIST: "wishlists",
    PAYMENT_ORDER: "payment-order",
    ORDER: "orders",
  },
  TOKEN: "token",
  CART: "cart",
  STRIPE_TOKEN:
    "pk_test_51OtzDUI6z8xnRUHVrVfkvXiwnMSXDDEGqhnYhgB3i1A25nJ0M58fIbFrNzseQGGvYL6paTaiYjeSBFAcnOxEd3uQ00HUq6JACI",
};
