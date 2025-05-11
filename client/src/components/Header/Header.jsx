import { useState } from "react";
import styles from "./Header.styles.module.css";
import logo from "../../assets/Azeroth Archives logo 1.png";

const taglines = [
  "Preserving the Legends of Azeroth.",
  "The Scrolls of Warcraft, Unbound.",
  "A Chronicle of War and Wonders.",
  "From the Titans to the Twisting Nether.",
  "Every Story Has Its Place.",
  "Echoes of Heroes, Whispers of Villains.",
  "Azeroth’s Past, Present, and Beyond.",
  "Where Lore Comes to Life.",
  "The Eternal Archive of Warcraft.",
  "Guardians of Azeroth’s History.",
  "Legends Never Fade.",
  "Unveiling the Secrets of Azeroth.",
  "One World, Countless Tales.",
  "The Memory of a World at War.",
  "History Written in Fire and Magic.",
  "From the Dark Portal to the Shadowlands.",
  "A Place for Every Hero’s Tale.",
  "The Record Keepers of Azeroth.",
  "Azeroth’s Chronicles, Gathered Here.",
  "Through Time and Conflict, the Archives Endure.",
  "Legends Told, Legends Forgotten, Legends Found.",
  "A Sanctuary for Stories Untold.",
  "By the Light, the Void, and Everything Between.",
  "Azeroth’s Story Is Not Yet Finished.",
  "The Wisdom of Old, the Knowledge of New.",
  "From Teldrassil to Icecrown, All is Remembered.",
  "History is Written by Heroes—and Kept by Us.",
  "The Keeper’s Watchful Eye Over Azeroth.",
  "Tales of Honor, Betrayal, and Glory.",
  "The Archives Never Forget.",
];

const Header = () => {
  const [tagline, setTagline] = useState(
    taglines[Math.floor(Math.random() * taglines.length)]
  );

  const changeTagline = () => {
    setTagline(taglines[Math.floor(Math.random() * taglines.length)]);
  };

  return (
    <div className={styles.container}>
      <img src={logo} className={styles.logo} alt="Azeroth Archives Logo" />
      <h1
        className={styles.taglines}
        aria-label="Azeroth Archives"
        onClick={changeTagline}
      >
        {tagline}
      </h1>
      <nav>
        <a href="#">Equipment</a>
        <a href="#">Talents</a>
      </nav>
    </div>
  );
};

export default Header;
