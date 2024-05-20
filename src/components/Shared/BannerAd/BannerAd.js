import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function BannerAd(props) {
  const { title, subtitle, btnTitle, btnLink, images } = props;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="flex flex-col lg:flex-row items-center bg-gray-200 text-white max-w-full overflow-hidden">
      <div className="w-full lg:w-3/5 lg:order-2 md:px-4">
        <Slider {...settings} className="w-full h-full">
          {images.map((image, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-70 lg:h-96"
            >
              <img
                src={image}
                className="w-full h-full py-5"
                alt={`Banner ${index}`}
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="w-full mt-4 lg:w-2/5 lg:order-1 p-4 lg:p-8">
        <div className="max-w-lg mx-auto lg:mx-0">
          <h2 className="text-xl lg:text-3xl font-bold mb-4 text-black">
            {title}
          </h2>
          <h3 className="text-md lg:text-lg mb-8 text-gray-800">{subtitle}</h3>
          <Link
            href={btnLink}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded inline-block hover:text-white"
          >
            {btnTitle}
          </Link>
        </div>
      </div>
    </div>
  );
}
