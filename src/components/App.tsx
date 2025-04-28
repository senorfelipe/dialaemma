import { useState } from "react";
import ImagePreviewer from "./pages/ImagePreviewer";
import Layout from "./pages/Layout";
import Settings from "./pages/Settings";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Layout
        sidebar={<Settings />}
        main={<div>main</div>}
        bottomBar={<ImagePreviewer />}
      ></Layout>
    </>
  );
}

export default App;
