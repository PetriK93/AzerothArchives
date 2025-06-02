import styles from "./CharacterData.styles.module.css";
import factionLogo1 from "../../assets/allianceLogo.png";
import factionLogo2 from "../../assets/hordeLogo.png";
import placeholder from "../../assets/placeholderImg.png";

const CharacterData = () => {
  const name = "Shadowhunter";
  const iLvl = 75;
  const guild = "<Defenders of Azeroth>";
  const level = 60;
  const race = "Night Elf";
  const className = "Druid";
  const server = "Hydraxian Waterlords -- RP";

  return (
    <div className={styles.container}>
      <div className={styles.outerCharacterInfo}>
        <img
          src={factionLogo1}
          alt="Faction logo"
          className={styles.factionLogo}
        ></img>
        <div className={styles.innerCharacterInfo}>
          <div className={styles.infoRow}>
            <p className={styles.name}>{name} |</p>
            <p className={styles.iLvl}>ilvl {iLvl} |</p>
            <p className={styles.guild}>{guild}</p>
          </div>
          <div className={styles.infoRow}>
            <p className={styles.level}>Level {level}</p>
            <p className={styles.race}>{race}</p>
            <p className={styles.class}>{className} |</p>
            <p className={styles.server}>{server}</p>
          </div>
        </div>
      </div>
      <div className={styles.outerCharacterInfoMobile}></div>
      <div className={styles.equipmentContainer}>
        <div className={styles.leftArmorContainer}>
          <div className={styles.itemSlot}></div>
          <div className={styles.itemSlot}></div>
          <div className={styles.itemSlot}></div>
          <div className={styles.itemSlot}></div>
          <div className={styles.itemSlot}></div>
          <div className={styles.itemSlot}></div>
          <div className={styles.itemSlot}></div>
          <div className={styles.itemSlot}></div>
        </div>
        <div className={styles.middleContainer}>
          <img
            src={placeholder}
            className={styles.characterModel}
            alt="Character model"
          ></img>
        </div>
        <div className={styles.rightArmorContainer}>
          <div className={styles.itemSlot}></div>
          <div className={styles.itemSlot}></div>
          <div className={styles.itemSlot}></div>
          <div className={styles.itemSlot}></div>
          <div className={styles.itemSlot}></div>
          <div className={styles.itemSlot}></div>
          <div className={styles.itemSlot}></div>
          <div className={styles.itemSlot}></div>
        </div>
      </div>
      <div className={styles.weaponsContainer}>
        <div className={styles.itemSlot}></div>
        <div className={styles.itemSlot}></div>
        <div className={styles.itemSlot}></div>
      </div>
      <div className={styles.equipmentContainerMobile}>
        <div className={styles.armorContainerMobile}>
          <div className={styles.itemContainer}>
            <div className={styles.itemSlotMobile}></div>
          </div>
          <div className={styles.itemContainer}>
            <div className={styles.itemSlotMobile}></div>
          </div>
          <div className={styles.itemContainer}>
            <div className={styles.itemSlotMobile}></div>
          </div>
          <div className={styles.itemContainer}>
            <div className={styles.itemSlotMobile}></div>
          </div>
          <div className={styles.itemContainer}>
            <div className={styles.itemSlotMobile}></div>
          </div>
          <div className={styles.itemContainer}>
            <div className={styles.itemSlotMobile}></div>
          </div>
          <div className={styles.itemContainer}>
            <div className={styles.itemSlotMobile}></div>
          </div>
          <div className={styles.itemContainer}>
            <div className={styles.itemSlotMobile}></div>
          </div>
          <div className={styles.itemContainer}>
            <div className={styles.itemSlotMobile}></div>
          </div>
          <div className={styles.itemContainer}>
            <div className={styles.itemSlotMobile}></div>
          </div>
          <div className={styles.itemContainer}>
            <div className={styles.itemSlotMobile}></div>
          </div>
          <div className={styles.itemContainer}>
            <div className={styles.itemSlotMobile}></div>
          </div>
          <div className={styles.itemContainer}>
            <div className={styles.itemSlotMobile}></div>
          </div>
          <div className={styles.itemContainer}>
            <div className={styles.itemSlotMobile}></div>
          </div>
          <div className={styles.itemContainer}>
            <div className={styles.itemSlotMobile}></div>
          </div>
          <div className={styles.itemContainer}>
            <div className={styles.itemSlotMobile}></div>
          </div>
          <div className={styles.itemContainer}>
            <div className={styles.itemSlotMobile}></div>
          </div>
          <div className={styles.itemContainer}>
            <div className={styles.itemSlotMobile}></div>
          </div>
          <div className={styles.itemContainer}>
            <div className={styles.itemSlotMobile}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterData;
