import { whatWeDo } from "@/app/data/whatWeDo";
import Accordion from "../misc/Accordion";
import styles from "@/app/styles/section.module.scss";

const WhatWeDoSection = () => {
    return (
        <section className={styles.whatWeDoSection}>
            <div className={styles.wrapper}>
                <h4 className={styles.whatWeDoCaption}>what we do best</h4>

                <div className={styles.accordionContainer}>
                    <div>
                        {whatWeDo.map((data, index: number) => {
                            return (
                                <Accordion
                                    data={data}
                                    key={index}
                                    index={index}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeDoSection;
