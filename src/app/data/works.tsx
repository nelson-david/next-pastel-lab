import Work1Img from "@/assets/images/work-1.webp";
import Work2Img from "@/assets/images/work-2.webp";
import Work3Img from "@/assets/images/work-3.webp";
import { WorkProps } from "../types";

const works: WorkProps[] = [
    {
        title: "Poetry in Motion",
        category: "Photography",
        year: "2022",
        image: Work1Img,
    },
    {
        title: "Whispers of Earth",
        category: "Art Direction",
        year: "2023",
        image: Work2Img,
    },
    {
        title: "Urban Stillness",
        category: "Photography",
        year: "2020",
        image: Work3Img,
    },
];

export { works };
