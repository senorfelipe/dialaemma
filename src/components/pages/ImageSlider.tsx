import { ChevronLeftIcon, ChevronRightIcon, ImageOff } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { Button } from "../ui/button";
import React from "react";
import { DisplayImageContext } from "../Contexts";

interface ImageSliderProps {
  imagePaths: string[];
}

const WINDOW_SIZE = 7;
const CENTER_INDEX = Math.floor(WINDOW_SIZE / 2);

const ImageSlider: React.FC<ImageSliderProps> = ({ imagePaths }) => {
  const [currIndex, setCurrIndex] = useState(0);
  const { setDisplayImage } = useContext(DisplayImageContext);

  const visibleImages = Array.from({ length: WINDOW_SIZE }, (_, index) => {
    const imgIndex = currIndex + index;
    return imagePaths[imgIndex] || "";
  });

  useEffect(() => {
    if (!visibleImages[CENTER_INDEX]) return;
    setDisplayImage(visibleImages[CENTER_INDEX]);
  }, [visibleImages, setDisplayImage]);

  console.log({ imagePaths });
  console.log({ visibleImages });
  console.log({ currIndex });

  const handleNext = () => {
    if (currIndex + CENTER_INDEX < imagePaths.length - 1) {
      setCurrIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currIndex + CENTER_INDEX > 0) {
      setCurrIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="flex gap-4 items-center justify-between h-full max-w-screen m-2 select-none">
      <Button disabled={currIndex + CENTER_INDEX === 0} onClick={handlePrev}>
        <ChevronLeftIcon className="h-full hover:scale-115" />
      </Button>
      {[...Array(WINDOW_SIZE)].map((_, index) => {
        return showPreview(index, visibleImages[index] || "");
      })}
      <Button
        disabled={currIndex + CENTER_INDEX === imagePaths.length - 1}
        onClick={handleNext}
      >
        <ChevronRightIcon className="h-full hover:scale-115 disabled:opacity-50" />
      </Button>
    </div>
  );

  function showPreview(index: number, path: string) {
    const isCenter = index === CENTER_INDEX;
    return (
      <div
        key={index}
        id={"preview-img" + index}
        className={`flex-1 aspect-square rounded-md bg-gray-500 transform transition-transform duration-300 ease-in-out ${
          isCenter
            ? "scale-110 border-2 z-10 m-1 shadow-lg"
            : "scale-90 opacity-80"
        }`}
      >
        {path ? (
          <img
            key={path}
            src={"file://" + path}
            loading="lazy"
            className="object-cover w-full h-full rounded-md"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full text-white opacity-50">
            <ImageOff />
          </div>
        )}
      </div>
    );
  }
};

export default ImageSlider;
