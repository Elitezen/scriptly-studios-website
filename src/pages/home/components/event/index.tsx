import styles from "./index.module.scss";

import eventImg from "../../../../assets/images/wallpaper/flag-wars-xmas-event.png";
import config from "../../../../config";

function Event() {
    return (
        <section className={styles.event}>
            <div className={styles.contentContainer}>
                <div className={styles.imageSide}>
                    <img src={eventImg} alt="Flag Wars Christmas Event Art" />
                </div>

                <div className={styles.textSide}>
                    <div className={styles.text}>
                        <h3>New Season 3 Update for Flag Wars!</h3>
                        <p>
                            Get festive with a brand new, content packed Flag Wars Christmas Update:
                            <ul>
                                <li>⚔️ 2 new weapons</li>
                                <li>🗺️ New Santas Workshop map</li>
                                <li>👑 New Royal skin bundle</li>
                                <li>🕶️ +50 new cosmetics</li>
                                <li>✨ Map Remasters</li>
                                <li>🔧 Balance Changes</li>
                                <li>And more!</li>
                            </ul>
                        </p>
                    </div>

                    <div className={styles.buttonContainer}>
                        <a href={config.EVENT_URL} rel="external">
                            <button>Explore</button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Event;