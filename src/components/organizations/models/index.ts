// Next
import { StaticImageData } from 'next/image';

interface Organizations {
    alt: string;
    src: StaticImageData;
}

export type OrganizationsProps = Organizations[][];
