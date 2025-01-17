import { StaticImageData } from "next/image";

export type WorkProps = {
    title: string;
    category: string;
    year: string;
    image: StaticImageData;
};

export type IconProps = {
    color?: string;
    size?: {
        width: string;
        height: string;
    };
};

export type AwardProps = {
    title: string;
    times: number;
};

export type MarqueeProps = {
    words: string[];
    image: StaticImageData;
};
