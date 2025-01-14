"use client";

import styles from "@/app/styles/section.module.scss";
import Image from "next/image";
import StartImage from "../../../assets/images/start-image.webp";
import CenterImage from "../../../assets/images/center-image.webp";
import EndImage from "../../../assets/images/end-image.webp";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const SubAboutSection = () => {
    const [scale, setScale] = useState(1); // Initial zoom scale
    const containerRef: any = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                // Calculate how much of the image is visible
                const visibility = Math.min(
                    Math.max((windowHeight - rect.top) / windowHeight, 0),
                    1
                );

                // Incrementally zoom based on visibility
                const newScale = 1 + visibility * 0.17; // Max zoom of 1.5
                setScale(newScale);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className={styles.subAboutSection}>
            <div className={styles.aboutCaptionContainer}>
                <div className={styles.content}>
                    <h3>
                        Creative Design Studio where creativity meets excellence
                        with focus on digital solutions.
                    </h3>
                    <p>
                        Our studio specializes in crafting compelling visual
                        identities that resonate with your brand's essence,
                        designing captivating websites that leave a lasting
                        impression, and capturing moments' essence through
                        stunning photography.
                    </p>
                </div>
            </div>

            <div className={styles.aboutImagesContainer} ref={containerRef}>
                <div className="row">
                    <div className="col-xl-3">
                        <div className={styles.startImage}>
                            <Image src={StartImage} alt="StartImage" />
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <motion.div
                            className={styles.centerImage}
                            style={{
                                scale,
                                transition: "transform 0.1s linear",
                            }}
                        >
                            <Image src={CenterImage} alt="CenterImage" />
                        </motion.div>
                    </div>
                    <div className="col-xl-3">
                        <div className={styles.endImage}>
                            <Image src={EndImage} alt="EndImage" />
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.bottomCaptionContainer}>
                <div>
                    <p>
                        <i></i>
                        Our holistic approach ensures every project exceeds
                        expectations by merging user-centricity with compelling
                        aesthetics.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SubAboutSection;
