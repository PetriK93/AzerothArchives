import { useState } from "react";
import styles from "./Header.styles.module.css";
import logo from "../../assets/Azeroth Archives logo 1.png";
import RegionMenu from "../RegionMenu/RegionMenu.jsx";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import home from "../../assets/home8.png";

// Collection of different taglines that the header will randomly choose on pageload
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
  "A Place for Every Hero’s Tale.",
  "The Record Keepers of Azeroth.",
  "Azeroth’s Chronicles, Gathered Here.",
  "Through Time and Conflict, the Archives Endure.",
  "Legends Told, Legends Forgotten, Legends Found.",
  "A Sanctuary for Stories Untold.",
  "By the Light, the Void, and Everything Between.",
  "Azeroth’s Story Is Not Yet Finished.",
  "The Wisdom of Old, the Knowledge of New.",
  "From Teldrassil to Dun Morogh, All is Remembered.",
  "History is Written by Heroes—and Kept by Us.",
  "The Keeper’s Watchful Eye Over Azeroth.",
  "Tales of Honor, Betrayal, and Glory.",
  "The Archives Never Forget.",
];

const Header = ({ region, setRegion }) => {
  // Sets the tagline by randomly choosing one of the stored taglines
  const [tagline, setTagline] = useState(
    taglines[Math.floor(Math.random() * taglines.length)]
  );

  // Changes the tagline, when you click the tagline text
  const changeTagline = () => {
    setTagline(taglines[Math.floor(Math.random() * taglines.length)]);
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftGroup}>
        <img src={logo} className={styles.logo} alt="Azeroth Archives Logo" />
        <h1
          className={styles.taglines}
          aria-label="Azeroth Archives"
          onClick={changeTagline}
        >
          {tagline}
        </h1>
        {/* Mobile view when max-width: 870px */}
        <HamburgerMenu />
      </div>
      <div className={styles.rightGroup}>
        <nav>
          <ul className={styles.navElements}>
            <li>
              <a href="/">
                <img
                  src={home}
                  alt="home icon"
                  className={styles.navIcon}
                ></img>
                Home
              </a>
            </li>
          </ul>
          <DropdownMenu />
          <RegionMenu region={region} setRegion={setRegion} />
        </nav>
      </div>
    </div>
  );
};

export default Header;
