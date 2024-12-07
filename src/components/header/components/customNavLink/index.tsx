import styles from "./index.module.scss";

interface CustomNavLink {
    href: string;
    iconSrc: string;
    iconAlt: string;
    linkTitle: string;
}

function CustomNavLink({
    href,
    iconSrc,
    iconAlt,
    linkTitle
}: CustomNavLink) {
    return (
        <a href={href} className={styles.navLink}>
            <img 
                src={iconSrc} 
                alt={iconAlt} 
                className={styles.icon}/>
            <p>{linkTitle}</p>
        </a>
    )
}

export default CustomNavLink