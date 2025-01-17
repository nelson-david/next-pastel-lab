import PageLayout from "@/app/layouts/PageLayout";
import AwardsSection from "../components/section/AwardsSection";
import AboutHeaderSection from "../components/section/AboutHeaderSection";
import WhatWeDoSection from "../components/section/WhatWeDoSection";
import OurTeamSection from "@/app/components/section/OurTeamSection";
import HypeSection from "../components/section/HypeSection";

const About = () => {
    return (
        <PageLayout>
            <>
                <AboutHeaderSection />
                <AwardsSection />
                <OurTeamSection />
                <HypeSection />
                <WhatWeDoSection />
            </>
        </PageLayout>
    );
};

export default About;
