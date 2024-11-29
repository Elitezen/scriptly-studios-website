import styles from "./index.module.scss";

import scriptlyStudiosLogo from "../../assets/images/icons/scriptly-studios-logo.svg";
import gameControllerIcon from "../../assets/images/icons/game-controller-icon.svg";
import discordLogoIcon from "../../assets/images/icons/discord-logo-icon.svg";
import robloxLogoIcon from "../../assets/images/icons/roblox-logo-icon.svg";

import CustomNavLink from "./components/customNavLink";

function Header() {
    return (
        <header>
            <div className={styles.contentContainer}>
                <div className={styles.textContainer}>
                    <img src={scriptlyStudiosLogo} alt="Scriptly Studios Logo" />
                    <h1>Scriptly Studios</h1>
                </div>

                <div className={styles.navContainer}>
                    <nav>
                        <ul>
                            <li>
                                <CustomNavLink
                                    iconSrc={gameControllerIcon}
                                    iconAlt="Game Controller Icon"
                                    linkTitle="Games"
                                    />
                            </li>

                            <li>
                                <CustomNavLink
                                    iconSrc={discordLogoIcon}
                                    iconAlt="Discord Logo Icon"
                                    linkTitle="Discord"
                                    />
                            </li>

                            <li>
                                <CustomNavLink
                                    iconSrc={robloxLogoIcon}
                                    iconAlt="Roblox Logo Icon"
                                    linkTitle="Roblox"
                                    />
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;