import { HashRouter, Route, Routes } from "react-router-dom";

import NavbarLayout from "./components/Navbar/NavbarLayout";
import AboutContainer from "./components/About/AboutContainer";
import HomeContainer from "./components/Home/HomeContainer";
import DocsContainer from "./components/Docs/DocsContainer";
import DevelopmentControlsContainer from "./components/DevelopmentControls/DevelopmentControlsContainer";
import InternetControlsContainer from "./components/InternetControls/InternetControlsContainer";
import SettingsContainer from "./components/Settings/SettingsContainer";
import PagesControlsContainer from "./components/PagesControls/PagesControlsContainer";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route element={<NavbarLayout />}>
            <Route path="/docs" element={<DocsContainer />} />
            <Route path="/dev" element={<DevelopmentControlsContainer />} />
            <Route path="/internet" element={<InternetControlsContainer />} />
            <Route path="/pages" element={<PagesControlsContainer />} />
            <Route path="/settings" element={<SettingsContainer />} />
            <Route path="/about" element={<AboutContainer />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
