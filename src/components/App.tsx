import { useState } from "react";
import ImagePreviewer from "./pages/ImagePreviewer";
import Layout from "./pages/Layout";
import Settings from "./pages/Settings";
import { DisplayImageContext } from "./Contexts";
import ImageCanvas from "./pages/ImageCanvas";

function App() {
  const [displayImage, setDisplayImage] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("#");

  return (
    <DisplayImageContext.Provider
      value={{
        displayImage,
        setDisplayImage,
        backgroundColor,
        setBackgroundColor,
      }}
    >
      <Layout
        sidebar={<Settings />}
        main={<ImageCanvas />}
        bottomBar={<ImagePreviewer />}
      ></Layout>
    </DisplayImageContext.Provider>
  );
}

export default App;
