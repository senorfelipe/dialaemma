import { Button } from "components/ui/button";
import { Ban, Download } from "lucide-react";
import { useState } from "react";
import ImageSlider from "./ImageSlider";

const ImagePreviewer: React.FC = () => {
  const [imagePaths, setImagePaths] = useState<string[]>([]);

  return (
    <div className="flex flex-col h-full gap-2">
      <div className="flex gap-2 items-center">
        <Button
          size="sm"
          variant={"secondary"}
          title="Bilder aus Ordner laden"
          onClick={async () => {
            const paths = await window.ipcRenderer.invoke("dialog:openFile");
            console.log(paths);
            setImagePaths(paths);
          }}
        >
          <Download />
          <span className="hidden md:block">Bilder Laden</span>
        </Button>
        <Button size="sm" variant={"secondary"} title="Alle Bilder entfernen">
          <Ban />
          <span
            className="hidden md:block"
            onClick={() => {
              setImagePaths([]);
            }}
          >
            Alle Entfernen
          </span>
        </Button>
      </div>
      <ImageSlider imagePaths={imagePaths || []} />
    </div>
  );
};

export default ImagePreviewer;
