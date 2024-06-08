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
    slidesToShow: 1,
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
      <div className={styles.gallery}>
        <div className={styles.principal}>
          <Image
            src={principalImage.attributes.url}
            onClick={onOpenClose}
            className={styles.principalImage}
          />
        </div>
        <div className={styles.grid}>
          {map(galleryClone, (picture) => (
            <div key={picture.id}>
              <Image
                src={picture.attributes.url}
                onClick={onOpenClose}
                className={styles.thumbnail}
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
