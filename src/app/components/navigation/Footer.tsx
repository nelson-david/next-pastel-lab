import styles from "@/app/styles/footer.module.scss";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.titleContainer}>
                <h3 data-aos="fade-up">Pastel Lab</h3>
            </div>

            <div className={styles.linkContainer}>
                <ul>
                    <li>
                        <Link href="/">Work</Link>
                    </li>
                    <li>
                        <Link href="/">About Us</Link>
                    </li>
                    <li>
                        <Link href="/">Contact</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link href="/">Github Link</Link>
                    </li>
                    <li>
                        <Link href="/">My Store</Link>
                    </li>
                    <li>
                        <Link href="/">Reach Out</Link>
                    </li>
                </ul>
            </div>

            <div className={styles.captionContainer}>
                <ul>
                    <li>NextJS Template</li>
                </ul>
                <ul>
                    <li>Developed by The Urban Studio</li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
