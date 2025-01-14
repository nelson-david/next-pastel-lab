"use client";

import Marquee from "react-marquee-slider";
import styles from "@/app/styles/section.module.scss";
import ArcImg from "../../../assets/images/time-arc.png";
import Image from "next/image";

const ExpertiseMarquee = () => {
    return (
        <div className={styles.marqueeSection} style={{ padding: "30px 0px" }}>
            <Marquee
                velocity={90}
                direction="rtl"
                scatterRandomly={false}
                resetAfterTries={1}
                onInit={() => {}}
                onFinish={() => {}}
            >
                <div className={styles.content}>
                    <h3>Expertise</h3>
                    <Image src={ArcImg} alt="ArcImg" />
                </div>
                <></>
            </Marquee>
        </div>
    );
};

export default ExpertiseMarquee;
