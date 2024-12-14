import styles from "./index.module.scss";

import elitezenPFP from "../../../../assets/images/icons/elitezen.png";

function Credits() {
    return (
        <section className={styles.credits}>
            <div className={styles.contentContainer}>
                <img src={elitezenPFP} alt="Elitezen icon" />
                
                <div className={styles.text}>
                    <h4>Website created by Elitezen</h4>
                    <p>Public Contact: dev.elitezen@gmail.com</p>
                </div>
            </div>
        </section>
    )
}

export default Credits;