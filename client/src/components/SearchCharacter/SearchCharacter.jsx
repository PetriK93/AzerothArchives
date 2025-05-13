import styles from "./SearchCharacter.styles.module.css";
import { useState, useEffect } from "react";
import magnifyingGlass from "./../../assets/magnifyingGlass.png";

import React from "react";

const SearchCharacter = ({ region, setRegion }) => {
  // useStates
  const [input, setInput] = useState("");
  const [servers, setServers] = useState([]);

  // Only allows Unicode letters in the input field
  const handleInputChange = (e) => {
    const value = e.target.value;
    const isValid = /^[\p{L}]+$/u.test(value);
    if (isValid || value === "") {
      setInput(value);
    }
  };

  // List of all classic era EU servers
  const classicEraServersEU = [
    { name: "Amnennar", type: "PvP" },
    { name: "Ashbringer", type: "PvP" },
    { name: "Auberdine", type: "PvE" },
    { name: "Bloodfang", type: "PvP" },
    { name: "Celebras", type: "RP" },
    { name: "Dragon's Call", type: "PvP" },
    { name: "Dragonfang", type: "PvP" },
    { name: "Dreadmist", type: "PvP" },
    { name: "Earthshaker", type: "PvP" },
    { name: "Everlook", type: "PvE" },
    { name: "Finkle", type: "PvP" },
    { name: "Firemaw", type: "PvP" },
    { name: "Flamelash", type: "PvP" },
    { name: "Gandling", type: "PvP" },
    { name: "Gehennas", type: "PvP" },
    { name: "Golemagg", type: "PvP" },
    { name: "Heartstriker", type: "PvP" },
    { name: "Hydraxian Waterlords", type: "RP" },
    { name: "Judgement", type: "PvP" },
    { name: "Lakeshire", type: "PvE" },
    { name: "Lucifron", type: "PvP" },
    { name: "Mandokir", type: "PvP" },
    { name: "Mirage Raceway", type: "PvE" },
    { name: "Mograine", type: "PvP" },
    { name: "Nek'Rosh", type: "PvE" },
    { name: "Nethergarde Keep", type: "PvE" },
    { name: "Noggenfogger", type: "PvP" },
    { name: "Patchwerk", type: "PvP" },
    { name: "Pyrewood Village", type: "PvE" },
    { name: "Razorfen", type: "PvE" },
    { name: "Razorgore", type: "PvP" },
    { name: "Shazzrah", type: "PvP" },
    { name: "Skullflame", type: "PvP" },
    { name: "Stitches", type: "PvE" },
    { name: "Stonespine", type: "PvP" },
    { name: "Sulfuron", type: "PvP" },
    { name: "Ten Storms", type: "PvP" },
    { name: "Transcendence", type: "PvP" },
    { name: "Venoxis", type: "PvP" },
    { name: "Zandalar Tribe", type: "PvP RP" },
  ];

  // List of all classic era US & Oceania servers
  const classicEraServersUS = [
    { name: "Anathema", type: "PvP" },
    { name: "Arcanite Reaper", type: "PvP" },
    { name: "Arugal", type: "PvP" },
    { name: "Ashkandi", type: "PvE" },
    { name: "Atiesh", type: "PvE" },
    { name: "Azuresong", type: "PvE" },
    { name: "Benediction", type: "PvP" },
    { name: "Bigglesworth", type: "PvP" },
    { name: "Blaumeux", type: "PvP" },
    { name: "Bloodsail Buccaneers", type: "RP" },
    { name: "Defias Pillager", type: "PvE" },
    { name: "Deviate Delight", type: "PvP RP" },
    { name: "Earthfury", type: "PvP" },
    { name: "Faerlina", type: "PvP" },
    { name: "Fairbanks", type: "PvP" },
    { name: "Felstriker", type: "PvP" },
    { name: "Grobbulus", type: "PvP RP" },
    { name: "Heartseeker", type: "PvP" },
    { name: "Herod", type: "PvP" },
    { name: "Incendius", type: "PvP" },
    { name: "Kirtonos", type: "PvP" },
    { name: "Kromcrush", type: "PvP" },
    { name: "Kurinnaxx", type: "PvP" },
    { name: "Loatheb", type: "PvP" },
    { name: "Mankrik", type: "PvE" },
    { name: "Myzrael", type: "PvE" },
    { name: "Netherwind", type: "PvP" },
    { name: "Old Blanchy", type: "PvE" },
    { name: "Pagle", type: "PvE" },
    { name: "Rattlegore", type: "PvP" },
    { name: "Remulos", type: "PvE" },
    { name: "Skeram", type: "PvP" },
    { name: "Skull Rock", type: "PvE" },
    { name: "Smolderweb", type: "PvP" },
    { name: "Stalagg", type: "PvP" },
    { name: "Sul'thraze", type: "PvP" },
    { name: "Sulfuras", type: "PvP" },
    { name: "Thalnos", type: "PvP" },
    { name: "Thunderfury", type: "PvP" },
    { name: "Westfall", type: "PvE" },
    { name: "Whitemane", type: "PvP" },
    { name: "Windseeker", type: "PvE" },
    { name: "Yojamba", type: "PvP" },
  ];

  // List of all classic era korean servers
  const classicEraServersKR = [
    {
      name: "Hillsbrad",
      type: "PvP",
      population: "Low",
      timezone: "KST",
      version: "Classic Era",
    },
    {
      name: "Iceblood",
      type: "PvP",
      population: "Low",
      timezone: "KST",
      version: "Classic Era",
    },
    {
      name: "Lokholar",
      type: "PvP",
      population: "Low",
      timezone: "KST",
      version: "Classic Era",
    },
    {
      name: "Ragnaros",
      type: "PvP",
      population: "Low",
      timezone: "KST",
      version: "Classic Era",
    },
    {
      name: "Shimmering Flats",
      type: "PvE",
      population: "Low",
      timezone: "KST",
      version: "Classic Era",
    },
  ];

  // List of all classic era taiwanese servers
  const classicEraServersTW = [
    {
      name: "Ivus",
      type: "PvP",
      population: "Low",
      timezone: "CST",
      version: "Classic Era",
    },
    {
      name: "Maraudon",
      type: "PvE",
      population: "Low",
      timezone: "CST",
      version: "Classic Era",
    },
  ];

  // Mapping regions to their corresponding servers
  const serverMap = {
    EU: classicEraServersEU,
    "US & Oceania": classicEraServersUS,
    Korea: classicEraServersKR,
    Taiwan: classicEraServersTW,
  };

  // useEffect hook to update servers when region changes
  useEffect(() => {
    if (region && serverMap[region]) {
      setServers(serverMap[region]); // Update the servers list based on region
    } else {
      setServers([]); // If region is invalid, reset the server list to an empty array
    }
  }, [region]);

  return (
    <div className={styles.container}>
      <div className={styles.descriptionContainer}>
        <h1 className={styles.title}>Azeroth Archives</h1>
        <p className={styles.description}>
          Type in the name of the character you wish to inspect.<br></br>
          (World of Warcraft: Classic Era Servers Only)
        </p>
      </div>
      <div className={styles.searchRow}>
        <input
          className={styles.searchBar}
          placeholder="Type character name..."
          value={input}
          onChange={handleInputChange}
          required
        />
        <select className={styles.serverDropdown} defaultValue="">
          <option value="" disabled>
            Select Server
          </option>
          {servers.map((server) => (
            <option key={server.name} value={server.name}>
              {server.name} — {server.type}
            </option>
          ))}
        </select>
        <button type="button" className={styles.searchButton}>
          <img src={magnifyingGlass} className={styles.magnifyingGlass}></img>
        </button>
      </div>
    </div>
  );
};

export default SearchCharacter;
