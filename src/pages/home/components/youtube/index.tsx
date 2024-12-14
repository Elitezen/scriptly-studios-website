import SectionTitle from "../../../../components/sectionTitle";
import styles from "./index.module.scss";

// import xjevonIcon from '../../../../assets/images/profileIcons/xjevon-icon.jpg';
// import pinkMinkIcon from '../../../../assets/images/profileIcons/pinkmink-icon.jpg';
// import youngTrapDiddyIcon from '../../../../assets/images/profileIcons/youngtrapdiddy-icon.jpg';
// import jabaweeIcon from '../../../../assets/images/profileIcons/jabawee-icon.jpg';
// import jostro44Icon from "../../../../assets/images/profileIcons/jostro44-icon.jpg";
// import kitJellyStudios from '../../../../assets/images/profileIcons/kitjellystudios-icon.jpg';
// import theLightningStudios from '../../../../assets/images/profileIcons/the-lightning-studios.jpg';

// import leftArrow from "../../../../assets/images/icons/arrow-left.svg";
// import rightArrow from "../../../../assets/images/icons/arrow-right.svg";

// interface CreatorEntry {
//     iconURL: string;
//     name: string;
//     description: string;
//     pageURL: string;
// }

// const creators:CreatorEntry[] = [
//     {
//         name: 'xJevon',
//         description: 'My name is Jevon, I play Roblox!',
//         iconURL: xjevonIcon,
//         pageURL: 'https://www.youtube.com/@xJevon/featured'
//     },
//     {
//         name: 'Pink Mink',
//         description: 'Hey noobs :D I\'m Pink Mink and welcome to my channel! ',
//         iconURL: pinkMinkIcon,
//         pageURL: 'https://www.youtube.com/@PinkMinkk/featured'
//     },
//     {
//         name: 'YoungTrapDiddy',
//         description: "Greetings to my channel! I'm a Roblox Star creator dedicated to producing engaging gaming content. Show some support and Join My Group On Roblox! Veil Diddy CITY!",
//         iconURL: youngTrapDiddyIcon,
//         pageURL: 'https://www.youtube.com/@trapdiddy/featured'
//     },
//     {
//         name: 'Jabawee',
//         description: 'Mostly doing Flag Wars stuff / Admin for Scriptly Studios',
//         iconURL: jabaweeIcon,
//         pageURL: 'https://www.youtube.com/@jabawee/featured'
//     },
//     {
//         name: "jostro44",
//         description: "its a very funny channel with among us and roblox",
//         iconURL: jostro44Icon,
//         pageURL: "https://www.youtube.com/@jostro44/featured"
//     },
//     {
//         name: 'Kit-Jelly Studios',
//         description: "Hey! It's kit-jelly studios here, On this channel I mostly make Roblox content especially flag wars!",
//         iconURL: kitJellyStudios,
//         pageURL: 'https://www.youtube.com/@kit-jellystudios/featured'
//     },
//     {
//         name: 'The Lightning Studios',
//         description: 'Welcome to my channel! I do Flag Wars and Bedwars content. Feel free to subscribe and like my videos!',
//         iconURL: theLightningStudios,
//         pageURL: 'https://www.youtube.com/@Lightning_Master2020/community'
//     }
// ]

function Youtube() {
    return (
        <section className={styles.creators}>
            <div className={styles.contentContainer}>
                <SectionTitle title="YouTube Scene" />

                <p>Our top 3 content creators and their releases, along with an unnanounced community project are <strong>coming soon</strong>...</p>
            </div>
        </section>
    )
}

// function CreatorEntry({
//     iconURL,
//     name,
//     description
// }: CreatorEntry) {
//     return (
//         <div className={styles.creator}>
//             <img src={iconURL} alt={`${name} icon`} />
//             <div className={styles.textContainer}>
//                 <h3>{name}</h3>
//                 <p>{description}</p>
//             </div>
//         </div>
//     )
// }

export default Youtube;