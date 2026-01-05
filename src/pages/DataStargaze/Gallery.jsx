import { motion } from "framer-motion";
import { STARGAZE_DATA } from "./content";
import ImageSlideshow from "../../components/ImageSlideshow";

export default function Gallery() {
  // Extract image URLs from STARGAZE_DATA
  const galleryImages = STARGAZE_DATA.images.map(img => img.url);

  return (
    <>
      <ImageSlideshow 
        images={galleryImages} 
        eventName="Data Stargaze"
        title="Gallery"
      />
    </>
  );
}