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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, modi.</p>
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