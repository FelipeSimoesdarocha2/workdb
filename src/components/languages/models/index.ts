// Next
import { StaticImageData } from 'next/image';

interface Languages {
    alt: string;
    src: StaticImageData;
}

export type LanguagesProps = Languages[][];
