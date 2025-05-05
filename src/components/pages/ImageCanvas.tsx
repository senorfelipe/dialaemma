import { useContext } from "react";
import { DisplayImageContext } from "../Contexts";
import { Button } from "../ui/button";
import { FullscreenIcon } from "lucide-react";

const ImageCanvas = () => {
  const { displayImage } = useContext(DisplayImageContext);
  const { backgroundColor } = useContext(DisplayImageContext);

  function handleToggleFullscreen(): void {
    const el = document.getElementById("main-image-container");
    if (el?.requestFullscreen) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        el.requestFullscreen();
      }
    }
  }

  return (
    <div className="relative w-full h-full p-2" style={{ backgroundColor }}>
      {displayImage && (
        <img
          className="h-full w-full object-scale-down"
          src={"file://" + displayImage}
        ></img>
      )}
      <Button
        variant="secondary"
        className="absolute bottom-2 right-2 bg-white/50"
        size="icon"
        onClick={handleToggleFullscreen}
      >
        <FullscreenIcon className="text-black w-10 h-10" />
      </Button>
    </div>
  );
};

export default ImageCanvas;
