// HeaderWallpaper.js
import React from "react";
import styles from "./HeaderWallpaper.module.css";

export function HeaderWallpaper(props) {
  const { image } = props;

  return (
    <div className={styles.headerWallpaper}>
      <img src={image} alt="Wallpaper" />
    </div>
  );
}
