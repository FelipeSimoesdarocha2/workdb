// Next
import { StaticImageData } from 'next/image';

export interface PartnersProps {
    image: {
        alt: string;
        src: StaticImageData;
    };
    description: string;
}
