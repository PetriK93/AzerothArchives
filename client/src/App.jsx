import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import SearchCharacter from "./components/SearchCharacter/SearchCharacter.jsx";
import CharacterData from "./components/CharacterData/CharacterData.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  const [region, setRegion] = useState("EU");

  return (
    <>
      <Header region={region} setRegion={setRegion} />
      <Routes>
        <Route
          path={"/"}
          element={<SearchCharacter region={region} setRegion={setRegion} />}
        />
        <Route
          path={"/character-data"}
          element={<CharacterData region={region} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
