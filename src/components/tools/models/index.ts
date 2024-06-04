// Next
import { StaticImageData } from 'next/image';

interface Company {
    alt: string;
    src: StaticImageData;
}

export type ToolsProps = Company[][];
