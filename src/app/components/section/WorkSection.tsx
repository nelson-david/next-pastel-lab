import { works } from "@/app/data/works";
import SingleWorkCard from "../card/SingleWorkCard";
import styles from "@/app/styles/section.module.scss";
import { WorkProps } from "@/app/types";

const WorkSection = () => {
    return (
        <div className={styles.workSection}>
            <h4 className={styles.workCaption}>
                Design selection for the past 3 years
            </h4>
            <div className={styles.workContent}>
                {works.map((work: WorkProps, index: number) => {
                    return <SingleWorkCard key={index} data={work} />;
                })}
            </div>
            {/* <div className="row">
                <div className="col-xl-2"></div>
                <div className="col-xl-9">
                    <div className={styles.workContent}>
                        <SingleWorkCard />
                    </div>
                </div>
                <div className="col-xl-1"></div>
            </div> */}
        </div>
    );
};

export default WorkSection;
