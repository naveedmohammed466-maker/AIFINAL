import React from 'react';
import ImageSlideshow from '../../../../components/ImageSlideshow';

// Gallery images for AI-VERSE 3.0
const galleryImages = [
  "/src/pages/AiVerse3/assets/gallery/event-1.jpg",
  "/src/pages/AiVerse3/assets/gallery/event-2.jpg",
  "/src/pages/AiVerse3/assets/gallery/event-3.jpg",
  "/src/pages/AiVerse3/assets/gallery/event-4.jpg",
  "/src/pages/AiVerse3/assets/gallery/event-5.jpg",
  "/src/pages/AiVerse3/assets/gallery/event-6.jpg",
  "/src/pages/AiVerse3/assets/gallery/event-7.jpg",
];

export default function Gallery() {
  return (
    <ImageSlideshow 
      images={galleryImages} 
      eventName="AI-VERSE 3.0"
      title="Event Gallery"
    />
  );
}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <p className="text-white text-sm font-medium">{image.alt}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}