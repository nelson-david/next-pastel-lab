import { hype } from "@/app/data/hype";
import SingleHypeCard from "../card/SingleHypeCard";
import styles from "@/app/styles/section.module.scss";

const HypeSection = () => {
    return (
        <section className={styles.hypeSection}>
            <div className={styles.header}>
                <div>
                    <h2>forward-thinking creative agency</h2>
                    <p>that breathes life into bold ideas.</p>
                </div>
            </div>

            <div className={styles.content}>
                {hype.map((singleHype, index) => {
                    return (
                        <SingleHypeCard
                            data={singleHype}
                            key={index}
                            flip={index % 2 === 0 ? false : true}
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default HypeSection;
