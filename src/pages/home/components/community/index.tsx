import styles from "./index.module.scss";

import discordChatIcon from "../../../../assets/images/icons/discord-logo-icon.svg";
import config from "../../../../config";

function Community() {
    return (
        <section className={styles.community}>
            <div className={styles.contentContainer}>
                <div className={styles.imageSide}>
                    <img src={discordChatIcon} alt="Discord Chat Bubble" />
                </div>

                <div className={styles.textSide}>
                    <div className={styles.text}>
                        <h3>Join the Community</h3>
                        <p>
                            Become part of Scriptly Studios' core community!
                            Talk with other players, join giveaways, and notified
                            of upcoming <strong>events, updates, and gamenights</strong>.
                        </p>
                    </div>

                    <div className={styles.buttonContainer}>
                        <a href={config.DISCORD_URL} rel="external">
                            <button>Join</button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Community;