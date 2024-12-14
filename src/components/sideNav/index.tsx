import styles from "./index.module.scss";

import crossXIcon from "../../assets/images/icons/x-icon.svg";
import { Link } from "react-router-dom";

// import controllerIcon from "../../assets/images/icons/game-controller-icon.svg";
import discordIcon from "../../assets/images/icons/discord-logo-icon.svg";
import robloxIcon from "../../assets/images/icons/roblox-logo-icon.svg";
import config from "../../config";

const handleNavCloseClick = () => {
    const sideNav = document.querySelector('#sideNav') as HTMLElement | null;
    if (!sideNav) return console.error("Side Nav selector was not found");

    sideNav.style.right = '-65vw';
    setTimeout(() => {
        sideNav.style.display = "none";
    }, 150);
}

function SideNav() {
    return (
        <nav className={styles.sideNav} id="sideNav">
            <div className={styles.contentContainer}>
                <div className={styles.heading}>
                    <button 
                        className={styles.closeBtn}
                        onClick={handleNavCloseClick}>
                        <img src={crossXIcon} alt="Close Nav Icon" />
                    </button>
                </div>

                <div className={styles.linksContainer}>
                    <ul>
                        {/* <li>
                            <SideNavLink
                                iconURL={controllerIcon}
                                label="Games"
                                href={config.ROBLOX_URL}
                                />
                        </li> */}

                        <li>
                            <SideNavLink
                                iconURL={discordIcon}
                                label="Discord"
                                href={config.DISCORD_URL}
                                />
                        </li>

                        <li>
                            <SideNavLink
                                iconURL={robloxIcon}
                                label="Roblox"
                                href={config.ROBLOX_URL}
                                />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

interface SideNavLinkOptions {
    iconURL: string;
    label: string;
    href: string;
}

function SideNavLink({
    iconURL,
    label,
    href
}: SideNavLinkOptions) {
    return (
        <Link to={href} className={styles.sideNavLink}>
            <img src={iconURL} alt={`${label} icon`} />
            <p>{label}</p>
        </Link>
    )
}

export default SideNav;