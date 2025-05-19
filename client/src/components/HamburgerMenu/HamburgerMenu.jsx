import styles from "./HamburgerMenu.styles.module.css";
import { useState, useEffect, useRef } from "react";
import hamburger from "../../assets/hamburgerMenu.png";
import serverReset from "../../assets/serverReset.png";
import maintenance from "../../assets/maintenance.png";
import professionGuide from "../../assets/professionGuide.png";
import classGuide from "../../assets/classGuide.png";
import blizzardSite from "../../assets/blizzardSite.png";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Close the dropdown if clicked outside
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false); // Close dropdown if click is outside
    }
  };

  useEffect(() => {
    // Add event listener for clicks outside of the dropdown
    document.addEventListener("click", handleClickOutside);

    // Clean up the event listener when the component is unmounted
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.container} ref={dropdownRef}>
      <button
        className={styles.hamburgerButton}
        onClick={toggleDropdown}
        role="menu"
        aria-haspopup="menu"
        aria-expanded={isOpen}
      >
        <img
          src={hamburger}
          className={styles.hamburgerIcon}
          alt="Useful links"
        ></img>
      </button>
      {isOpen && (
        <div className={styles.dropdownMenu} role="menu">
          <div className={styles.option}>
            <img src={serverReset} className={styles.listIcon}></img>
            <a
              href="https://wowreset.com"
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Server Reset Timers
            </a>
          </div>
          <div className={styles.option}>
            <img src={maintenance} className={styles.listIcon}></img>
            <a
              href="https://us.battle.net/support/en/article/358479"
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Weekly Maintenance Schedule
            </a>
          </div>
          <div className={styles.option}>
            <img src={professionGuide} className={styles.listIcon}></img>
            <a
              href="https://www.wow-professions.com/classic"
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Profession Guides
            </a>
          </div>
          <div className={styles.option}>
            <img src={classGuide} className={styles.listIcon}></img>
            <a
              href="https://www.icy-veins.com/wow-classic/class-guides"
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Class Guides
            </a>
          </div>
          <div className={styles.option}>
            <img src={blizzardSite} className={styles.listIcon}></img>
            <a
              href="https://worldofwarcraft.blizzard.com/en-us"
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Blizzard's Official Website
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
