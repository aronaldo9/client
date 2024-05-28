import { Home } from "@/components/Home";
import { BannerPersonalJewels } from "@/components/Home/BannerPersonalJewels";
import { Separator, BarInfo, BannerAd } from "@/components/Shared";
import { BasicLayout } from "@/layouts";
import { Container } from "semantic-ui-react";

const categorysId = {
  joyas: 1,
  relojes: 2,
  personalizados: 3,
};

export default function HomePage() {
  return (
    <>
      {/* SEO */}

      <BasicLayout>
        <Home.BannerLastProductPublished />

        <Separator height={100} />

        <Container>
          <Home.LatestProducts title="Novedades" />
        </Container>

        <Separator height={100} />

        <BarInfo />

        <Separator height={100} />

        <Container>
          <Home.LatestProducts
            title="Relojes"
            limit={3}
            categoryId={categorysId.relojes}
          />
        </Container>

        <Separator height={100} />

        <BannerAd
          title="Regístrate y sé el primero en recibir nuestras novedades"
          subtitle="Echa un vistazo a nuestros productos y elige el tuyo"
          btnTitle="Entrar ahora"
          btnLink="/account"
          images={[
            "/images/wallpaperEdox.jpg",
            "/images/wallpaperSeiko.jpg",
            "/images/wallpaperSalvatore.jpg",
            "/images/wallpaperSwiss.jpg",
            "/images/wallpaperSalvatore2.png",
          ]}
        />

        <Separator height={50} />

        <Container>
          <Home.LatestProducts
            title="Joyas"
            limit={3}
            categoryId={categorysId.joyas}
          />
        </Container>

        <Separator height={50} />

        <BannerPersonalJewels
          title="¿Alguna vez has querido tener una joya única?"
          subtitle="Muéstranos tu idea y la haremos realidad"
          btnTitle="Ver más"
          btnLink="/personalizados"
          image="/images/joyasPerso.jpeg"
        />

        <Separator height={100} />
      </BasicLayout>
    </>
  );
}
