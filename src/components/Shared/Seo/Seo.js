import Head from "next/head";

export function Seo(props) {
  const {
    title = "Rosant - Joyas y Relojes de Alta Calidad",
    description = "Descubre tus firmas favoritas en joyería y relojería en Rosant. Ofrecemos una selección exquisita de joyas y relojes de alta calidad para cada ocasión.",
    keywords = "joyería, relojería, lujo, calidad, elegancia, suiza, edox, seiko, Rosant",
    author = "Aarón Pesqueira Fariña",
    url = "https://www.joyeriarosant.com",
    image = "https://www.joyeriarosant.com/default-image.jpg",
  } = props;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />

      {/* Open Graph tags for social media */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter Card tags for social media */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />
    </Head>
  );
}
