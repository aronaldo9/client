import styles from "./Gallery.module.css";
import { Image } from "semantic-ui-react";
import { map } from "lodash";
import { FullModal } from "@/components/Shared";
import { useState } from "react";
import Slider from "react-slick";

export function Gallery(props) {
  const { gallery } = props;
  const [show, setShow] = useState(false);

  const onOpenClose = () => {
    setShow((prevState) => !prevState);
  };

  // Asegúrate de que gallery es un array
  const galleryData = gallery?.data ?? [];

  if (!Array.isArray(galleryData) || galleryData.length === 0) {
    return <div>No images available</div>;
  }

  const galleryClone = [...galleryData];
  const principalImage = galleryClone.shift();

  const settings = {
    dots: true,
    dotsClass: styles.dots,
    infinite: true,
    slidersToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    customPaging: function (index) {
      return (
        <Image
          src={galleryData[index].attributes.url}
          className={styles.thumbnail}
        />
      );
    },
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row">
        <div className={styles.mainImageContainer}>
          <Image
            src={principalImage.attributes.url}
            onClick={onOpenClose}
            className={`${styles.mainImage} rounded-lg hover:opacity-60 cursor-pointer`}
          />
        </div>
        <div className={`${styles.thumbnailGrid}`}>
          {map(galleryClone, (picture) => (
            <div key={picture.id} className={styles.thumbnailContainer}>
              <Image
                src={picture.attributes.url}
                onClick={onOpenClose}
                className="rounded-lg object-cover hover:opacity-60 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>

      <FullModal show={show} onClose={onOpenClose}>
        <div className={styles.carouselContainer}>
          <Slider {...settings}>
            {map(galleryData, (picture) => (
              <div key={picture.id}>
                <Image className="mx-auto" src={picture.attributes.url} />
              </div>
            ))}
          </Slider>
        </div>
      </FullModal>
    </>
  );
}
