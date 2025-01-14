import CTASection from "./components/section/CTASection";
import ExpertiseMarquee from "./components/section/ExpertiseMarquee";
import HeroSection from "./components/section/HeroSection";
import MiniMarquee from "./components/section/MiniMarquee";
import SubAboutSection from "./components/section/SubAboutSection";
import WhatWeDoSection from "./components/section/WhatWeDoSection";
import WorkSection from "./components/section/WorkSection";
import PageLayout from "./layouts/PageLayout";

const Home = () => {
    return (
        <PageLayout>
            <>
                <HeroSection />
                <SubAboutSection />
                <MiniMarquee />
                <WorkSection />
                <CTASection />
                <ExpertiseMarquee />
                <WhatWeDoSection />
            </>
        </PageLayout>
    );
};

export default Home;
