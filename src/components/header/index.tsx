import styles from "./index.module.scss";

import scriptlyStudiosLogo from "../../assets/images/icons/scriptly-studios-logo.svg";
// import gameControllerIcon from "../../assets/images/icons/game-controller-icon.svg";
import discordLogoIcon from "../../assets/images/icons/discord-logo-icon.svg";
import robloxLogoIcon from "../../assets/images/icons/roblox-logo-icon.svg";
import menuIcon from "../../assets/images/icons/hamburger-menu.svg";

import CustomNavLink from "./components/customNavLink";
import useWindowWidth from "../../(util)/useWindowWidth";
import SideNav from "../sideNav";
import config from "../../config";

const NAV_SCREEN_WIDTH_BREAKPOINT = 815;

const handleNavOpen = () => {
    const sideNav = document.querySelector('#sideNav') as HTMLElement | null;
    if (!sideNav) return console.error("Side Nav selector was not found");

    sideNav.style.display = "block"
    
    setTimeout(() => {
        sideNav.style.right = '0';
    }, 120);
}

function Header() {
    const screenWidth = useWindowWidth();

    return (
        <header>
            <div className={styles.contentContainer}>
                <div className={styles.textContainer}>
                    <img src={scriptlyStudiosLogo} alt="Scriptly Studios Logo" />
                    <h1>Scriptly Studios</h1>
                </div>

                {
                    screenWidth > NAV_SCREEN_WIDTH_BREAKPOINT ?
                    (
                        <div className={styles.navContainer}>
                            <nav>
                                <ul>
                                    {/* <li>
                                        <CustomNavLink
                                            href={config.ROBLOX_URL}
                                            iconSrc={gameControllerIcon}
                                            iconAlt="Game Controller Icon"
                                            linkTitle="Games"
                                            />
                                    </li> */}

                                    <li>
                                        <CustomNavLink
                                            href={config.DISCORD_URL}
                                            iconSrc={discordLogoIcon}
                                            iconAlt="Discord Logo Icon"
                                            linkTitle="Discord"
                                            />
                                    </li>

                                    <li>
                                        <CustomNavLink
                                            href={config.ROBLOX_URL}
                                            iconSrc={robloxLogoIcon}
                                            iconAlt="Roblox Logo Icon"
                                            linkTitle="Roblox"
                                            />
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    ) : (
                        <>
                            <button 
                                className={styles.navButton}
                                onClick={handleNavOpen}>
                                <img src={menuIcon} alt="Menu Icon" />
                            </button>
                            <SideNav />
                        </>
                    )
                }
            </div>
        </header>
    )
}

export default Header;