import ImageSlideshow from "../../components/ImageSlideshow";

// Add your AI-VERSE 4.0 gallery images here
const galleryImages = [
  // Replace with your actual image paths
  "/public/placeholder-1.jpg",
  "/public/placeholder-2.jpg",
  "/public/placeholder-3.jpg",
  "/public/placeholder-4.jpg",
  "/public/placeholder-5.jpg",
];

export default function Gallery() {
  return (
    <ImageSlideshow 
      images={galleryImages} 
      eventName="AI-VERSE 4.0"
      title="Event Gallery"
    />
  );
}
