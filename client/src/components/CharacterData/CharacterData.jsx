import styles from "./CharacterData.styles.module.css";
import factionLogo1 from "../../assets/allianceLogo.png";
import factionLogo2 from "../../assets/hordeLogo.png";

const CharacterData = () => {
  const name = "Lenyra";
  const iLvl = 75;
  const guild = "<Malice in Wonderland>";
  const level = 60;
  const race = "Night Elf";
  const className = "Druid";
  const server = "Gandling EU";

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
    </div>
  );
};

export default CharacterData;
