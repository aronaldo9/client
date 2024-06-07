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
    {
      titulo: "10 años después...",
      parrafos: [
        "Tan solo diez años después del comienzo de la actividad empresarial, en 1953, la plantilla ya ascendía a once empleados, de los cuales podemos observar diez en esta foto, celebrando una comilona en Arcade el día de San Eloy ( 1 de diciembre ). La empresa ya se había visto obligada  a cambiar de taller por tercera vez, ya que el volumen de trabajo implicaba un aumento de personal y la consiguiente falta de espacio físico para el trabajo.",
        "En aquellas fechas, la mujer de Ángel Fariña, Ignacia Rosa Pérez Omil, ya había engendrado parte de la 2ª generación de esta familia y lo que en su día funcionaba como tienda en la calle General Franco, hubo de cesar su actividad como tienda de joyería. Las ventas seguían efectuándose en el taller, y Ángel Fariña ya vendía una gran parte de sus creaciones en sus viajes a Vigo, más concretamente a Don Enrique Aragunde. Los hermanos Fariña triunfaban en el sector de la joyería, sus modelos gozaban de una enorme aceptación en todo el territorio gallego y a consecuencia del crecimiento de la empresa, deciden continuar con su buena trayectoria empresarial por caminos diferentes.",
      ],
    },
    {
      titulo: "Entrados los años 60...",
      imagen: "images/grupo2.jpg",
      parrafos: [
        "Más o menos en 1960, la plantilla se divide según sus cualidades, y Antonio Fariña comienza su andadura personal para dedicarse a una fabricación más automatizada o en serie, mientras que su hermano Ángel continúa con su trabajo artesanal, siendo fiel a sus comienzos.",
        "Antonio se establece en la conocida como “ Casa de la Morocha “ y empieza a buscar viajantes que distribuirán sus artículos por toda Galicia y Castilla-León. Ángel Fariña se establece con su familia y una plantilla joven en su mayoría, y muy cualificada. Ángel y Fran, dos de los hijos de Ángel Fariña, no tardarían en sumar su agudeza e inteligencia a las actividades empresariales de la familia. En 1966, Ángel Fariña ya viajaba por toda Galicia vendiendo piezas de su propia fabricación, y en 1972 se inauguraría la 1ª joyería de la familia Fariña, la Joyería Rosant, con su hija Rosa María Fariña Pérez al frente y su marido Antonio Pesqueira López como contable de la misma y de la fábrica. En los años 70, cuando Ángel Fariña abandonó el viaje, su hijo Ángel (gemólogo nº27 de toda España años más tarde), su cuñado y su hermano Fran, atendían a cerca de doscientos clientes de la comunidad autónoma gallega, bajo la firma Ángel Fariña, S.L.",
      ],
    },
    {
      titulo: "Ángel Fariña, S.L.",
      parrafos: [
        "A partir de la creación de Ángel Fariña S.L., la familia Fariña comienza una nueva etapa gerentada completamente por la 2ª generación. Fieles a las ideas de su padre, siguen apostando por una joyería artesanal; pero observando las necesidades del mercado, también comienzan a producir determinados artículos en serie para así incrementar su competitividad en el creciente mercado de los artículos de joyería. La empresa fabrica pendientes, colgantes, pulseras, anillos, fornituras... una  completísima gama de artículos, sin renunciar en ningún momento a los diseños personalizados y artesanos. Ángel Fariña S.L. se convierte en un referente de la joyería gallega de calidad, aumenta su clientela y la fideliza, y a mediados de los años 80 abre su segunda joyería en la villa de Marín, la Joyería Antros.",
      ],
    },
    {
      titulo: "Una serie de catastróficas desdichas...",
      parrafos: [
        "Pero en la familia Fariña, como en todas las familias, no todo fue un camino de rosas, ya que a finales de los años 80 sufrirían una de las mayores inundaciones que se recuerdan en el pueblo; el río Lameiriña crecería, a consecuencia de las lluvias torrenciales, de una manera desproporcionada, alcanzando más de un metro en el bajo de la casa de la familia, donde se encontraban las oficinas y el taller de la empresa, ocasionando una serie de pérdidas en documentación, maquinaria, utensilios, joyas y diversos destrozos; en definitiva, una pérdida de capital que realmente pondría a prueba la valía de dicha familia.",
        "A pesar de la pérdida de capital, la familia Fariña siguió adelante, reformó las instalaciones, cambió las oficinas a la planta alta de la casa, le echó lo que hay que echarle y siguió funcionando como si nada hubiera pasado. Pero la vida no le otorga reverencias a nadie, y el 6 de Febrero de 1992, se llevaría a una de las piezas clave de la familia, al menor de los hijos, Francisco Fariña Pérez . . . . . . .",
      ],
    },
    {
      titulo: "Años 90",
      parrafos: [
        "La vida sigue, y aunque la empresa volvió a sufrir otra catastrófica inundación ( 1,30 de altura el 27-11-2006, y algunas que quedan en el tintero...), en los años 90 se incorporó savia nueva; la 3ª generación hacía su aparición en el mundo de la joyería. Así, después de una preparación de casi dos años en A Coruña, pasaba a formar parte de la plantilla Raúl Pesqueira Fariña, y años más tarde lo haría su hermano Sergio.",
        "En estos años, Ángel Fariña S.L. distribuye sus piezas de joyería a casi cuatrocientos establecimientos de toda Galicia, lleva a cabo tareas de reparación y restauración de joyería, sigue haciendo joyería artesanal y realiza diseños personalizados para sus clientes. En sus muestrarios se encontraban joyas de diseño italiano, valenciano, madrileño o cordobés, y por supuesto de fabricación propia, todo con una calidad digna de su precursor.",
      ],
    },
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
                <p key={i} className="text-base text-gray-700 mb-4">
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
