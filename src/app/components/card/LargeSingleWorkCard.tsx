import { WorkProps } from "@/app/types";
import styles from "@/app/styles/card.module.scss";
import Image from "next/image";
import Link from "next/link";

const LargeSingleWorkCard = ({ data }: { data: WorkProps }) => {
    return (
        <Link
            href="/"
            className={styles.largeSingleWorkCard}
            data-aos="fade-up"
        >
            <div className={styles.captionContent}>
                <p>{data.category}</p>
                <p>{data.year}</p>
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.titleWrapper}>
                    <h2>{data.title}</h2>
                </div>
                <div className={styles.imageWrapper}>
                    <Image src={data.image} alt="WorkImage" />
                </div>
            </div>
        </Link>
    );
};

export default LargeSingleWorkCard;
