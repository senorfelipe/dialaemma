import { useState } from "react";
import Layout from "./Layout";
import Settings from "./Settings";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Layout
        sidebar={<Settings />}
        main={<div>main</div>}
        footer={<div>footer</div>}
      ></Layout>
    </>
  );
}

export default App;
