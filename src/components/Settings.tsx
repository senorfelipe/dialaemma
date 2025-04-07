import { Repeat, Shuffle } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import MultipleSelector, { Option } from "./ui/multiselect";
import { Toggle } from "./ui/toggle";

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
  const [transitions, setTransitions] = useState<Option[]>([]);

  const TRANSITION_OPTIONS: Option[] = [
    { label: "Fade", value: "fade" },
    { label: "Crossfade", value: "crossfade" },
    { label: "Zoom", value: "zoom" },
    { label: "Slide", value: "slide" },
  ];

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
                <Toggle>
                  <Shuffle /> Shuffle
                </Toggle>
                <Toggle>
                  <Repeat /> Dauerschleife
                </Toggle>
              </div>
            </div>
          }
        />
      </div>
    </>
  );
};

export default Settings;
