import { Button } from "components/ui/button";
import { Ban, ChevronLeftIcon, ChevronRightIcon, Download } from "lucide-react";
import { useState } from "react";

const N_PREVIEW_IMAGES = 7;
const CENTER_IMG_IDX = (N_PREVIEW_IMAGES - 1) / 2;
const Slider: React.FC = () => {
  const [focusImg, setFocusImg] = useState(4);

  return (
    <div className="flex flex-col h-full">
      <div className="flex gap-4 items-center">
        <Button size="sm" variant={"secondary"}>
          <Download />
          <span>Fotos Laden</span>
        </Button>
        <Button size="sm" variant={"secondary"}>
          <Ban />
          <span>Alle Entfernen</span>
        </Button>
      </div>
      <div className="flex gap-4 items-center justify-between h-full max-w-screen">
        <ChevronLeftIcon className="hover:cursor-pointer h-full hover:scale-110" />
        {[...Array(N_PREVIEW_IMAGES)].map((_, index) => (
          <div
            className={`flex-1 border aspect-square rounded-md ${
              index === CENTER_IMG_IDX
                ? "border-2 scale-115 z-10"
                : "border-primary opacity-80"
            }`}
          ></div>
        ))}
        <ChevronRightIcon className="hover:cursor-pointer h-full hover:scale-110" />
      </div>
    </div>
  );
};

export default Slider;
