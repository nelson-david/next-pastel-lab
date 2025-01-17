import Image, { StaticImageData } from "next/image";
import styles from "@/app/styles/card.module.scss";

const SingleHypeCard = ({
    data,
    flip,
}: {
    data: { image: StaticImageData; title: string; description: string };
    flip?: boolean;
}) => {
    return (
        <div className={styles.singleHypeCard} data-aos="fade-up">
            <div
                className={styles.contentWrapper}
                style={{ order: flip ? 2 : 1 }}
            >
                <h3>{data.title}</h3>
                <p>{data.description}</p>
            </div>
            <div
                className={styles.imageWrapper}
                style={{ order: flip ? 1 : 2 }}
            >
                <Image src={data.image} alt={data.title} />
            </div>
        </div>
    );
};

export default SingleHypeCard;
