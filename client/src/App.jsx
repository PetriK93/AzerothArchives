import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import SearchCharacter from "./components/SearchCharacter/SearchCharacter.jsx";

function App() {
  const [region, setRegion] = useState("EU");

  return (
    <>
      <Header region={region} setRegion={setRegion} />
      <SearchCharacter region={region} setRegion={setRegion} />
    </>
  );
}

export default App;
