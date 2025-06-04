import styles from "./CharacterData.styles.module.css";
import factionLogo1 from "../../assets/allianceLogo1.png";
import factionLogo2 from "../../assets/hordeLogo1.png";
import placeholder from "../../assets/placeholderImg.png";
import item1 from "../../assets/item1.png";
import item2 from "../../assets/item2.png";
import item3 from "../../assets/item3.png";
import avatar from "../../assets/lenyraAvatar.jpg";

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
      <div className={styles.outerCharacterInfoMobile}>
        <div className={styles.avatarContainer}>
          <img src={avatar}></img>
          <img
            src={factionLogo1}
            alt="Faction logo"
            className={styles.factionLogoMobile}
          ></img>
        </div>
        <p className={styles.name}>{name}</p>
        <p className={styles.iLvl}>ilvl {iLvl}</p>
        <p className={styles.guild}>{guild}</p>
        <p className={styles.level}>Level {level}</p>
        <p className={styles.race}>{race}</p>
        <p className={styles.class}>{className}</p>
        <p className={styles.server}>{server}</p>
      </div>
      <div className={styles.equipmentContainer}>
        <div className={styles.leftArmorContainer}>
          <div className={styles.itemSlot}>
            <img src={item1} alt="Head" className={styles.equipmentIcon}></img>
          </div>
          <div className={styles.itemSlot}>
            <img src={item2} alt="Neck" className={styles.equipmentIcon}></img>
          </div>
          <div className={styles.itemSlot}>
            <img
              src={item3}
              alt="Shoulder"
              className={styles.equipmentIcon}
            ></img>
          </div>
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
            <div className={styles.itemSlotMobile}>
              <img
                src={item1}
                alt="Head"
                className={styles.equipmentIconMobile}
              ></img>
            </div>
          </div>
          <div className={styles.itemContainer}>
            <div className={styles.itemSlotMobile}>
              <img
                src={item2}
                alt="Neck"
                className={styles.equipmentIconMobile}
              ></img>
            </div>
          </div>
          <div className={styles.itemContainer}>
            <div className={styles.itemSlotMobile}>
              <img
                src={item3}
                alt="Shoulder"
                className={styles.equipmentIconMobile}
              ></img>
            </div>
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
