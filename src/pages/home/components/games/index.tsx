import SectionTitle from "../../../../components/sectionTitle";
import styles from "./index.module.scss";

import flagWarsWallpaper1 from "../../../../assets/images/wallpaper/flag-wars-1.webp";
import movingDayWallpaper0 from "../../../../assets/images/wallpaper/moving-day-0.webp";
import roadTripWallpaper0 from "../../../../assets/images/wallpaper/road-trip-0.webp";
import yachtTycoonWallpaper0 from "../../../../assets/images/wallpaper/yacht-tycoon.webp";

const openURL = (url: string) => window.open(url, "_blank");

interface GameOptions {
    imageURL: string;
    title: string;
    onClick: () => any;
}

interface LargeGameOptions extends GameOptions {
    subtitle?: string
}

function Games() {
    return (
        <section className={styles.games}>
            <div className={styles.contentContainer}>
                <SectionTitle title="Our Games" />

                <div className={styles.gameGrid}>
                    <div className={styles.largeGame}>
                        <LargeGame
                            onClick={() => openURL("https://www.roblox.com/games/3214114884/Flag-Wars")}
                            title="Flag Wars"
                            subtitle="Our latest and greatst! an exhilarating and strategic multiplayer game that immerses players in the heart of intense flag-capturing battles"
                            imageURL={flagWarsWallpaper1} />
                    </div>

                    <div className={styles.smallGamesRow}>
                        <SmallGame
                            onClick={() => openURL("https://www.roblox.com/games/2266829809/Moving-Day-Story")}
                            title="Moving Day"
                            imageURL={movingDayWallpaper0} />

                        <SmallGame
                            onClick={() => openURL("https://www.roblox.com/games/3454572751/Road-Trip-Story")}
                            title="Road Trip"
                            imageURL={roadTripWallpaper0} />

                        <SmallGame
                            onClick={() => openURL("https://www.roblox.com/games/15887241923/NEW-Yacht-Tycoon")}
                            title="Yacht Tycoon"
                            imageURL={yachtTycoonWallpaper0} />
                    </div>
                </div>
            </div>
        </section>
    )
}

function LargeGame({
    imageURL,
    title,
    subtitle,
    onClick
}: LargeGameOptions) {
    return (
        <div 
            onClick={onClick}
            className={styles.largeGame}
            style={{
                backgroundImage: `url(${imageURL})`
            }}>
            
            <div className={styles.gameTextContainer}>
                <h2>{title}</h2>
                {
                    subtitle?.length ? (
                        <p>{subtitle}</p>
                    ) : <></>
                }
            </div>
        </div>
    )
}

function SmallGame({
    imageURL,
    title,
    onClick
}: GameOptions) {
    return (
        <div
            onClick={onClick}
            className={styles.smallGame}
            style={{
                backgroundImage: `url(${imageURL})`
            }}>

            <div className={styles.gameTextContainer}>
                <h3>{title}</h3>
            </div>
        </div>
    )
}

export default Games;