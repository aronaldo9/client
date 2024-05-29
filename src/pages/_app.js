import "semantic-ui-css/semantic.min.css";
import "@/styles/globals.css";
import "@/styles/account.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/styles/modal.css";
import { AuthProvider, CartProvider } from "@/contexts";

export default function App(props) {
  const { Component, pageProps } = props;
  return (
    <AuthProvider>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </AuthProvider>
  );
}
