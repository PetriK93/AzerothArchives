import { useState, useEffect, useRef } from "react";
import styles from "./RegionMenu.styles.module.css";
import eu from "../../assets/europe.png";
import us from "../../assets/us.png";
import kr from "../../assets/korea.png";
import tw from "../../assets/taiwan.png";

// Define regions with their names and corresponding icons
const regions = [
  { name: "EU", icon: eu },
  { name: "US & Oceania", icon: us },
  { name: "Korea", icon: kr },
  { name: "Taiwan", icon: tw },
];

function RegionMenu({ setRegion }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Get the saved region from localStorage, defaulting to "EU" if nothing is saved
  const savedRegion = localStorage.getItem("selectedRegion") || "EU";
  const defaultRegion = regions.find((r) => r.name === savedRegion);

  // Set the selected region from either localStorage or defaultRegion
  const [selectedRegion, setSelectedRegion] = useState(defaultRegion);

  // Update localStorage whenever the selected region changes
  useEffect(() => {
    if (selectedRegion) {
      localStorage.setItem("selectedRegion", selectedRegion.name);
      setRegion(selectedRegion.name); // Update the parent component with the selected region
    }
  }, [selectedRegion, setRegion]);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Handle region selection
  const handleRegionSelect = (region) => {
    setSelectedRegion(region);
    setIsOpen(false);
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
    <div className={styles.dropdownContainer} ref={dropdownRef}>
      <button className={styles.dropdownButton} onClick={toggleDropdown}>
        {selectedRegion.icon ? (
          <img
            src={selectedRegion.icon}
            alt={`${selectedRegion.name} flag`}
            className={styles.icon}
          />
        ) : (
          selectedRegion.name
        )}
      </button>
      {isOpen && (
        <div className={styles.dropdownMenu}>
          {regions.map((r) => (
            <div
              key={r.name}
              onClick={() => handleRegionSelect(r)}
              className={styles.option}
            >
              <img
                src={r.icon}
                alt={`${r.name} flag`}
                className={styles.icon}
              />
              <p className={styles.regionName}>{r.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default RegionMenu;
