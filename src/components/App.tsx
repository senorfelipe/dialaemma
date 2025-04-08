import { useState } from "react";
import Layout from "./pages/Layout";
import Settings from "./pages/Settings";
import Slider from "./pages/Slider";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Layout
        sidebar={<Settings />}
        main={<div>main</div>}
        slider={<Slider />}
      ></Layout>
    </>
  );
}

export default App;
