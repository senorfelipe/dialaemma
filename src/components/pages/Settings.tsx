import { Repeat, Shuffle } from "lucide-react";
import { useContext, useState } from "react";
import { Input } from "../ui/input";
import MultipleSelector, { Option } from "../ui/multiselect";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import { DisplayImageContext } from "../Contexts";

interface SettingRowProps {
  heading: string;
  content: React.ReactNode;
}

const SettingRow: React.FC<SettingRowProps> = ({ heading, content }) => {
  return (
    <div>
      <h3 className="text-md font-medium mb-2">{heading}</h3>
      {content}
    </div>
  );
};

const Settings = () => {
  const [interval, setInterval] = useState(5);
  const [playSettings, setPlaySettings] = useState({
    repeat: false,
    shuffle: false,
  });
  const [transitions, setTransitions] = useState<Option[]>([]);
  const { backgroundColor, setBackgroundColor } =
    useContext(DisplayImageContext);

  const TRANSITION_OPTIONS: Option[] = [
    { label: "Fade", value: "fade" },
    { label: "Crossfade", value: "crossfade" },
    { label: "Zoom", value: "zoom" },
    { label: "Slide", value: "slide" },
  ];

  console.log(backgroundColor);

  return (
    <>
      <h1 className="text-xl font-bold mb-4">Einstellungen</h1>
      <div className="flex-col space-y-4">
        <SettingRow
          heading="Intervall"
          content={
            <div className="flex gap-2 items-center justify-between">
              <Input
                className="grow"
                type="number"
                step={0.5}
                min={0.5}
                value={interval}
                onChange={(e) => setInterval(parseFloat(e.target.value))}
              />
              <span>Sekunden</span>
            </div>
          }
        />
        <SettingRow
          heading="Übergänge"
          content={
            <div className="flex">
              <MultipleSelector
                className="truncate"
                value={transitions}
                onChange={setTransitions}
                defaultOptions={TRANSITION_OPTIONS}
                placeholder="Übergänge ausw&auml;hlen"
                emptyIndicator={
                  <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
                    Keine weiteren Ergebnisse.
                  </p>
                }
              />
            </div>
          }
        />
        <SettingRow
          heading="Wiedergabe"
          content={
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <ToggleGroup type="multiple" className="border w-full ">
                  <ToggleGroupItem value="shuffle" className="align-middle">
                    <Shuffle />
                    <span className="text-xs hidden xl:block">
                      {" "}
                      Zuf&auml;llig
                    </span>
                  </ToggleGroupItem>
                  <ToggleGroupItem value="repeat">
                    <Repeat />{" "}
                    <span className="text-xs hidden xl:block">Wiederholen</span>
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
            </div>
          }
        />
        <SettingRow
          heading="Darstellung"
          content={
            <div className="flex gap-2 items-center justify-between">
              <Input
                className="hover:cursor-pointer"
                type="color"
                value={backgroundColor}
                onChange={(e) => setBackgroundColor(e.target.value)}
              />
              <span className="hidden lg:block">Hintergrundfarbe</span>
            </div>
          }
        />
      </div>
    </>
  );
};

export default Settings;
