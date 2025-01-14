"use client";

import Marquee from "react-marquee-slider";
import styles from "@/app/styles/section.module.scss";
import ArcImg from "../../../assets/images/time-arc.png";
import Image from "next/image";

const MiniMarquee = () => {
    return (
        <div className={styles.marqueeSection}>
            <Marquee
                velocity={50}
                direction="rtl"
                scatterRandomly={false}
                resetAfterTries={1}
                onInit={() => {}}
                onFinish={() => {}}
            >
                <div className={styles.content}>
                    <h3>Selected</h3>
                    <Image src={ArcImg} alt="ArgImg" />
                    <h3>Work</h3>
                    <Image src={ArcImg} alt="ArgImg" />
                </div>
                <></>
            </Marquee>
        </div>
    );
};

export default MiniMarquee;
