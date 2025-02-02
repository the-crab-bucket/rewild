import { HashRouter, Route, Routes } from 'react-router-dom';

import About from './components/about/About';
import Home from './components/home/home';
import NavbarLayout from './components/navbar/NavbarLayout';

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<NavbarLayout />}>
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
