import styles from "./index.module.scss";
import useWindowWidth from "../../../../(util)/useWindowWidth";

import scriptlyStudiosLogoHd from "../../../../assets/images/icons/scriptly-studios-logo-hd.webp";
import twitterXIcon from "../../../../assets/images/icons/twitter-x.svg";
import youtubeIcon from "../../../../assets/images/icons/youtube-logo-icon.svg";
import discordIcon from "../../../../assets/images/icons/discord-logo-icon.svg";

import { CSSProperties } from "react";
import openURL from "../../../../(util)/openURL";

const SCREEN_WIDTH_BREAKPOINT = 815;

interface ButtonOptions {
    iconURL: string;
    href: string;
    label: string;
    style?: CSSProperties;
}

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

                <div className={styles.buttonRow}>
                    <Button
                        iconURL={youtubeIcon}
                        href="https://www.youtube.com/channel/UCJV2MmXzD-4OCAsKGRzZXzA"
                        label="YouTube"
                        style={{
                            backgroundColor: '#f00',
                            color: '#FFF',
                            border: '6px solid #f00'
                        }} />

                    <Button
                        iconURL={discordIcon}
                        href="https://discord.com/invite/scriptly"
                        label="Discord"
                        style={{
                            backgroundColor: '#5865F2',
                            color: '#FFF',
                            border: '6px solid #5865F2'
                        }} />

                    <Button
                        iconURL={twitterXIcon}
                        href="https://x.com/cylipsonrblx?lang=en"
                        label="x.com"
                        style={{
                            backgroundColor: '#000',
                            color: '#FFF',
                            border: '6px solid #000'
                        }} />
                </div>
            </div>
        </section>
    )
}

function Button({
    iconURL,
    href,
    label,
    style
}: ButtonOptions) {
    return (
        <button
            onClick={() => openURL(href, true)}
            className={styles.customButton} 
            style={style}>
            <img src={iconURL} alt={`${label}`} />
            <p>{label}</p>
        </button>
    )
}

export default Showcase;