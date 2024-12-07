import styles from "./index.module.scss";
import useWindowWidth from "../../../../(util)/useWindowWidth";

import scriptlyStudiosLogoHd from "../../../../assets/images/icons/scriptly-studios-logo-hd.webp";

const SCREEN_WIDTH_BREAKPOINT = 815;

function Showcase() {
    const screenWidth = useWindowWidth();

    return (
        <section className={styles.showcase}>
            <div className={styles.contentContainer}>
                <div className={styles.heroContainer}>
                    <div className={styles.textContainer}>
                        <div className={styles.heroTextContainer}>
                            <h1>
                                Scriptly{screenWidth > SCREEN_WIDTH_BREAKPOINT ? <br /> : <> </>}Studios
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