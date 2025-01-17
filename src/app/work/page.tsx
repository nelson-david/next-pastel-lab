import PageLayout from "@/app/layouts/PageLayout";
import WorkHeaderSection from "../components/section/WorkHeaderSection";
import { works } from "../data/works";
import { WorkProps } from "../types";
import LargeSingleWorkCard from "../components/card/LargeSingleWorkCard";

const Work = () => {
    return (
        <PageLayout>
            <>
                <WorkHeaderSection />

                <div
                    style={{
                        paddingTop: "50px",
                        paddingBottom: "100px",
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <div style={{ width: "1100px" }}>
                        {works.map((work: WorkProps, index: number) => {
                            return (
                                <LargeSingleWorkCard key={index} data={work} />
                            );
                        })}
                    </div>
                </div>
            </>
        </PageLayout>
    );
};

export default Work;
