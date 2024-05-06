// Assets
import agile from 'assets/companys/agile.webp';
import aws from 'assets/companys/aws.webp';
import elastic from 'assets/companys/elastic.webp';
import fortinet from 'assets/companys/fortinet.webp';
import itil from 'assets/companys/itil.webp';
import microsoft from 'assets/companys/microsoft.webp';
import oracle from 'assets/companys/oracle.webp';
import sap from 'assets/companys/sap.webp';
import scrum from 'assets/companys/scrum.webp';

// Models
import { CompanysProps } from './models';

const companys: CompanysProps = [
    [
        {
            src: oracle,
            alt: 'oracle',
        },
        {
            src: agile,
            alt: 'agile',
        },
        {
            src: scrum,
            alt: 'scrum',
        },
        {
            src: sap,
            alt: 'sap',
        },
        {
            src: microsoft,
            alt: 'microsoft',
        },
    ],
    [
        {
            src: aws,
            alt: 'aws',
        },
        {
            src: fortinet,
            alt: 'fortinet',
        },
        {
            src: elastic,
            alt: 'elastic',
        },
        {
            src: itil,
            alt: 'itil',
        },
    ],
];

export { companys };
