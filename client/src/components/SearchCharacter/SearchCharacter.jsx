import styles from "./SearchCharacter.styles.module.css";
import { useState } from "react";
import magnifyingGlass from "./../../assets/magnifyingGlass.png";
import magnifyingGlassGif from "./../../assets/magnifyingGlassAnimation.gif";

import React from "react";

const SearchCharacter = () => {
  // useStates
  const [input, setInput] = useState("");
  const [isHovering, setIsHovering] = useState(false);

  // Only allows Unicode letters in the input field
  const handleInputChange = (e) => {
    const value = e.target.value;
    const isValid = /^[\p{L}]+$/u.test(value);
    if (isValid || value === "") {
      setInput(value);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Azeroth Archives</h1>
      <p className={styles.description}>
        Type in the name of the character you want to inspect.
      </p>
      <div className={styles.searchRow}>
        <input
          className={styles.searchBar}
          placeholder="Type character name..."
          value={input}
          onChange={handleInputChange}
          required
        />
        <select className={styles.serverDropdown}>
          <option value="">Select Server</option>
          <option value="azeroth">Azeroth</option>
          <option value="stormrage">Stormrage</option>
          <option value="frostmourne">Frostmourne</option>
        </select>
        <button type="button" className={styles.searchButton}>
          <img
            src={isHovering ? magnifyingGlassGif : magnifyingGlass}
            className={styles.magnifyingGlass}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          ></img>
        </button>
      </div>
    </div>
  );
};

export default SearchCharacter;
