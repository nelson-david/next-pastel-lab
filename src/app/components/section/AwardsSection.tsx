import { awards } from "@/app/data/awards";
import { AwardProps } from "@/app/types";
import styles from "@/app/styles/section.module.scss";

const AwardsSection = () => {
    return (
        <section className={styles.awardsSection}>
            <div className={styles.wrapper}>
                {awards.map((award: AwardProps, index: number) => {
                    return (
                        <div key={index} className={styles.singleAward}>
                            <h3>{award.times}</h3>
                            <p>{award.title}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default AwardsSection;
