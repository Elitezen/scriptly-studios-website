import { Link } from "react-router-dom";
import styles from "./index.module.scss";
import config from "../../config";

function Footer() {
    return (
        <footer className={styles.footer}>
            <p>Copyright @ 2024 Scriptly Studios. All rights reserved. The content of this website, including but not limited to text, graphics, logos, images, and audio, is the property of Scriptly Studios.</p>
            <ul>
                <li>
                    <h4>Links</h4>

                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>

                        <li>
                            <Link to={config.ROBLOX_URL}>Roblox Page</Link>
                        </li>

                        <li>
                            <Link to={config.SUPPORT_URL}>Support</Link>
                        </li>
                    </ul>
                </li>

                <li>
                    <h4>Our Games</h4>

                    <ul>
                        <li>
                            <Link to={config.FLAG_WARS_URL}>Flag Wars</Link>
                        </li>

                        <li>
                            <Link to={config.MOVING_DAY_URL}>Moving Day</Link>
                        </li>

                        <li>
                            <Link to={config.ROAD_TRIP_URL}>Road Trip</Link>
                        </li>
                    </ul>
                </li>

                <li>
                    <h4>Socials</h4>

                    <ul>
                        <li>
                            <Link to={config.DISCORD_URL}>Discord</Link>
                        </li>

                        <li>
                            <Link to={config.YOUTUBE_URL}>YouTube</Link>
                        </li>

                        <li>
                            <Link to={config.X_URL}>X / Twitter</Link>
                        </li>
                    </ul>
                </li>

            </ul>
        </footer>
    )
}

export default Footer;