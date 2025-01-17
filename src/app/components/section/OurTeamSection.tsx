import styles from "@/app/styles/section.module.scss";
import CustomTextMarquee from "../misc/CustomTextMarquee";
import OurTeamImg from "@/assets/images/time-arc.png";
import { team } from "@/app/data/team";
import SingleFounderCard from "../card/SingleFounderCard";

const OurTeamSection = () => {
    return (
        <>
            <CustomTextMarquee words={["Our Team"]} image={OurTeamImg} />
            <section className={styles.ourTeamSection}>
                <div className={styles.wrapper}>
                    {team.map((member, index) => {
                        return (
                            <SingleFounderCard member={member} key={index} />
                        );
                    })}
                </div>
            </section>
        </>
    );
};

export default OurTeamSection;
