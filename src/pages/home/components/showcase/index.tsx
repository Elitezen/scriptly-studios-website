import styles from "./index.module.scss";

import scriptlyStudiosLogoHd from "../../../../assets/images/icons/scriptly-studios-logo-hd.webp";

function Showcase() {
    return (
        <section className={styles.showcase}>
            <div className={styles.contentContainer}>
                <div className={styles.heroContainer}>
                    <div className={styles.textContainer}>
                        <div className={styles.heroTextContainer}>
                            <h1>
                                Scriptly Studios
                            </h1>

                            <p>
                                Creating Fun Games For All to Enjoy! Checkout our games, blogs, and socials.
                            </p>
                        </div>
                    </div>

                    <div className={styles.imageContainer}>
                        <img src={scriptlyStudiosLogoHd} alt="Scriptly Studios Logo" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Showcase;