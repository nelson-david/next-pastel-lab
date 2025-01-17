import Image, { StaticImageData } from "next/image";
import styles from "@/app/styles/card.module.scss";

const SingleFounderCard = ({
    member,
}: {
    member: { image: StaticImageData; name: string; role: string };
}) => {
    return (
        <div className={styles.singleFounderCard}>
            <div className={styles.imageWrapper}>
                <Image src={member.image} alt={member.name} />
            </div>
            <div className={styles.contentWrapper}>
                <h4>{member.name}</h4>
                <p>{member.role}</p>
            </div>
        </div>
    );
};

export default SingleFounderCard;
