import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import PetsLost from "./pages/PetsLost";
import PetsFound from "./pages/PetsFound";
import { HowItWork } from "./pages/HowItWork";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="lost" element={<PetsLost />} />
          <Route path="found" element={<PetsFound />} />
          <Route path="how-it-work" element={<HowItWork />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
