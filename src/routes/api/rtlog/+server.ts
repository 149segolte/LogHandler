import { getMysqlConn } from '$lib/psdb';
import { DATABASE_URL } from '$env/static/private';

const query = 'SELECT TOP(4) * FROM logdetails ORDER BY time DESC';

export async function GET() {
    const conn = await getMysqlConn(DATABASE_URL);
    const [rows] = await conn.execute(query);
    return {
        body: rows
    };
}
