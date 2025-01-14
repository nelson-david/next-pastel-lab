import Image from "next/image";
import HeroImg from "../../../assets/images/hero-img.jpg";
import styles from "@/app/styles/section.module.scss";

const HeroSection = () => {
    return (
        <header className={styles.heroSection}>
            <div className={styles.heroBgImageWrapper} data-aos="slide-up">
                <Image
                    src={HeroImg}
                    alt="hero-img"
                    className={styles.heroBgImage}
                />
            </div>
            <div className={styles.heroBgWrapper}>
                <div className={styles.wrapperContent}>
                    <div className={styles.heroCaptionContainer}>
                        <p>
                            <i></i>A DESIGN studio WITH FOCUS ON CREATIVE AND
                            PRODUCT DIGITAL DESIGN SOLUTIONS, BASED IN Paris.
                        </p>
                    </div>

                    <div className={styles.heroTitleContainer}>
                        <h1 data-aos="fade-up">Pastel lab</h1>
                        <ul>
                            <li>PHOTOGRAPHY</li>
                            <li> UI/UX</li>
                            <li>Art Direction</li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeroSection;
