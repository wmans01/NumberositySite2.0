/**
 * Slideshow Component
 *
 * A full-screen image carousel that displays a series of images with a smooth transition effect.
 * The component covers exactly one screen height and scrolls with the page.
 * Features:
 * - Automatic image rotation every 10 seconds
 * - Smooth fade transitions between images
 * - Dark overlay for better text visibility
 * - Responsive background sizing
 */

import React, { useState, useEffect } from "react";

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/src/assets/slideshow/banners.jpg",
    "/src/assets/slideshow/cnc.jpg",
    "/src/assets/slideshow/dino.jpg",
    "/src/assets/slideshow/drillpress.jpg",
    "/src/assets/slideshow/laser.jpg",
    "/src/assets/slideshow/plate.jpg",
    "/src/assets/slideshow/trophies.jpg",
    "/src/assets/slideshow/wires.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Change image every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[100vh] bg-black">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-750 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      ))}
    </div>
  );
};

export default ImageCarousel;
