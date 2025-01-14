import Link from "next/link";
import styles from "@/app/styles/card.module.scss";
import Image from "next/image";
import { WorkProps } from "@/app/types";

const SingleWorkCard = ({ data }: { data: WorkProps }) => {
    return (
        <Link href="/app" className={styles.singleWorkCard}>
            <div className={styles.imageContainer}>
                <Image src={data.image} alt="WorkImage" />
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.captionContent}>
                    <p>{data.category}</p>
                    <p>{data.year}</p>
                </div>
                <h3>{data.title}</h3>
            </div>
        </Link>
    );
};

export default SingleWorkCard;
