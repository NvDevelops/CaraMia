import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import Database from 'better-sqlite3';
import { z } from 'zod';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(helmet());
app.use(cors({ origin: true }));
app.use(express.json());

// Initialize SQLite (file DB)
const db = new Database(process.env.DB_PATH || 'cara_mia.sqlite');
db.pragma('journal_mode = WAL');

db.exec(`
  CREATE TABLE IF NOT EXISTS reservations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    full_name TEXT NOT NULL,
    email TEXT,
    phone TEXT NOT NULL,
    party_size INTEGER NOT NULL,
    date TEXT NOT NULL,
    time TEXT NOT NULL,
    notes TEXT,
    created_at TEXT NOT NULL
  );
`);

const reservationSchema = z.object({
  fullName: z.string().min(2).max(100),
  email: z.string().email().optional().or(z.literal('')),
  phone: z.string().min(7).max(20),
  partySize: z.coerce.number().int().min(1).max(12),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  time: z.string().regex(/^\d{2}:\d{2}$/),
  notes: z.string().max(500).optional().or(z.literal(''))
});

app.post('/api/reservations', (req, res) => {
  const parsed = reservationSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: 'Invalid data', details: parsed.error.flatten() });
  }

  const { fullName, email, phone, partySize, date, time, notes } = parsed.data;
  const stmt = db.prepare(`
    INSERT INTO reservations (full_name, email, phone, party_size, date, time, notes, created_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, datetime('now'))
  `);
  const info = stmt.run(fullName, email || null, phone, partySize, date, time, notes || null);
  res.json({ id: info.lastInsertRowid, ok: true });
});

app.get('/api/health', (_, res) => res.json({ ok: true }));

app.listen(port, () => {
  console.log(`Cara Mia server running on http://localhost:${port}`);
});


