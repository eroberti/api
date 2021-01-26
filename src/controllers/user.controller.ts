import { Request, Response } from 'express';
import { Pool } from 'pg';

const connectionString = 'postgresql://postgres:postgres@localhost:5433/postgres';

const pool = new Pool({
  connectionString,
});

const all = async (req: Request, res: Response) => {
  const client = await pool.connect();
  const result = client
    .query('SELECT * FROM users')
    .then((r) => {
      res.status(200).json(r.rows);
    })
    .catch((e) => {
      console.log(e);
      res.status(500).json(e);
    });
};

const read = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const client = await pool.connect();
  const result = client
    .query('SELECT * FROM users WHERE id = $1', [id])
    .then((r) => {
      res.status(200).json(r.rows);
    })
    .catch((e) => {
      console.log(e);
      res.status(500).json(e);
    });
};

const create = async (req: Request, res: Response) => {
  const { firstName, lastName, email } = req.body;
  const client = await pool.connect();
  const result = client
    .query('INSERT INTO users (first_name, last_name, email) VALUES ($1, $2, $3)', [firstName, lastName, email])
    .then((r) => {
      res.status(200).json(r.rows);
    })
    .catch((e) => {
      console.log(e);
      res.status(500).json(e);
    });
};

const update = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { firstName, lastName, email } = req.body;
  const client = await pool.connect();
  const result = client
    .query('UPDATE users SET first_name = $1, last_name = $2, email = $3 WHERE id = $4', [
      firstName,
      lastName,
      email,
      id,
    ])
    .then((r) => {
      res.status(200).json(r.rows);
    })
    .catch((e) => {
      console.log(e);
      res.status(500).json(e);
    });
};

const remove = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const client = await pool.connect();
  const result = client
    .query('DELETE FROM users WHERE id = $1', [id])
    .then((r) => {
      res.status(200).json(r.rows);
    })
    .catch((e) => {
      console.log(e);
      res.status(500).json(e);
    });
};

export default {
  all,
  read,
  create,
  update,
  remove,
};
