import styles from "./index.module.scss";

interface SectionTitleOptions {
    title: string;
}

function SectionTitle({
    title
}: SectionTitleOptions) {
    return (
        <div className={styles.sectionTitle}>
            <div className={styles.sectionTitleContainer}>
                <h1>{title}</h1>
            </div>
        </div>
    )
}

export default SectionTitle;