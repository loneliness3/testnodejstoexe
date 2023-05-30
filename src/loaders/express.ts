import express from 'express';

export default ({ app }: { app: express.Application }) => {

    const Pool = require('pg').Pool
    const pool = new Pool({
        user: 'postgres',
        host: 'localhost',
        database: 'test',
        password: 'ohdude',
        port: 5432,
    })

    app.get('/', (_req: any, _res: any) => {
        console.log(_req.body, 'requested json');
        _res.end('Hello')
    })

    const getUsers = (request: any, response:any) => {
        pool.query('SELECT * FROM users ORDER BY id ASC', (error: any, results: any) => {
          if (error) {
            throw error
          }
          response.status(200).json(results.rows)
        })
      }

    module.exports={
        getUsers,
    }
}