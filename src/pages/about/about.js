import React from "react";
import { Seo, Separator } from "@/components/Shared";
import { BasicLayout } from "@/layouts";
import { Container, Image } from "semantic-ui-react";

export default function AboutPage() {
  const historia = [
    {
      titulo: "LOS PRIMEROS PASOS...",
      imagen: "images/abuelo.jpg",
      parrafos: [
        "Hace casi un siglo, el 7 de Noviembre de 1923, nacía Ángel Luciano Fariña Blanco, hijo de Antonio Fariña y Perfecta Blanco. Criado en el seno de una familia de 8 hermanos en La Ruibal (Salcedo), Pontevedra, las circunstancias de la vida lo atraerían a Marín en su juventud.",
        "Ángel Fariña, un joven muy inteligente y emprendedor, aprendió el oficio de un joyero alemán llamado Otto Reuss, haciendo sus prácticas y primeras creaciones cerca de los soportales de la Plaza de Curros Enríquez de Pontevedra, en la calle F. Villaverde, como alumno aventajado. En aquellos tiempos el servicio militar era obligatorio, y al protagonista de nuestra historia le concedieron como destino Marín, donde ya percibía las posibilidades de un negocio como la joyería, en el cual sería pionero para aquella maravillosa villa acariciada por el mar, y dedicada casi íntegramente a la pesca.",
      ],
    },
    {
      titulo: "En 1943...",
      imagen: "images/grupo1.jpg",
      parrafos: [
        "En 1943, Ángel Fariña y sus hermanos Antonio y Ricardo, se asociarían fundando la 1ª joyería-taller del municipio de Marín en la calle General Franco (actualmente Rúa do Sol), gracias a la inestimable ayuda de sus padres, que venderían una finca de regadío para que sus hijos pudieran costearse los gastos de creación de su primera empresa; en ella contarían años más tarde con la inestimable ayuda de su cuñado Francisco Pérez Omil (Olito) y su otro hermano José. Todos sus hermanos aprenderían el oficio de joyero de una persona tan creativa como Ángel Fariña.",
        "Desde siempre, el gusto por la calidad y el buen hacer marcaron el estilo de todos sus trabajos, totalmente artesanales: pulseras, sellos, solitarios, piezas de plata en turquesa y coral, e increíbles trabajos de filigrana para rosarios y monedas. Tal era la demanda de sus creaciones, que se llegaron a trabajar grandes cantidades de plata; también se hacían reparaciones y todo tipo de encargos de joyería para clientes, tanto en oro como en plata. Ya en aquel momento, toda la producción de Ángel Fariña era vendida; parte a Manuel El Platero, que era de Lugo (aunque residía en Pontevedra) y José Valle, que vendían por toda Galicia en las ferias y mercados; parte a la Joyería Suárez; y parte a la Joyería El Carballinés (de Carballiño), cuyo propietario viajaba hasta Marín en su sidecar para comprar una cantidad importante de pulseras y monedas de plata con filigrana, piezas codiciadas por la clase pudiente mexicana que veraneaba en Carballiño. Estas joyas llegaron a tener tal éxito en la época, que este hombre llegó a organizar excursiones con sus clientes mexicanos hasta Marín, quienes aprovechaban para disfrutar de la antigua casa de baños y realizar sus compras en la joyería-taller de la familia Fariña. Por aquel entonces el gerente de la Joyería El Carballinés ya no se desplazaba en su sidecar, sino en un 'seiscientos'.",
      ],
    },
    // Continuar agregando más objetos con la misma estructura para cada sección de la historia
  ];

  return (
    <>
      <Seo title="Sobre Nosotros" />
      <BasicLayout>
        <Separator height={100} />
        <Container className="max-w-3xl mx-auto px-4 py-8 bg-white text-gray-800">
          <h2 className="text-3xl text-center text-red-700 mb-12">
            Nuestra Historia
          </h2>
          {historia.map((seccion, index) => (
            <div className="mb-12 border-b pb-8" key={index}>
              <h3 className="text-2xl text-red-800 mb-4">{seccion.titulo}</h3>
              {seccion.parrafos.map((parrafo, i) => (
                <p key={i} className="text-lg text-gray-700 mb-4">
                  {parrafo}
                </p>
              ))}
              <div className="flex justify-center mt-4">
                <Image
                  src={seccion.imagen}
                  className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          ))}
        </Container>
        <Separator height={100} />
      </BasicLayout>
    </>
  );
}
