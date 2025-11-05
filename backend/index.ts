import express from 'express';
import cors from 'cors';
import { initializeDatabase, TechAssistPortalDatabase } from './database';
import { initializeRoutes } from './routes';

const app = express();
const PORT = process.env.PORT || 3001;

async function main() {
  const db: TechAssistPortalDatabase = await initializeDatabase('tech-assist-portal.db');
  const router = initializeRoutes(db);

  app.use(cors());
  app.use(express.json());
  app.use('/api', router);

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log('Available endpoints:');
  });
}

main().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});