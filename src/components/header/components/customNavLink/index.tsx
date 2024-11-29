import styles from "./index.module.scss";

interface CustomNavLink {
    iconSrc: string;
    iconAlt: string;
    linkTitle: string;
}

function CustomNavLink({
    iconSrc,
    iconAlt,
    linkTitle
}: CustomNavLink) {
    return (
        <div className={styles.navLink}>
            <img 
                src={iconSrc} 
                alt={iconAlt} 
                className={styles.icon}/>
            <p>{linkTitle}</p>
        </div>
    )
}

export default CustomNavLink