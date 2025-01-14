"use client";

import { ReactNode, useCallback, useEffect, useState } from "react";
import Navbar from "../components/navigation/Navbar";
import Footer from "../components/navigation/Footer";
import Lenis from "@studio-freight/lenis";
import AOS from "aos";

const PageLayout = ({ children }: { children: ReactNode }) => {
    const [lenis, setLenis] = useState<Lenis | null>(null);

    const raf = useCallback(
        (time: number) => {
            lenis?.raf(time);
            requestAnimationFrame(raf);
        },
        [lenis]
    );

    useEffect(() => {
        AOS.init({
            duration: 1000,
        });

        if (!lenis) {
            setLenis(new Lenis());
        }

        requestAnimationFrame(raf);

        return () => {
            lenis?.destroy();
        };
    }, [lenis, raf]);

    return (
        <div className="pageLayout">
            <Navbar />
            <div className="App">{children}</div>
            <Footer />
        </div>
    );
};

export default PageLayout;
