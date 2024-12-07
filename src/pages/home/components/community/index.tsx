import styles from "./index.module.scss";

import discordChatIcon from "../../../../assets/images/icons/discord-chat-icon.svg";

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
                            of upcoming events, updates, and gamenights.
                        </p>
                    </div>

                    <div className={styles.buttonContainer}>
                        <a href="#" rel="external">
                            <button>Join</button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Community;