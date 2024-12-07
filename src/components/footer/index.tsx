import { Link } from "react-router-dom";
import styles from "./index.module.scss";

function Footer() {
    return (
        <footer className={styles.footer}>
            <ul>
                <li>
                    <h4>Links</h4>

                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>

                        <li>
                            <Link to="https://www.roblox.com/communities/4345585/Scriptly-Studios#!/about">Roblox Page</Link>
                        </li>

                        <li>
                            <Link to="https://discord.com/login?redirect_to=%2Fchannels%2F715258365177233532%2F1150212434523594884">Support</Link>
                        </li>
                    </ul>
                </li>

                <li>
                    <h4>Our Games</h4>

                    <ul>
                        <li>
                            <Link to="https://www.roblox.com/games/3214114884/Flag-Wars">Flag Wars</Link>
                        </li>

                        <li>
                            <Link to="https://www.roblox.com/games/2266829809/Moving-Day-Story">Moving Day</Link>
                        </li>

                        <li>
                            <Link to="https://www.roblox.com/games/3454572751/Road-Trip-Story">Road Trip</Link>
                        </li>
                    </ul>
                </li>

                <li>
                    <h4>Socials</h4>

                    <ul>
                        <li>
                            <Link to="https://discord.com/invite/scriptly">Discord</Link>
                        </li>

                        <li>
                            <Link to="https://x.com/cylipsonrblx?lang=en">X / Twitter</Link>
                        </li>
                    </ul>
                </li>

            </ul>
        </footer>
    )
}

export default Footer;