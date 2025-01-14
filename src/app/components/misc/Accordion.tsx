"use client";

import PlusIcon from "@/app/icons/PlusIcon";
import styles from "@/app/styles/misc.module.scss";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Accordion = ({
    index,
    data,
}: {
    index: number;
    data: { title: string; description: string };
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [__, setContentHeight] = useState(1);
    const contentRef: any = useRef(null);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        // if (contentRef.current) {
        //     setContentHeight(contentRef.current.scrollHeight);
        // }
    }, [contentRef]);

    return (
        <div
            className={
                isOpen
                    ? `${styles.accordion} ${styles.active}`
                    : styles.accordion
            }
            onClick={toggleAccordion}
            data-aos=""
        >
            <div className={styles.count}>
                <span>(0{index + 1})</span>
            </div>
            <div className={styles.content}>
                <h3>{data.title}</h3>

                <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: isOpen ? 70 : 0 }}
                    style={{ overflow: "hidden" }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                >
                    <div ref={contentRef}>{data.description}</div>
                </motion.div>
            </div>
            <div className={styles.cancel}>
                <span>
                    <PlusIcon
                        color="#000000"
                        size={{ width: "60", height: "60" }}
                    />
                </span>
            </div>
        </div>
    );
};

export default Accordion;
