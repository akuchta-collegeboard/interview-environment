import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { initializeDatabase, TechAssistPortalDatabase } from './database';
import { initializeRoutes } from './routes';

const app = express();
const PORT = process.env.PORT || 3001;

async function main() {
  const db: TechAssistPortalDatabase = await initializeDatabase('tech-assist-portal.db');
  const router = initializeRoutes(db);

  app.use(cors());
  app.use(morgan('dev'));
  app.use(express.json());
  app.use('/api', router);
  app.use((err, req, res, next) => {
    console.error('Unhandled error:', err, err.stack, err.cause);
    res.status(500).json({ error: 'Internal Server Error' });
  });

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

main().catch((err: Error) => {
  console.error('Failed to start server:', err, err.stack, err.cause);
  process.exit(1);
});