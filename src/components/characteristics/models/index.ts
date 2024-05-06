// Next
import { StaticImageData } from "next/image";

export interface CharacteristicsProps {
    title: string;
    sub_title: string;
    description: string;
    image: {
        alt: string;
        src: StaticImageData;
    }[];
}
