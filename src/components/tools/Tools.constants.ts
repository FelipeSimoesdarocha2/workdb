// Assets
import a from 'assets/tools/a.webp';
import fortinet from 'assets/tools/fortinet.webp';
import hyper_v from 'assets/tools/hyper_v.webp';
import ibm_db from 'assets/tools/ibm_db.webp';
import ibm from 'assets/tools/ibm.webp';
import informix from 'assets/tools/informix.webp';
import kaspersky from 'assets/tools/kaspersky.webp';
import kibana from 'assets/tools/kibana.webp';
import lenovo from 'assets/tools/lenovo.webp';
import maria_db from 'assets/tools/maria_db.webp';
import microsoft from 'assets/tools/microsoft.webp';
import my_sql from 'assets/tools/my_sql.webp';
import no_sql from 'assets/tools/no_sql.webp';
import oracle from 'assets/tools/oracle.webp';
import postgree_sql from 'assets/tools/postgree_sql.webp';
import power_bi from 'assets/tools/power_bi.webp';
import senior from 'assets/tools/senior.webp';
import sql_server from 'assets/tools/sql_server.webp';
import veeam from 'assets/tools/veeam.webp';
import vm_ware from 'assets/tools/vm_ware.webp';
import zabbix from 'assets/tools/zabbix.webp';

// Models
import { ToolsProps } from './models';

const companys: ToolsProps = [
    [
        {
            src: microsoft,
            alt: 'microsoft',
        },
        {
            src: power_bi,
            alt: 'power_bi',
        },
        {
            src: kibana,
            alt: 'kibana',
        },
        {
            src: kaspersky,
            alt: 'kaspersky',
        },
    ],
    [
        {
            src: zabbix,
            alt: 'zabbix',
        },
        {
            src: lenovo,
            alt: 'lenovo',
        },
        {
            src: ibm,
            alt: 'ibm',
        },
        {
            src: fortinet,
            alt: 'fortinet',
        },
        {
            src: veeam,
            alt: 'veeam',
        },
    ],
    [
        {
            src: ibm_db,
            alt: 'ibm_db',
        },
        {
            src: oracle,
            alt: 'oracle',
        },
        {
            src: my_sql,
            alt: 'my_sql',
        },
        {
            src: sql_server,
            alt: 'sql_server',
        },
    ],
    [
        {
            src: informix,
            alt: 'informix',
        },
        {
            src: senior,
            alt: 'senior',
        },
        {
            src: maria_db,
            alt: 'maria_db',
        },
        {
            src: postgree_sql,
            alt: 'postgree_sql',
        },
    ],
    [
        {
            src: no_sql,
            alt: 'no_sql',
        },
        {
            src: a,
            alt: 'a',
        },
        {
            src: vm_ware,
            alt: 'vm_ware',
        },
        {
            src: hyper_v,
            alt: 'hyper_v',
        },
    ],
];

export { companys };
