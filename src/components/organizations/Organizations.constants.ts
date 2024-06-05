// Assets
import aws from 'assets/organizations/aws.webp';
import azure from 'assets/organizations/azure.webp';
import google_cloud from 'assets/organizations/google_cloud.webp';
import oracle from 'assets/organizations/oracle.webp';
import work_data_cloud from 'assets/organizations/work_data_cloud.webp';

// Models
import { OrganizationsProps } from './models';

const organizations: OrganizationsProps = [
    [
        {
            src: aws,
            alt: 'aws',
        },
        {
            src: azure,
            alt: 'azure',
        },
        {
            src: google_cloud,
            alt: 'google_cloud',
        },
    ],
    [
        {
            src: oracle,
            alt: 'oracle',
        },
        {
            src: work_data_cloud,
            alt: 'work_data_cloud',
        },
    ],
];

export { organizations };
