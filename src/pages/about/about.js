import { Seo, Separator } from "@/components/Shared";
import { BasicLayout } from "@/layouts";
import { Container } from "semantic-ui-react";

export default function AboutPage() {
  return (
    <>
      <Seo title="Sobre Nosotros" />
      <BasicLayout>
        <Separator height={100} />
        <Container>
          <h2>Nosotros</h2>
          <p>Aquí va el contenido sobre la empresa...</p>
        </Container>
        <Separator height={100} />
      </BasicLayout>
    </>
  );
}
