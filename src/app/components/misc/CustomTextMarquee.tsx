"use client";

import Marquee from "react-marquee-slider";
import styles from "@/app/styles/section.module.scss";
import Image from "next/image";
import { MarqueeProps } from "@/app/types";
import { Fragment } from "react";

const CustomTextMarquee = ({ words, image }: MarqueeProps) => {
    return (
        <div className={styles.marqueeSection}>
            <Marquee
                velocity={110}
                direction="rtl"
                scatterRandomly={false}
                resetAfterTries={1}
                onInit={() => {}}
                onFinish={() => {}}
            >
                <div className={styles.content}>
                    {words.map((text: string, index: number) => {
                        return (
                            <Fragment key={index}>
                                <h3>{text}</h3>
                                <Image src={image} alt="ArgImg" />
                            </Fragment>
                        );
                    })}
                </div>
                <></>
            </Marquee>
        </div>
    );
};

export default CustomTextMarquee;
