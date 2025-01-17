import styles from "@/app/styles/section.module.scss";

const AboutHeaderSection = () => {
    return (
        <section className={styles.aboutHeaderSection}>
            <div className={styles.titleContainer}>
                <h1>About us</h1>
            </div>
            <div className="row">
                <div className="col-xl-6"></div>
                <div className="col-xl-6">
                    <div className={styles.subContentWrapper}>
                        <h3>
                            Pastel Lab Is a forward-thinking creative agency
                            that brings bold ideas to life.
                        </h3>
                        <p>
                            We're a collective of visionaries, designers, and
                            strategists who believe in the transformative power
                            of creativity. We work hand-in-hand with our clients
                            to craft visual identities that stand out, blending
                            strategy with creativity to deliver impactful design
                            solutions.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutHeaderSection;
