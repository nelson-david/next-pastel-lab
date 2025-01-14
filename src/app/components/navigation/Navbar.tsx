import Link from "next/link";
import styles from "@/app/styles/navbar.module.scss";

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <ul>
                <li>
                    <Link href="/">P.L</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/work">Work</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
