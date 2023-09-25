import mysql from 'mysql2/promise';

let mysql_conn: Promise<mysql.Connection> | null = null;

export async function getMysqlConn(url: string): Promise<mysql.Connection> {
    if (!mysql_conn) {
        mysql_conn = mysql.createConnection(url);
    }
    return mysql_conn;
}
