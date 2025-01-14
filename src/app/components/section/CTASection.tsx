"use client";

import CTAImg from "@/assets/images/cta-img.webp";
import styles from "@/app/styles/section.module.scss";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const CTASection = () => {
    const [scale, setScale] = useState(1.5); // Initial zoom scale
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

                // Calculate new scale for zoom-out effect
                const newScale = Math.max(1 + (1.5 - 1) * (1 - visibility), 1);
                setScale(newScale);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={styles.ctaSection}>
            <motion.div className={styles.ctaBackgroundImage}>
                <motion.img
                    style={{
                        scale,
                        transition: "transform 0.3s linear",
                    }}
                    src="https://framerusercontent.com/images/bT1s8usvFZarsE88QSPJZcgIY6o.jpg"
                    alt="CTAImage"
                    ref={containerRef}
                />
            </motion.div>
            <div className={styles.ctaContent}>
                <div className={styles.wrapper}>
                    <h3>
                        A <span>picture</span> is worth a thousand{" "}
                        <span>words</span>
                    </h3>
                    <div className={styles.straightLine}></div>
                    <div className={styles.supportingText}>
                        <div>
                            <h6>Let us elevate your brand to new heights</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CTASection;
