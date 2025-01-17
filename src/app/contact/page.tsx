import PageLayout from "@/app/layouts/PageLayout";
import Link from "next/link";
import styles from "@/app/styles/page.module.scss";

const Contact = () => {
    return (
        <PageLayout>
            <>
                <div className={styles.contactPage}>
                    <div
                        className="row"
                        style={{
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <div className="col-xl-7">
                            <h2>Get In</h2>
                        </div>
                        <div className="col-xl-2">
                            <ul>
                                <li>
                                    <Link href="/">+3301808080</Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        emaildereve@pastellab.com
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div
                        className="row"
                        style={{
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <div className="col-xl-2">
                            <ul>
                                <li>
                                    <Link href="/">Instagram</Link>
                                </li>
                                <li>
                                    <Link href="/">Twitter</Link>
                                </li>
                                <li>
                                    <Link href="/">LinkedIn</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-xl-7">
                            <h2>Touch</h2>
                        </div>
                    </div>
                </div>
            </>
        </PageLayout>
    );
};

export default Contact;
