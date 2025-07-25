
import React, { useRef } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import slideshow1 from "../assets/slideshow1.webp";
import slideshow2 from "../assets/slideshow2.webp";
import slideshow3 from "../assets/slideshow3.webp";
import slideshow4 from "../assets/slideshow4.webp";

const images = [
  {
    original: slideshow1,
    thumbnail: slideshow1,
    originalAlt: "slide-1",
    thumbnailAlt: "slide-1-thumb",
  },
  {
    original: slideshow2,
    thumbnail: slideshow2,
    originalAlt: "slide-2",
    thumbnailAlt: "slide-2-thumb",
  },
  {
    original: slideshow3,
    thumbnail: slideshow3,
    originalAlt: "slide-3",
    thumbnailAlt: "slide-3-thumb",
  },
  {
    original: slideshow4,
    thumbnail: slideshow4,
    originalAlt: "slide-4",
    thumbnailAlt: "slide-4-thumb",
  },
];


const LowerSection = () => {
  const galleryRef = useRef(null);

  // Helper to go to next slide
  const handleImageClick = () => {
    if (galleryRef.current) {
      galleryRef.current.slideToIndex(
        (galleryRef.current.getCurrentIndex() + 1) % images.length
      );
    }
  };

  return (
    <div className="w-full">
      <ImageGallery
        ref={galleryRef}
        items={images}
        showThumbnails={true}
        showPlayButton={false}
        showFullscreenButton={false}
        showNav={true}
        autoPlay={true}
        slideInterval={4000}
        showBullets={true}
        additionalClass="rounded-lg overflow-hidden"
        renderItem={item => (
          <img
            src={item.original}
            alt={item.originalAlt}
            className="w-full h-auto max-h-[540px] object-cover rounded-lg cursor-pointer"
            style={{padding:0, margin:0}}
            onClick={handleImageClick}
          />
        )}
      />
    </div>
  );
};

export default LowerSection;
